import { PhongMaterial } from "../materials/PhongMaterial";
import { Intersection } from "../math/Intersections";
import { Matrix4 } from "../math/matrices/Matrix4";
import { Point } from "../math/Point";
import { Ray } from "../math/Ray";
import { Vector } from "../math/Vector";
import { Geometry } from "./Geometry";

export class Sphere extends Geometry {
  center: Vector;
  radius: number;
  transform: Matrix4;
  material: PhongMaterial;
  normals: Vector[];

  constructor(center: Vector, radius: number, material?: PhongMaterial) {
    super();
    this.center = center;
    this.radius = radius;
    this.transform = new Matrix4().identity();
    this.material = material || new PhongMaterial();

    this.normals = [
      new Vector(1, 0, 0),
      new Vector(0, 1, 0),
      new Vector(0, 0, 1),
      new Vector(-1, 0, 0),
      new Vector(0, -1, 0),
      new Vector(0, 0, -1),
    ];
  }

  intersect(ray: Ray): Intersection[] {
    // transform ray to object space
    const rayObjectSpace = ray.applyMatrix4(this.transform.invert());
    const sphereToRay = rayObjectSpace.origin.subtract(this.center);
    const a = rayObjectSpace.direction.dot(rayObjectSpace.direction);
    const b = 2 * rayObjectSpace.direction.dot(sphereToRay);
    const c = sphereToRay.dot(sphereToRay) - 1;
    const discriminant = b * b - 4 * a * c;

    if (discriminant < 0) {
      return [];
    }

    const t1 = (-b - Math.sqrt(discriminant)) / (2 * a);
    const t2 = (-b + Math.sqrt(discriminant)) / (2 * a);

    return [
      { t: t1, object: this },
      { t: t2, object: this },
    ];
  }

  // find the Normal at a point on the surface of the sphere
  normalAt(point: Point): Vector {
    const objectPoint = this.transform.invert().multiply(point);
    const objectNormal = objectPoint.subtract(this.center);
    const worldNormal = this.transform
      .invert()
      .transpose()
      .multiply(objectNormal);
    worldNormal.w = 0;
    return worldNormal.normalize();
  }
}
