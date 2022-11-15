// create a WebGLRenderer class that can be used to create a WebGLRenderer object and canvas element

import { Scene } from "./Scene";
import { Vector } from "../math/Vector";
import { Geometry } from "../geometry/Geometry";
import { Sphere } from "../geometry/Sphere";
import { Ray } from "../math/Ray";

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
      return new Vector(1, 0, 0);
    }
    return new Vector(0, 0, 0);
  }

  render(scene: Scene): ImageData | void {
    const gl = this.gl;
    if (!gl) {
      return;
    }

    const objects = scene.getObjects();
    const firstObject = objects[0] as Sphere;

    var colorDepth = 4;
    var buffer = new ArrayBuffer(this.width * this.height * colorDepth);
    var bufferView = new Uint32Array(buffer);
    var invWidth = 1 / this.width;
    var invHeight = 1 / this.height;
    var fov = 30;
    var aspectRatio = this.width / this.height;
    var angle = Math.tan((Math.PI * 0.5 * fov) / 180);
    var rayOrigin = new Vector(0, 0, 0);
    var pixelIndex = 0;

    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        var xx = (2 * ((x + 0.5) * invWidth) - 1) * angle * aspectRatio;
        var yy = (1 - 2 * ((y + 0.5) * invHeight)) * angle;
        var rayDir = new Vector(xx, yy, -1);
        rayDir.normalize();
        const ray = new Ray(rayOrigin, rayDir);

        // trace
        var pixelColor = this.trace(ray, firstObject);

        pixelColor.x = Math.min(1, pixelColor.x);
        pixelColor.y = Math.min(1, pixelColor.y);
        pixelColor.z = Math.min(1, pixelColor.z);

        // convert pixel to bytes
        var r = Math.round(pixelColor.x * 255);
        var g = Math.round(pixelColor.y * 255);
        var b = Math.round(pixelColor.z * 255);

        bufferView[pixelIndex] =
          (255 << 24) | // alpha
          (b << 16) | // blue
          (g << 8) | // green
          r; // red
      }
    }

    const arr = new Uint8ClampedArray(40_000);

    // Fill the array with the same RGBA values
    for (let i = 0; i < arr.length; i += 4) {
      arr[i + 0] = 0; // R value
      arr[i + 1] = 190; // G value
      arr[i + 2] = 0; // B value
      arr[i + 3] = 255; // A value
    }

    const imageData = new ImageData(arr, this.width, this.height);
    console.log({ imageData });

    return imageData;
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
