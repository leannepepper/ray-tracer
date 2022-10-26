import { Matrix2, Matrix3, Matrix4 } from "../src/utilities/Matrix";

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
