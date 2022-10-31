import { Matrix2, Matrix3, Matrix4 } from "../src/math/matrices/Matrix";
import { Point } from "../src/math/Point";
import { Vector } from "../src/math/Vector";

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

test("Determinant Matrix3", () => {
  expect(new Matrix3(1, 2, 6, -5, 8, -4, 2, 6, 4).determinant()).toEqual(-196);
});

test("Determinant Matrix4", () => {
  expect(
    new Matrix4(
      -2,
      -8,
      3,
      5,
      -3,
      1,
      7,
      3,
      1,
      2,
      -9,
      6,
      -6,
      7,
      7,
      -9
    ).determinant()
  ).toEqual(-4071);
});

test("Invert Matrix4", () => {
  expect(
    new Matrix4(-5, 2, 6, -8, 1, -5, 1, 8, 7, 7, -6, -7, 1, -3, 7, 4).invert()
  ).toEqual(
    expect.objectContaining({
      elements: [
        [
          0.21804511278195488, 0.45112781954887216, 0.24060150375939848,
          -0.045112781954887216,
        ],
        [
          -0.8082706766917294, -1.4567669172932332, -0.44360902255639095,
          0.5206766917293233,
        ],
        [
          -0.07894736842105263, -0.2236842105263158, -0.05263157894736842,
          0.19736842105263158,
        ],
        [
          -0.5225563909774437, -0.8139097744360902, -0.3007518796992481,
          0.30639097744360905,
        ],
      ],
    })
  );
});

test("invert Matrix3", () => {
  expect(new Matrix3(3, 0, 2, 2, 0, -2, 0, 1, 1).invert()).toEqual(
    expect.objectContaining({
      elements: [
        [0.2, 0.2, -0],
        [-0.2, 0.3, 1],
        [0.2, -0.3, 0],
      ],
    })
  );
});

test("translate Matrix4", () => {
  expect(new Matrix4().translate(5, -3, 2)).toEqual(
    expect.objectContaining({
      elements: [
        [1, 0, 0, 5],
        [0, 1, 0, -3],
        [0, 0, 1, 2],
        [0, 0, 0, 1],
      ],
    })
  );
});

test("translate Matrix3", () => {
  expect(new Matrix3().translate(5, -3)).toEqual(
    expect.objectContaining({
      elements: [
        [1, 0, 5],
        [0, 1, -3],
        [0, 0, 1],
      ],
    })
  );
});

test("translate a Point", () => {
  expect(
    new Matrix4().translate(5, -3, 2).multiply(new Point(-3, 4, 5))
  ).toEqual(
    expect.objectContaining({
      x: 2,
      y: 1,
      z: 7,
      w: 1,
    })
  );
});

test("Multiply by the invert translation of a Point", () => {
  expect(
    new Matrix4().translate(5, -3, 2).invert().multiply(new Point(-3, 4, 5))
  ).toEqual(
    expect.objectContaining({
      x: -8,
      y: 7,
      z: 3,
      w: 1,
    })
  );
});

test("translate * Vector has no effect", () => {
  expect(
    new Matrix4().translate(5, -3, 2).multiply(new Vector(1, 0, 0))
  ).toEqual(
    expect.objectContaining({
      x: 1,
      y: 0,
      z: 0,
      w: 0,
    })
  );
});
