import { Point } from "../src/math/Point";

test("Point", () => {
  expect(new Point(1, 2, 3)).toEqual(
    expect.objectContaining({
      x: 1,
      y: 2,
      z: 3,
      w: 1,
    })
  );
});
