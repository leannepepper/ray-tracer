export class Matrix2 {
  elements: number[][];

  constructor(
    n11: number = 1,
    n12: number = 0,
    n21: number = 0,
    n22: number = 1
  ) {
    this.elements = [
      [n11, n12],
      [n21, n22],
    ];
  }

  set(n11: number, n12: number, n21: number, n22: number) {
    this.elements[0][0] = n11;
    this.elements[0][1] = n12;
    this.elements[1][0] = n21;
    this.elements[1][1] = n22;

    return this;
  }

  transpose() {
    const result = new Matrix2();

    result.elements[0][0] = this.elements[0][0];
    result.elements[0][1] = this.elements[1][0];

    result.elements[1][0] = this.elements[0][1];
    result.elements[1][1] = this.elements[1][1];

    return result;
  }

  determinant() {
    const a = this.elements[0][0];
    const b = this.elements[0][1];

    const c = this.elements[1][0];
    const d = this.elements[1][1];

    return a * d - b * c;
  }

  invert() {
    const result = new Matrix2();
    const determinant = this.determinant();

    if (determinant === 0) {
      throw new Error("Cannot invert a matrix with a determinant of 0");
    }

    result.elements[0][0] = this.elements[1][1] / determinant;
    result.elements[0][1] = -this.elements[0][1] / determinant;
    result.elements[1][0] = -this.elements[1][0] / determinant;
    result.elements[1][1] = this.elements[0][0] / determinant;

    return result;
  }
}
