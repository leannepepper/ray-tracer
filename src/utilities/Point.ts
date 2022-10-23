// Create a point object
//
// A point object is a vector with a w value of 1
//
// The point class should support the following methods:
// add, subtract, dot, cross, magnitude, normalize, toString
//

export class Point {
  x: number;
  y: number;
  z: number;
  w?: number;

  constructor(x: number, y: number, z: number) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = 1;
  }

  add(point: Point) {
    return new Point(this.x + point.x, this.y + point.y, this.z + point.z);
  }

  subtract(point: Point) {
    return new Point(this.x - point.x, this.y - point.y, this.z - point.z);
  }

  dot(point: Point) {
    return this.x * point.x + this.y * point.y + this.z * point.z;
  }
}
