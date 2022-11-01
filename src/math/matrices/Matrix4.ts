import { Matrix3 } from "./Matrix";
import { Tuple } from "../Tuple";

export class Matrix4 {
  elements: number[][];

  constructor(
    n11: number = 1,
    n12: number = 0,
    n13: number = 0,
    n14: number = 0,
    n21: number = 0,
    n22: number = 1,
    n23: number = 0,
    n24: number = 0,
    n31: number = 0,
    n32: number = 0,
    n33: number = 1,
    n34: number = 0,
    n41: number = 0,
    n42: number = 0,
    n43: number = 0,
    n44: number = 1
  ) {
    this.elements = [
      [n11, n12, n13, n14],
      [n21, n22, n23, n24],
      [n31, n32, n33, n34],
      [n41, n42, n43, n44],
    ];
  }

  set(
    n11: number,
    n12: number,
    n13: number,
    n14: number,
    n21: number,
    n22: number,
    n23: number,
    n24: number,
    n31: number,
    n32: number,
    n33: number,
    n34: number,
    n41: number,
    n42: number,
    n43: number,
    n44: number
  ) {
    this.elements[0][0] = n11;
    this.elements[0][1] = n12;
    this.elements[0][2] = n13;
    this.elements[0][3] = n14;
    this.elements[1][0] = n21;
    this.elements[1][1] = n22;
    this.elements[1][2] = n23;
    this.elements[1][3] = n24;
    this.elements[2][0] = n31;
    this.elements[2][1] = n32;
    this.elements[2][2] = n33;
    this.elements[2][3] = n34;
    this.elements[3][0] = n41;
    this.elements[3][1] = n42;
    this.elements[3][2] = n43;
    this.elements[3][3] = n44;

    return this;
  }

  identity() {
    this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    return this;
  }

  multiply(b: Matrix4 | Tuple) {
    return this.multiplyMatrices(this, b);
  }

  multiplyMatrices(a: Matrix4, b: Matrix4 | Tuple) {
    // if matrix is a tuple, then we are multiplying a matrix by a vector
    if (b instanceof Tuple) {
      const x =
        a.elements[0][0] * b.x +
        a.elements[0][1] * b.y +
        a.elements[0][2] * b.z +
        a.elements[0][3] * b.w;
      const y =
        a.elements[1][0] * b.x +
        a.elements[1][1] * b.y +
        a.elements[1][2] * b.z +
        a.elements[1][3] * b.w;
      const z =
        a.elements[2][0] * b.x +
        a.elements[2][1] * b.y +
        a.elements[2][2] * b.z +
        a.elements[2][3] * b.w;
      const w =
        a.elements[3][0] * b.x +
        a.elements[3][1] * b.y +
        a.elements[3][2] * b.z +
        a.elements[3][3] * b.w;

      return new Tuple(x, y, z, w);
    }

    const aElements = a.elements;
    const bElements = b.elements;
    const tElements = this.elements;

    const a11 = aElements[0][0],
      a12 = aElements[0][1],
      a13 = aElements[0][2],
      a14 = aElements[0][3];
    const a21 = aElements[1][0],
      a22 = aElements[1][1],
      a23 = aElements[1][2],
      a24 = aElements[1][3];
    const a31 = aElements[2][0],
      a32 = aElements[2][1],
      a33 = aElements[2][2],
      a34 = aElements[2][3];
    const a41 = aElements[3][0],
      a42 = aElements[3][1],
      a43 = aElements[3][2],
      a44 = aElements[3][3];

    const b11 = bElements[0][0],
      b12 = bElements[0][1],
      b13 = bElements[0][2],
      b14 = bElements[0][3];
    const b21 = bElements[1][0],
      b22 = bElements[1][1],
      b23 = bElements[1][2],
      b24 = bElements[1][3];
    const b31 = bElements[2][0],
      b32 = bElements[2][1],
      b33 = bElements[2][2],
      b34 = bElements[2][3];
    const b41 = bElements[3][0],
      b42 = bElements[3][1],
      b43 = bElements[3][2],
      b44 = bElements[3][3];

    tElements[0][0] = a11 * b11 + a12 * b21 + a13 * b31 + a14 * b41;
    tElements[0][1] = a11 * b12 + a12 * b22 + a13 * b32 + a14 * b42;
    tElements[0][2] = a11 * b13 + a12 * b23 + a13 * b33 + a14 * b43;
    tElements[0][3] = a11 * b14 + a12 * b24 + a13 * b34 + a14 * b44;

    tElements[1][0] = a21 * b11 + a22 * b21 + a23 * b31 + a24 * b41;
    tElements[1][1] = a21 * b12 + a22 * b22 + a23 * b32 + a24 * b42;
    tElements[1][2] = a21 * b13 + a22 * b23 + a23 * b33 + a24 * b43;
    tElements[1][3] = a21 * b14 + a22 * b24 + a23 * b34 + a24 * b44;

    tElements[2][0] = a31 * b11 + a32 * b21 + a33 * b31 + a34 * b41;
    tElements[2][1] = a31 * b12 + a32 * b22 + a33 * b32 + a34 * b42;
    tElements[2][2] = a31 * b13 + a32 * b23 + a33 * b33 + a34 * b43;
    tElements[2][3] = a31 * b14 + a32 * b24 + a33 * b34 + a34 * b44;

    tElements[3][0] = a41 * b11 + a42 * b21 + a43 * b31 + a44 * b41;
    tElements[3][1] = a41 * b12 + a42 * b22 + a43 * b32 + a44 * b42;
    tElements[3][2] = a41 * b13 + a42 * b23 + a43 * b33 + a44 * b43;
    tElements[3][3] = a41 * b14 + a42 * b24 + a43 * b34 + a44 * b44;

    return this;
  }

