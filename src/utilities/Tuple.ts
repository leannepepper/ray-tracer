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

  subtract(tuple: Tuple) {
    return new Tuple(
      this.x - tuple.x,
      this.y - tuple.y,
      this.z - tuple.z,
      this.w - tuple.w
    );
  }

  dot(tuple: Tuple) {
    return (
      this.x * tuple.x + this.y * tuple.y + this.z * tuple.z + this.w * tuple.w
    );
  }
}
