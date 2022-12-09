// Create a point object
//
// A point object is a vector with a w value of 1
//
// The point class should support the following methods:
// add, subtract, dot, cross, magnitude, normalize, toString
//

import { Matrix4 } from "./matrices/Matrix4";
import { Tuple } from "./Tuple";
import { Vector } from "./Vector";

export interface Point extends Tuple {
  cross(point: Point): Point;
  dot(point: Point): number;
}

export class Point extends Tuple {
  x: number;
  y: number;
  z: number;
  w: number;
  type: string;

  constructor(x: number, y: number, z: number) {
    super(x, y, z, 1);
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = 1;
    this.type = "point";
  }

  // The add method adds the corresponding components of the two points together to make a new point.
  add(point: Point) {
    return new Point(this.x + point.x, this.y + point.y, this.z + point.z);
  }

  // The subtract method subtracts the corresponding components of the two points to make a new point.
  subtract(point: Point) {
    return new Point(this.x - point.x, this.y - point.y, this.z - point.z);
  }

  // Multiply a point by a scalar
  multiply(scalar: number) {
    return new Point(this.x * scalar, this.y * scalar, this.z * scalar);
  }

  // The cross product of two vectors is a vector that is perpendicular to both of them.
  cross(point: Point) {
    return new Point(
      this.y * point.z - this.z * point.y,
      this.z * point.x - this.x * point.z,
      this.x * point.y - this.y * point.x
    );
  }

  // The smaller the angle between two unit vectors, the closer their dot product is to 1. If the dot product is -1 the vectors are pointing in opposite directions.
  dot(point: Point | Vector) {
    return this.x * point.x + this.y * point.y + this.z * point.z;
  }

  negate() {
    return new Point(-this.x, -this.y, -this.z);
  }

  applyMatrix4(m: Matrix4) {
    const x = this.x,
      y = this.y,
      z = this.z;
    const e = m.elements;

    const w = 1 / (e[0][2] * x + e[1][2] * y + e[2][2] * z + e[3][2]);

    this.x = (e[0][0] * x + e[0][4] * y + e[1][4] * z + e[2][4]) * w;
    this.y = (e[0][1] * x + e[1][1] * y + e[2][1] * z + e[3][1]) * w;
    this.z = (e[0][2] * x + e[1][2] * y + e[2][2] * z + e[3][2]) * w;

    return this;
  }
}
