import { Point } from "../math/Point";
import { Ray } from "../math/Ray";

export class Sphere {
  center: Point;
  radius: number;

  constructor(center: Point, radius: number) {
    this.center = center;
    this.radius = radius;
  }

  intersect(ray: Ray) {
    const sphereToRay = ray.origin.subtract(this.center);
    const a = ray.direction.dot(ray.direction);
    const b = 2 * ray.direction.dot(sphereToRay);
    const c = sphereToRay.dot(sphereToRay) - 1;
    const discriminant = b * b - 4 * a * c;

    if (discriminant < 0) {
      return [];
    } else {
      const t1 = (-b - Math.sqrt(discriminant)) / (2 * a);
      const t2 = (-b + Math.sqrt(discriminant)) / (2 * a);
      return [t1, t2];
    }
  }
}
