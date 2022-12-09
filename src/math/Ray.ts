import { Matrix4 } from "./matrices/Matrix4";
import { Point } from "./Point";
import { Vector } from "./Vector";

export interface Ray {
  origin: Vector;
  direction: Vector;
}

export class Ray {
  origin: Vector;
  direction: Vector;

  constructor(origin: Vector, direction: Vector) {
    this.origin = origin;
    this.direction = direction;
  }

  position(t: number) {
    return this.origin.add(this.direction.multiply(t));
  }

  applyMatrix4(matrix: Matrix4) {
    this.origin.applyMatrix4(matrix);
    this.direction.transformDirection(matrix);

    return this;
  }
}
