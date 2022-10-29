import { Matrix2, Matrix3, Matrix4 } from "../src/math/matrices/Matrix";

test("Matrix2", () => {
  expect(new Matrix2()).toEqual(
    expect.objectContaining({
      elements: [
        [1, 0],
        [0, 1],
      ],
    })
  );
});

test("Matrix3", () => {
  expect(new Matrix3()).toEqual(
    expect.objectContaining({
      elements: [
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1],
      ],
    })
  );
});

test("Matrix4", () => {
  expect(new Matrix4()).toEqual(
    expect.objectContaining({
      elements: [
        [1, 0, 0, 0],
        [0, 1, 0, 0],
        [0, 0, 1, 0],
        [0, 0, 0, 1],
      ],
    })
  );
});

test("Multiply Matrix4", () => {
  expect(
    new Matrix4(1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5, 4, 3, 2).multiply(
      new Matrix4(-2, 1, 2, 3, 3, 2, 1, -1, 4, 3, 6, 5, 1, 2, 7, 8)
    )
  ).toEqual(
    expect.objectContaining({
      elements: [
        [20, 22, 50, 48],
        [44, 54, 114, 108],
        [40, 58, 110, 102],
        [16, 26, 46, 42],
      ],
    })
  );
});

test("Multiply Matrix4 by it's idenity matrix", () => {
  expect(
    new Matrix4(1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5, 4, 3, 2).multiply(
      new Matrix4().identity()
    )
  ).toEqual(
    expect.objectContaining({
      elements: [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 8, 7, 6],
        [5, 4, 3, 2],
      ],
    })
  );
});

test("Transpose Matrix4", () => {
  expect(
    new Matrix4(0, 9, 3, 0, 9, 8, 0, 8, 1, 8, 5, 3, 0, 0, 5, 8).transpose()
  ).toEqual(
    expect.objectContaining({
      elements: [
        [0, 9, 1, 0],
        [9, 8, 8, 0],
        [3, 0, 5, 5],
        [0, 8, 3, 8],
      ],
    })
  );
});

test("Submatrix Matrix", () => {
  expect(
    new Matrix4(1, 5, 0, 3, -3, 2, 7, 4, 3, -9, 8, 2, -9, 4, 4, 1).submatrix(
      0,
      2
    )
  ).toEqual(
    expect.objectContaining({
      elements: [
        [-3, 2, 4],
        [3, -9, 2],
        [-9, 4, 1],
      ],
    })
  );
});

test("Minor Matrix3", () => {
  expect(new Matrix3(3, 5, 0, 2, -1, -7, 6, -1, 5).minor(1, 0)).toEqual(25);
});

test("Cofactor Matrix3", () => {
  expect(new Matrix3(3, 5, 0, 2, -1, -7, 6, -1, 5).cofactor(0, 0)).toEqual(-12);
  expect(new Matrix3(3, 5, 0, 2, -1, -7, 6, -1, 5).cofactor(1, 0)).toEqual(-25);
});
