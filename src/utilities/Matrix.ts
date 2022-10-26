export class Matrix2 {
  elements: number[][];

  constructor() {
    this.elements = [
      [1, 0],
      [0, 1],
    ];
  }

  set(n11: number, n12: number, n21: number, n22: number) {
    this.elements[0][0] = n11;
    this.elements[0][1] = n12;
    this.elements[1][0] = n21;
    this.elements[1][1] = n22;

    return this;
  }
}

export class Matrix3 {
  elements: number[][];

  constructor() {
    this.elements = [
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1],
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
}

export class Matrix4 {
  elements: number[][];

  constructor() {
    this.elements = [
      [1, 0, 0, 0],
      [0, 1, 0, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 1],
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
}
