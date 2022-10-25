// create a WebGLRenderer class that can be used to create a WebGLRenderer object and canvas element

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

  // Save the canvas as a PNG image
  saveAsPNG() {
    this.canvas.toBlob((blob) => {
      saveBlob(
        blob,
        `screencapture-${this.canvas.width}x${this.canvas.height}.png`
      );
    });
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
