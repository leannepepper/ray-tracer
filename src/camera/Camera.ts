import { Matrix4 } from "../math/matrices/Matrix4";
import { Point } from "../math/Point";
import { Ray } from "../math/Ray";
import { Vector } from "../math/Vector";

class Camera {
  hsize: number;
  vsize: number;
  fov: number;
  transform: Matrix4;
  halfWidth: number;
  halfHeight: number;
  pixelSize: number;

  constructor(hsize = 50, vsize = 50, fov = 90) {
    this.hsize = hsize;
    this.vsize = vsize;
    this.fov = fov;
    this.transform = new Matrix4().identity();

    this.getPixelSize();
  }

  setTransform(from: Point, to: Point, up: Vector) {
    const forward = to.subtract(from).normalize();
    const upn = up.normalize();
    const left = forward.cross(upn);
    const trueUp = left.cross(forward);
    const orientation = new Matrix4(
      left.x,
      left.y,
      left.z,
      0,
      trueUp.x,
      trueUp.y,
      trueUp.z,
      0,
      -forward.x,
      -forward.y,
      -forward.z,
      0,
      0,
      0,
      0,
      1
    );

    this.transform = orientation.multiply(
      new Matrix4().translate(-from.x, -from.y, -from.z)
    ) as Matrix4;
  }

  private getPixelSize() {
    const halfView = Math.tan(this.fov / 2);
    const aspect = this.hsize / this.vsize;

    if (aspect >= 1) {
      this.halfWidth = halfView;
      this.halfHeight = halfView / aspect;
    } else {
      this.halfWidth = halfView * aspect;
      this.halfHeight = halfView;
    }

    this.pixelSize = (this.halfWidth * 2) / this.hsize;
  }

  rayForPixel(px: number, py: number) {
    // the offset from the edge of the canvas to the pixel's center
    const xOffset = (px + 0.5) * this.pixelSize;
    const yOffset = (py + 0.5) * this.pixelSize;

    // the untransformed coordinates of the pixel in world space.
    // (remember that the camera looks toward -z, so +x is to the *left*.)
    const worldX = this.halfWidth - xOffset;
    const worldY = this.halfHeight - yOffset;

    // using the camera matrix, transform the canvas point and the origin,
    // and then compute the ray's direction vector.
    // (remember that the canvas is at z=-1)
    const pixel = new Point(worldX, worldY, -1).applyMatrix4(
      this.transform.invert()
    );
    const origin = new Point(0, 0, 0).applyMatrix4(this.transform.invert());
    const direction = pixel.subtract(origin).normalize().normalize();

    return new Ray(origin, direction);
  }
}

export { Camera };
