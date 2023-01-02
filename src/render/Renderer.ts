import { Scene } from "./Scene";
import { Vector } from "../math/Vector";
import { Geometry } from "../geometry/Geometry";
import { Sphere } from "../geometry/Sphere";
import { Ray } from "../math/Ray";
import { Point } from "../math/Point";
import { PointLight } from "../lights/PointLight";
import { Color } from "../math/Color";
import { Intersections } from "../math/Intersections";
import { Camera } from "../camera/Camera";

export class Renderer {
  canvas: HTMLCanvasElement;
  gl: CanvasRenderingContext2D | null;
  width: number;
  height: number;

  constructor() {
    this.canvas = document.createElement("canvas");
    this.gl = this.canvas.getContext("2d");
    this.width = 100;
    this.height = 100;

    document.body.appendChild(this.canvas);
  }

  setSize(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.canvas.width = width;
    this.canvas.height = height;
  }

  getContext() {
    return this.gl;
  }

  saveAsPNG() {
    this.canvas.toBlob((blob) => {
      saveBlob(
        blob,
        `screencapture-${this.canvas.width}x${this.canvas.height}.png`
      );
    });
  }

  lighting(lights: PointLight[], { object: { material }, point, normal, eye }) {
    const light = lights[0];
    const effectiveColor = material.color.multiply(light.intensity);

    const lightVector = light.position.subtract(point).normalize();
    const ambient = effectiveColor.multiply(material.ambient);
    const lightDotNormal = lightVector.dot(normal);

    if (lightDotNormal < 0) {
      return ambient;
    }

    const diffuse = effectiveColor.multiply(material.diffuse * lightDotNormal);

    const reflectVector = lightVector.multiply(-1).reflect(normal);
    const reflectDotEye = reflectVector.dot(eye);

    if (reflectDotEye <= 0) {
      return ambient.add(diffuse);
    }

    const factor = Math.pow(reflectDotEye, material.shininess);
    const specular = light.intensity * material.specular * factor;

    return ambient.add(diffuse).add(new Color(specular, specular, specular));
  }

  //This is the first version of a default camera. It is not used anymore.
  getRayDirection(x: number, y: number) {
    const fov = 90;
    const aspectRatio = this.width / this.height;
    const fovRadians = ((fov / 2) * Math.PI) / 180;

    const xComp =
      (2 * ((x + 0.5) / this.width) - 1) * Math.tan(fovRadians) * aspectRatio;
    const yComp = (1 - 2 * ((y + 0.5) / this.height)) * Math.tan(fovRadians);

    return new Vector(xComp, yComp, -1).normalize();
  }

  render(scene: Scene, camera: Camera): ImageData | void {
    const gl = this.gl;
    if (!gl) {
      return;
    }

    const sceneLights = scene.getLights();
    const intersections = new Intersections();
    const dataArray = new Uint8ClampedArray(this.width * this.height * 4);

    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        //const rayDirection = this.getRayDirection(x, y);
        //const ray = new Ray(new Point(0, 0, 2), rayDirection);

        const ray = camera.rayForPixel(x, y);
        const hits = intersections.getIntersections(scene, ray);

        if (hits.intersections.length > 0) {
          const shadingInfo = intersections.prepareComputations(
            hits.intersections[0],
            ray
          );
          const color = this.lighting(sceneLights, shadingInfo);
          const index = (x + y * this.width) * 4;
          dataArray[index] = color.x * 255;
          dataArray[index + 1] = color.y * 255;
          dataArray[index + 2] = color.z * 255;
          dataArray[index + 3] = 255;
        } else {
          const index = (x + y * this.width) * 4;
          dataArray[index] = 100;
          dataArray[index + 1] = 100;
          dataArray[index + 2] = 100;
          dataArray[index + 3] = 255;
        }
      }
    }

    const imageData = new ImageData(dataArray, this.width, this.height);

    gl.putImageData(imageData, 0, 0);
  }
}

const saveBlob = (function () {
  const a = document.createElement("a");
  document.body.appendChild(a);
  a.style.display = "none";
  return function saveData(blob, fileName) {
    const url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = fileName;
    a.click();
  };
})();
