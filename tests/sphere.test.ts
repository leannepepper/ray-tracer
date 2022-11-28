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

test("Sphere normalAt", () => {
  const center = new Point(0, 0, 0);
  const radius = 1;
  const s = new Sphere(center, radius);
  const p = new Point(0, 1, 0);
  expect(s.normalAt(p)).toEqual(expect.objectContaining({ x: 0, y: 1, z: 0 }));
});

test("Sphere normalAtNonAxialPoint", () => {
  const center = new Point(0, 0, 0);
  const radius = 1;
  const s = new Sphere(center, radius);
  const p = new Point(Math.sqrt(3) / 3, Math.sqrt(3) / 3, Math.sqrt(3) / 3);
  expect(s.normalAt(p)).toEqual(
    expect.objectContaining({
      x: Math.sqrt(3) / 3,
      y: Math.sqrt(3) / 3,
      z: Math.sqrt(3) / 3,
    })
  );
});

test("Sphere normalAtTranslatedSphere", () => {
  const center = new Point(0, 0, 0);
  const radius = 1;
  const s = new Sphere(center, radius);
  s.transform = s.transform.translate(0, 1, 0);
  const p = new Point(0, 1.70711, -0.70711);
  expect(s.normalAt(p)).toEqual(
    expect.objectContaining({
      x: 0,
      y: 0.7071099999999999,
      z: -0.70711,
    })
  );
});
