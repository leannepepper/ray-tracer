import { Tuple } from "../src/utilities/Tuple";

test("Tuple", () => {
  expect(new Tuple(1, 2, 3, 0)).toEqual(
    expect.objectContaining({
      x: 1,
      y: 2,
      z: 3,
    })
  );
});

test("Tuple add", () => {
  expect(new Tuple(1, 2, 3, 0).add(new Tuple(1, 2, 3, 0))).toEqual(
    expect.objectContaining({
      x: 2,
      y: 4,
      z: 6,
    })
  );
});

test("Tuple subtract", () => {
  expect(new Tuple(1, 2, 3, 0).subtract(new Tuple(1, 2, 3, 0))).toEqual(
    expect.objectContaining({
      x: 0,
      y: 0,
      z: 0,
    })
  );
});

test("Tuple negate", () => {
  expect(new Tuple(1, 2, 3, 0).negate()).toEqual(
    expect.objectContaining({
      x: -1,
      y: -2,
      z: -3,
    })
  );
});

test("Tuple multiply", () => {
  expect(new Tuple(1, 2, 3, 0).multiply(2)).toEqual(
    expect.objectContaining({
      x: 2,
      y: 4,
      z: 6,
    })
  );
});

test("Tuple divide", () => {
  expect(new Tuple(1, 2, 3, 0).divide(2)).toEqual(
    expect.objectContaining({
      x: 0.5,
      y: 1,
      z: 1.5,
    })
  );
});
