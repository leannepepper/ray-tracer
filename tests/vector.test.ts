import { Vector } from "../src/math/Vector";

test("Vector", () => {
  expect(new Vector(1, 2, 3)).toEqual(
    expect.objectContaining({
      x: 1,
      y: 2,
      z: 3,
      w: 0,
    })
  );
});

test("Vector cross product", () => {
  expect(new Vector(1, 2, 3).cross(new Vector(2, 3, 4))).toEqual(
    expect.objectContaining({
      x: -1,
      y: 2,
      z: -1,
    })
  );
});

test("Vector dot product", () => {
  expect(new Vector(1, 2, 3).dot(new Vector(1, 2, 3))).toEqual(14);
});

test(" Vector magnitude", () => {
  expect(new Vector(1, 2, 3).magnitude()).toEqual(3.7416573867739413);
});

test("Vector normalize", () => {
  expect(new Vector(1, 2, 3).normalize()).toEqual(
    expect.objectContaining({
      x: 0.2672612419124244,
      y: 0.5345224838248488,
      z: 0.8017837257372732,
      w: 0,
    })
  );
});

test("Magnitude of a normalized Vector", () => {
  expect(new Vector(1, 2, 3).normalize().magnitude()).toEqual(1);
});
