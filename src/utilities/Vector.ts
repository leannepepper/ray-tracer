// create a Vector class that can be used to create a vector object
// with the following properties:
// x, y, z, w
//
// The Vector class should also support the following methods:
// add, subtract, dot, cross, magnitude, normalize, toString
//

import { Tuple } from "./Tuple";

export class Vector extends Tuple {
  x: number;
  y: number;
  z: number;

  constructor(x: number, y: number, z: number) {
    super(x, y, z, 0);
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = 0;
  }
}
