import { Ray } from "../src/math/Ray";
import { Point } from "../src/math/Point";
import { Vector } from "../src/math/Vector";

test("Ray", () => {
  const origin = new Point(2, 3, 4);
  const direction = new Vector(1, 0, 0);
  const r = new Ray(origin, direction);
  expect(r.origin).toEqual(origin);
  expect(r.direction).toEqual(direction);
});

test("Ray position", () => {
  const origin = new Point(2, 3, 4);
  const direction = new Vector(1, 0, 0);
  const r = new Ray(origin, direction);
  expect(r.position(0)).toEqual(expect.objectContaining({ x: 2, y: 3, z: 4 }));
  expect(r.position(1)).toEqual(expect.objectContaining({ x: 3, y: 3, z: 4 }));
});
