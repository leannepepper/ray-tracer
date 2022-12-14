import { EPSILON } from "./mathUtils";
import { Point } from "./Point";

export interface Tuple {
  x: number;
  y: number;
  z: number;
  w: number;

  add(tuple: Tuple): Tuple;
  subtract(tuple: Tuple): Tuple;
  negate(): Tuple;
  multiply(scalar: number): Tuple;
  divide(scalar: number): Tuple;
  equals(tuple: Tuple): boolean;
}

export class Tuple {
  x: number;
  y: number;
  z: number;
  w: number;

  constructor(x: number, y: number, z: number, w: number) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
  }

  add(tuple: Tuple) {
    return new Tuple(
      this.x + tuple.x,
      this.y + tuple.y,
      this.z + tuple.z,
      this.w + tuple.w
    );
  }

  divide(scalar: number) {
    return new Tuple(
      this.x / scalar,
      this.y / scalar,
      this.z / scalar,
      this.w / scalar
    );
  }

  equals(tuple: Tuple) {
    return (
      Math.abs(this.x - tuple.x) < EPSILON &&
      Math.abs(this.y - tuple.y) < EPSILON &&
      Math.abs(this.z - tuple.z) < EPSILON
    );
  }

  multiply(scalar: number) {
    return new Tuple(
      this.x * scalar,
      this.y * scalar,
      this.z * scalar,
      this.w * scalar
    );
  }

  negate = () => {
    return new Tuple(-this.x, -this.y, -this.z, -this.w);
  };

  subtract(tuple: Tuple) {
    return new Tuple(
      this.x - tuple.x,
      this.y - tuple.y,
      this.z - tuple.z,
      this.w - tuple.w
    );
  }
}
