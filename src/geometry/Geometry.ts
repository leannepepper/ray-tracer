import { Intersection } from "../math/Intersections";
import { Point } from "../math/Point";
import { Ray } from "../math/Ray";
import { Vector } from "../math/Vector";

export class Geometry {
  constructor() {}

  intersect(ray: Ray): Intersection[] {
    return [];
  }

  normalAt(point: Point): void {
    return;
  }
}
