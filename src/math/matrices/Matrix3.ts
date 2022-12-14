import { Matrix2 } from "./Matrix";

export class Matrix3 {
  elements: number[][];

  constructor(
    n11: number = 1,
    n12: number = 0,
    n13: number = 0,
    n21: number = 0,
    n22: number = 1,
    n23: number = 0,
    n31: number = 0,
    n32: number = 0,
    n33: number = 1
  ) {
    this.elements = [
      [n11, n12, n13],
      [n21, n22, n23],
      [n31, n32, n33],
    ];
  }

  set(
    n11: number,
    n12: number,
    n13: number,
    n21: number,
    n22: number,
    n23: number,
    n31: number,
    n32: number,
    n33: number
  ) {
    this.elements[0][0] = n11;
    this.elements[0][1] = n12;
    this.elements[0][2] = n13;
    this.elements[1][0] = n21;
    this.elements[1][1] = n22;
    this.elements[1][2] = n23;
    this.elements[2][0] = n31;
    this.elements[2][1] = n32;
    this.elements[2][2] = n33;

    return this;
  }

  transpose() {
    const result = new Matrix3();

    result.elements[0][0] = this.elements[0][0];
    result.elements[0][1] = this.elements[1][0];
    result.elements[0][2] = this.elements[2][0];

    result.elements[1][0] = this.elements[0][1];
    result.elements[1][1] = this.elements[1][1];
    result.elements[1][2] = this.elements[2][1];

    result.elements[2][0] = this.elements[0][2];
    result.elements[2][1] = this.elements[1][2];
    result.elements[2][2] = this.elements[2][2];

    return result;
  }

  submatrix(row: number, column: number) {
    const result = new Matrix2();

    let r = 0;
    let c = 0;

    for (let i = 0; i < 3; i++) {
      if (i === row) continue;

      for (let j = 0; j < 3; j++) {
        if (j === column) continue;

        result.elements[r][c] = this.elements[i][j];
        c++;
      }

      c = 0;
      r++;
    }

    return result;
  }

  // The minor is the determinant of the submatrix
  minor(row: number, column: number) {
    const submatrix = this.submatrix(row, column);
    return submatrix.determinant();
  }

  // The cofactor is the minor multiplied by -1 if the sum of the row and column is odd
  cofactor(row: number, column: number) {
    const minor = this.minor(row, column);
    return (row + column) % 2 === 0 ? minor : -minor;
  }

  determinant() {
    let result = 0;

    for (let i = 0; i < 3; i++) {
      result += this.elements[0][i] * this.cofactor(0, i);
    }

    return result;
  }

  invert() {
    const result = new Matrix3();

    const determinant = this.determinant();

    if (determinant === 0) {
      throw new Error("Cannot invert a matrix with a determinant of 0");
    }

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        result.elements[i][j] = this.cofactor(j, i) / determinant;
      }
    }

    return result;
  }

  translate(x: number, y: number) {
    this.set(1, 0, x, 0, 1, y, 0, 0, 1);
    return this;
  }

  scale(x: number, y: number) {
    this.set(x, 0, 0, 0, y, 0, 0, 0, 1);
    return this;
  }
}
