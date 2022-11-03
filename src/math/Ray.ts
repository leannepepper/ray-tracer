import { Point } from "./Point";
import { Vector } from "./Vector";

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
}
