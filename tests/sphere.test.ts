import { Sphere } from "../src/geometry/Sphere";
import { Matrix4 } from "../src/math/matrices/Matrix";
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
      y: 0.7071067811865475,
      z: -0.7071067811865476,
    })
  );
});

test("Sphere normalAtTransformedSphere", () => {
  const center = new Point(0, 0, 0);
  const radius = 1;
  const s = new Sphere(center, radius);
  const rotateZMatrix = new Matrix4().rotateZ(Math.PI / 5);
  const scaleMatrix = new Matrix4().scale(1, 0.5, 1);
  const transformMatrix = scaleMatrix.multiply(rotateZMatrix) as Matrix4;
  s.transform = transformMatrix;
  const p = new Point(0, Math.sqrt(2) / 2, -Math.sqrt(2) / 2);
  expect(s.normalAt(p)).toEqual(
    expect.objectContaining({
      x: 0,
      y: 0.9701425001453319,
      z: -0.24253562503633294,
    })
  );
});

test("Sphere has a default material", () => {
  const center = new Point(0, 0, 0);
  const radius = 1;
  const s = new Sphere(center, radius);
  expect(s.material).toEqual(
    expect.objectContaining({
      color: expect.objectContaining({ r: 1, g: 1, b: 1 }),
      ambient: 0.1,
      diffuse: 0.9,
      specular: 0.9,
      shininess: 200,
    })
  );
});

test("Sphere may be assigned a material", () => {
  const center = new Point(0, 0, 0);
  const radius = 1;
  const s = new Sphere(center, radius);
  s.material.ambient = 1;
  s.material.diffuse = 0;
  expect(s.material).toEqual(
    expect.objectContaining({
      color: expect.objectContaining({ r: 1, g: 1, b: 1 }),
      ambient: 1,
      diffuse: 0,
      specular: 0.9,
      shininess: 200,
    })
  );
});
