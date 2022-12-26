import { Camera } from "../src/camera/Camera";

test("Camera", () => {
  expect(new Camera()).toEqual(
    expect.objectContaining({
      hsize: 50,
      vsize: 50,
      fov: 90,
      transform: expect.objectContaining({
        elements: [
          [1, 0, 0, 0],
          [0, 1, 0, 0],
          [0, 0, 1, 0],
          [0, 0, 0, 1],
        ],
      }),
    })
  );
});

test("Camera pixel size", () => {
  const c = new Camera(200, 125, Math.PI / 2);
  expect(c.pixelSize).toEqual(0.009999999999999998);
});

test("Camera ray for pixel", () => {
  const c = new Camera(201, 101, Math.PI / 2);
  const r = c.rayForPixel(100, 50);
  expect(r.origin).toEqual(expect.objectContaining({ x: 0, y: 0, z: 0 }));
  expect(r.direction).toEqual(
    expect.objectContaining({ x: 1.1102230246251565e-16, y: 0, z: -1 })
  );
});
