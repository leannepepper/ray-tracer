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
      Math.abs(this.x - tuple.x) < EPLISILON &&
      Math.abs(this.y - tuple.y) < EPLISILON &&
      Math.abs(this.z - tuple.z) < EPLISILON
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
