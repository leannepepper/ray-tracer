import { Matrix4 } from "../math/matrices/Matrix4";

class Camera {
  hsize: number;
  vsize: number;
  fov: number;
  transform: Matrix4;

  constructor(hsize = 50, vsize = 50, fov = 90) {
    this.hsize = hsize;
    this.vsize = vsize;
    this.fov = fov;
    this.transform = new Matrix4().identity();
  }

  setTransform(transform: Matrix4) {
    this.transform = transform;
  }
}

export { Camera };
