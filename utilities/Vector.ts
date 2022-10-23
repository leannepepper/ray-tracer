// create a Vector class that can be used to create a vector object
// with the following properties:
// x, y, z, w
//
// The Vector class should also support the following methods:
// add, subtract, dot, cross, magnitude, normalize, toString
//

interface Vector {
  x: number;
  y: number;
  z: number;
  w?: number;
}

class Vector {
  constructor(x: number, y: number, z: number) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = 0;
  }

  add(vector: Vector) {
    return new Vector(this.x + vector.x, this.y + vector.y, this.z + vector.z);
  }

  subtract(vector: Vector) {
    return new Vector(this.x - vector.x, this.y - vector.y, this.z - vector.z);
  }

  dot(vector: Vector) {
    return this.x * vector.x + this.y * vector.y + this.z * vector.z;
  }
}

module.exports = Vector;
