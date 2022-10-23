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

  constructor(x: number, y: number, z: number, w?: number) {
    super(x, y, z, 0);
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w ? w : 0;
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
  dot(vector: Vector) {
    return (
      this.x * vector.x +
      this.y * vector.y +
      this.z * vector.z +
      this.w * vector.w
    );
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
}
