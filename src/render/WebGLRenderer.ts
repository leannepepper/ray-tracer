// create a WebGLRenderer class that can be used to create a WebGLRenderer object and canvas element

import { Scene } from "./Scene";
import { Vector } from "../math/Vector";
import { Geometry } from "../geometry/Geometry";
import { Sphere } from "../geometry/Sphere";
import { Ray } from "../math/Ray";
import { Point } from "../math/Point";

export class WebGLRenderer {
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

  trace(ray: Ray, object: Sphere) {
    const hit = object.intersect(ray);

    if (hit.length > 0) {
      return true;
      // return new Vector(1, 0, 0);
    }
    return false;
    //return new Vector(0, 0, 0);
  }

  getRayDirection(x: number, y: number) {
    const fov = 90;
    const aspectRatio = this.width / this.height;
    const fovRadians = ((fov / 2) * Math.PI) / 180;

    const xComp =
      (2 * ((x + 0.5) / this.width) - 1) * Math.tan(fovRadians) * aspectRatio;
    const yComp = (1 - 2 * ((y + 0.5) / this.height)) * Math.tan(fovRadians);

    return new Vector(xComp, yComp, -1).normalize();
  }

  render(scene: Scene): ImageData | void {
    const gl = this.gl;
    if (!gl) {
      return;
    }

    const objects = scene.getObjects();
    const firstObject = objects[0] as Sphere;
    const dataArray = new Uint8ClampedArray(this.width * this.height * 4);

    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        const rayDirection = this.getRayDirection(x, y);
        const ray = new Ray(new Point(0, 0, -2), rayDirection);
        const hit = this.trace(ray, firstObject);

        dataArray[y * this.width * 4 + x * 4 + 0] = hit ? 255 : 0;
        dataArray[y * this.width * 4 + x * 4 + 1] = 0;
        dataArray[y * this.width * 4 + x * 4 + 2] = 0;
        dataArray[y * this.width * 4 + x * 4 + 3] = 255;
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
