import { Tuple } from "./Tuple";

export class Color extends Tuple {
  r: number;
  g: number;
  b: number;

  constructor(x: number, y: number, z: number, w?: number) {
    super(x, y, z, 0);

    this.x = x;
    this.y = y;
    this.z = z;
    this.r = x;
    this.g = y;
    this.b = z;
    this.w = w ? w : 0;
  }
}
