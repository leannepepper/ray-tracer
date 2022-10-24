// create a WebGLRenderer class that can be used to create a WebGLRenderer object and canvas element

export class WebGLRenderer {
  canvas: HTMLCanvasElement;
  gl: WebGLRenderingContext | null;
  width: number;
  height: number;

  constructor() {
    this.canvas = document.createElement("canvas");
    this.gl = this.canvas.getContext("webgl");
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

  makeGreen() {
    if (this.gl) {
      this.gl.clearColor(0, 1, 0, 1);
      this.gl.clear(this.gl.COLOR_BUFFER_BIT);
    }
  }

  // return the WebGLRenderingContext
  getContext() {
    return this.gl;
  }
}
