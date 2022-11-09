import { Matrix4 } from "./matrices/Matrix4";
import { Point } from "./Point";
import { Vector } from "./Vector";

export interface Ray {
  origin: Point;
  direction: Vector;
}

export class Ray {
  origin: Point;
  direction: Vector;

  constructor(origin: Point, direction: Vector) {
    this.origin = origin;
    this.direction = direction;
  }

  position(t: number) {
    return this.origin.add(this.direction.multiply(t));
  }

  transform(matrix: Matrix4) {
    return new Ray(
      matrix.multiply(this.origin) as Point,
      matrix.multiply(this.direction) as Vector
    );
  }
}
