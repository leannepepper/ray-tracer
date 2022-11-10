// create a WebGLRenderer class that can be used to create a WebGLRenderer object and canvas element

import { Scene } from "./Scene";

export class WebGLRenderer {
  canvas: HTMLCanvasElement;
  gl: WebGLRenderingContext | null;
  width: number;
  height: number;

  constructor() {
    this.canvas = document.createElement("canvas");
    this.gl = this.canvas.getContext("webgl", { preserveDrawingBuffer: true });
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

  render(scene: Scene) {
    const gl = this.gl;
    if (!gl) {
      return;
    }

    gl.viewport(0, 0, this.width, this.height);
    gl.clearColor(0, 0, 0, 1);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    const objects = scene.getObjects();
    objects.forEach((object) => {});
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
