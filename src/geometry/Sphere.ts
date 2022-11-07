import { Point } from "../math/Point";
import { Ray } from "../math/Ray";
import { Vector } from "../math/Vector";

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
    const c = sphereToRay.dot(sphereToRay) - Math.pow(this.radius, 2);
    const discriminant = Math.pow(b, 2) - 4 * a * c;

    if (discriminant < 0) {
      return [];
    }

    return [
      (-b - Math.sqrt(discriminant)) / (2 * a),
      (-b + Math.sqrt(discriminant)) / (2 * a),
    ];
  }
}
