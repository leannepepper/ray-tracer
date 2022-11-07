import { Intersection } from "../math/Intersections";
import { Point } from "../math/Point";
import { Ray } from "../math/Ray";
import { Vector } from "../math/Vector";
import { Geometry } from "./Geometry";

export class Sphere extends Geometry {
  center: Point;
  radius: number;

  constructor(center: Point, radius: number) {
    super();
    this.center = center;
    this.radius = radius;
  }

  intersect(ray: Ray): Intersection[] {
    const sphereToRay = ray.origin.subtract(this.center);

    const a = ray.direction.dot(ray.direction);
    const b = 2 * ray.direction.dot(sphereToRay);
    const c = sphereToRay.dot(sphereToRay) - Math.pow(this.radius, 2);
    const discriminant = Math.pow(b, 2) - 4 * a * c;

    if (discriminant < 0) {
      return [];
    } else {
      const t1 = (-b - Math.sqrt(discriminant)) / (2 * a);
      const t2 = (-b + Math.sqrt(discriminant)) / (2 * a);

      return [
        { t: t1, object: this },
        { t: t2, object: this },
      ];
    }
  }
}
