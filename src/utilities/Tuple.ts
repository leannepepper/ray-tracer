import { EPLISILON } from "./mathUtils";

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

  dot(tuple: Tuple) {
    return (
      this.x * tuple.x + this.y * tuple.y + this.z * tuple.z + this.w * tuple.w
    );
  }

  equals(tuple: Tuple) {
    return (
      Math.abs(this.x - tuple.x) < EPLISILON &&
      Math.abs(this.y - tuple.y) < EPLISILON &&
      Math.abs(this.z - tuple.z) < EPLISILON &&
      Math.abs(this.w - tuple.w) < EPLISILON
    );
  }

  subtract(tuple: Tuple) {
    return new Tuple(
      this.x - tuple.x,
      this.y - tuple.y,
      this.z - tuple.z,
      this.w - tuple.w
    );
  }
}