  transpose() {
    const result = new Matrix4();

    result.elements[0][0] = this.elements[0][0];
    result.elements[0][1] = this.elements[1][0];
    result.elements[0][2] = this.elements[2][0];
    result.elements[0][3] = this.elements[3][0];

    result.elements[1][0] = this.elements[0][1];
    result.elements[1][1] = this.elements[1][1];
    result.elements[1][2] = this.elements[2][1];
    result.elements[1][3] = this.elements[3][1];

    result.elements[2][0] = this.elements[0][2];
    result.elements[2][1] = this.elements[1][2];
    result.elements[2][2] = this.elements[2][2];
    result.elements[2][3] = this.elements[3][2];

    result.elements[3][0] = this.elements[0][3];
    result.elements[3][1] = this.elements[1][3];
    result.elements[3][2] = this.elements[2][3];
    result.elements[3][3] = this.elements[3][3];

    return result;
  }

  submatrix(row: number, column: number) {
    const result = new Matrix3();

    let r = 0;
    for (let i = 0; i < 4; i++) {
      if (i === row) continue;

      let c = 0;
      for (let j = 0; j < 4; j++) {
        if (j === column) continue;

        result.elements[r][c] = this.elements[i][j];
        c++;
      }
      r++;
    }

    return result;
  }

  minor(row: number, column: number) {
    const submatrix = this.submatrix(row, column);
    return submatrix.determinant();
  }

  cofactor(row: number, column: number) {
    const minor = this.minor(row, column);
    return (row + column) % 2 === 0 ? minor : -minor;
  }

  determinant() {
    let result = 0;
    for (let i = 0; i < 4; i++) {
      result += this.elements[0][i] * this.cofactor(0, i);
    }
    return result;
  }

  invert() {
    const result = new Matrix4();

    const determinant = this.determinant();
    if (determinant === 0) {
      throw new Error("Cannot invert a matrix with a determinant of 0");
    }

    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        result.elements[i][j] = this.cofactor(j, i) / determinant;
      }
    }

    return result;
  }

  translate(x: number, y: number, z: number) {
    this.set(1, 0, 0, x, 0, 1, 0, y, 0, 0, 1, z, 0, 0, 0, 1);

    return this;
  }

  scale(x: number, y: number, z: number) {
    this.set(x, 0, 0, 0, 0, y, 0, 0, 0, 0, z, 0, 0, 0, 0, 1);

    return this;
  }

  rotateX(radians: number) {
    const c = Math.cos(radians);
    const s = Math.sin(radians);

    this.set(1, 0, 0, 0, 0, c, -s, 0, 0, s, c, 0, 0, 0, 0, 1);

    return this;
  }

  rotateY(radians: number) {
    const c = Math.cos(radians);
    const s = Math.sin(radians);

    this.set(c, 0, s, 0, 0, 1, 0, 0, -s, 0, c, 0, 0, 0, 0, 1);

    return this;
  }

  rotateZ(radians: number) {
    const c = Math.cos(radians);
    const s = Math.sin(radians);

    this.set(c, -s, 0, 0, s, c, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);

    return this;
  }
}
