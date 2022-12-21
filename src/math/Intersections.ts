import { Geometry } from "../geometry/Geometry";
import { Sphere } from "../geometry/Sphere";
import { Scene } from "../render/Scene";
import { Ray } from "./Ray";

export interface Intersection {
  t: number;
  object: Sphere;
}

export class Intersections {
  intersections: Intersection[];

  constructor(intersections?: Intersection[]) {
    this.intersections = intersections || [];
  }

  add(intersection: Intersection[]) {
    this.intersections.push(...intersection);
  }

  hit() {
    const hits = this.intersections.filter((i) => i.t >= 0);

    if (hits.length === 0) {
      return null;
    }

    // Sort by t value and return the first one (closest)
    return hits.reduce((a, b) => (a.t < b.t ? a : b));
  }

  getIntersections(scene: Scene, ray: Ray) {
    const objects = scene.getObjects();

    objects.forEach((object) => {
      const hit = object.intersect(ray);

      if (hit.length > 0) {
        this.add(hit);
      }
    });

    // Sort by minimum positive t value
    this.intersections.sort((a, b) => a.t - b.t);

    return this;
  }

  prepareComputations(intersection: Intersection, ray: Ray) {
    const point = ray.position(intersection.t);
    let normal = intersection.object.normalAt(point);
    const eye = ray.direction.negate();
    const inside = normal.dot(eye) < 0;

    if (inside) {
      normal = normal.negate();
    }

    return {
      t: intersection.t,
      object: intersection.object,
      point,
      eye,
      normal,
      inside,
    };
  }
}
