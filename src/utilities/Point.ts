// Create a point object
//
// A point object is a vector with a w value of 1
//
// The point class should support the following methods:
// add, subtract, dot, cross, magnitude, normalize, toString
//

import { Tuple } from "./Tuple";

export class Point extends Tuple {
  x: number;
  y: number;
  z: number;
  w: number;

  constructor(x: number, y: number, z: number) {
    super(x, y, z, 1);
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = 1;
  }
}
