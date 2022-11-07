import { Sphere } from "../src/geometry/Sphere";
import { Point } from "../src/math/Point";
import { Ray } from "../src/math/Ray";
import { Vector } from "../src/math/Vector";

test("Sphere", () => {
  const center = new Point(0, 0, 0);
  const radius = 1;
  const s = new Sphere(center, radius);
  expect.objectContaining({
    center: expect.objectContaining({
      x: 0,
      y: 0,
      z: 0,
      w: 1,
    }),
    radius: 1,
  });
});

test("Sphere intersect", () => {
  const center = new Point(0, 0, 0);
  const radius = 1;
  const s = new Sphere(center, radius);
  const r = new Ray(new Point(0, 0, -5), new Vector(0, 0, 1));
  expect(s.intersect(r)).toEqual([
    expect.objectContaining({ t: 4 }),
    expect.objectContaining({ t: 6 }),
  ]);
});
