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

  // The normal vector of a point is the vector from the origin to the point.
  // TODO: Is this correct? Should a point have a normalize function?
  normalize() {
    return new Vector(this.x, this.y, this.z);
  }

  // apply a matrix to a point
  applyMatrix4(matrix: Matrix4) {
    const x =
      this.x * matrix.m00 +
      this.y * matrix.m01 +
      this.z * matrix.m02 +
      this.w * matrix.m03;
    const y =
      this.x * matrix.m10 +
      this.y * matrix.m11 +
      this.z * matrix.m12 +
      this.w * matrix.m13;
    const z =
      this.x * matrix.m20 +
      this.y * matrix.m21 +
      this.z * matrix.m22 +
      this.w * matrix.m23;
    const w =
      this.x * matrix.m30 +
      this.y * matrix.m31 +
      this.z * matrix.m32 +
      this.w * matrix.m33;

    return new Point(x, y, z);
  }
}
