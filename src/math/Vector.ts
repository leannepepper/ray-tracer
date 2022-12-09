// create a Vector class that can be used to create a vector object
// with the following properties:
// x, y, z, w
//
// The Vector class should also support the following methods:
// add, subtract, dot, cross, magnitude, normalize, toString
//

import { Matrix4 } from "./matrices/Matrix";
import { Point } from "./Point";
import { Tuple } from "./Tuple";

export interface Vector {
  cross(vector: Vector): Vector;
  dot(vector: Vector): number;
  magnitude(): number;
  normalize(): Vector;
}

export class Vector extends Tuple {
  x: number;
  y: number;
  z: number;
  type: string;

  constructor(x: number, y: number, z: number, w?: number) {
    super(x, y, z, 0);
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w ? w : 0;
    this.type = "vector";
  }

  // The add method adds the corresponding components of the two vectors together to make a new vector.
  add(vector: Vector) {
    return new Vector(
      this.x + vector.x,
      this.y + vector.y,
      this.z + vector.z,
      this.w + vector.w
    );
  }

  // The subtract method subtracts the corresponding components of the two vectors to make a new vector.
  subtract(vector: Vector) {
    return new Vector(
      this.x - vector.x,
      this.y - vector.y,
      this.z - vector.z,
      this.w - vector.w
    );
  }

  // Multiply a vector by a scalar
  multiply(scalar: number) {
    return new Vector(
      this.x * scalar,
      this.y * scalar,
      this.z * scalar,
      this.w * scalar
    );
  }

  // The cross product of two vectors is a vector that is perpendicular to both of them.
  cross(vector: Vector) {
    return new Vector(
      this.y * vector.z - this.z * vector.y,
      this.z * vector.x - this.x * vector.z,
      this.x * vector.y - this.y * vector.x
    );
  }

  // The smaller the angle between two unit vectors, the closer their dot product is to 1. If the dot product is -1 the vectors are pointing in opposite directions.
  dot(vector: Vector | Point) {
    return this.x * vector.x + this.y * vector.y + this.z * vector.z;
  }

  // The magnitude of a vector is also the length of the vector.
  magnitude() {
    return Math.sqrt(
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    );
  }

  // The normalized vector is a vector of the same direction as the original vector, but with a magnitude of 1.
  normalize() {
    const magnitude = this.magnitude();
    return new Vector(
      this.x / magnitude,
      this.y / magnitude,
      this.z / magnitude,
      this.w / magnitude
    );
  }

  negate() {
    return new Vector(-this.x, -this.y, -this.z, -this.w);
  }

  reflect(normal: Vector) {
    return this.subtract(normal.multiply(2 * this.dot(normal)));
  }

  applyMatrix4(matrix: Matrix4) {
    const x =
      this.x * matrix[0][0] +
      this.y * matrix[1][0] +
      this.z * matrix[2][0] +
      this.w * matrix[3][0];
    const y =
      this.x * matrix[0][1] +
      this.y * matrix[1][1] +
      this.z * matrix[2][1] +
      this.w * matrix[3][1];
    const z =
      this.x * matrix[0][2] +
      this.y * matrix[1][2] +
      this.z * matrix[2][2] +
      this.w * matrix[3][2];
    const w =
      this.x * matrix[0][3] +
      this.y * matrix[1][3] +
      this.z * matrix[2][3] +
      this.w * matrix[3][3];
    return new Vector(x, y, z, w);
  }

  transformDirection(matrix: Matrix4) {
    const x =
      this.x * matrix[0][0] + this.y * matrix[1][0] + this.z * matrix[2][0];
    const y =
      this.x * matrix[0][1] + this.y * matrix[1][1] + this.z * matrix[2][1];
    const z =
      this.x * matrix[0][2] + this.y * matrix[1][2] + this.z * matrix[2][2];
    return new Vector(x, y, z);
  }
}
