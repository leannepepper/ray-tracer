import { Geometry } from "../geometry/Geometry";

export interface Intersection {
  t: number;
  object: Geometry;
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
    return hits.reduce((a, b) => (a.t < b.t ? a : b));
  }
}
