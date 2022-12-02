import { PhongMaterial } from "../src/materials/PhongMaterial";
import { Vector } from "../src/math/Vector";

test("Reflecting a vector approaching at 45 degrees", () => {
  const v = new Vector(1, -1, 0);
  const n = new Vector(0, 1, 0);
  const material = new PhongMaterial();
  expect(material.reflect(v, n)).toEqual(
    expect.objectContaining({
      x: 1,
      y: 1,
      z: 0,
    })
  );
});

test("Reflecting a vector off a slanted surface", () => {
  const v = new Vector(0, -1, 0);
  const n = new Vector(Math.sqrt(2) / 2, Math.sqrt(2) / 2, 0);
  const material = new PhongMaterial();
  expect(material.reflect(v, n)).toEqual(
    expect.objectContaining({
      x: 1.0000000000000002,
      y: 2.220446049250313e-16,
      z: 0,
    })
  );
});
