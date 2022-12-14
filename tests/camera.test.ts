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

test("constructing a ray through a corner of the canvas", () => {
  const c = new Camera(201, 101, Math.PI / 2);
  const r = c.rayForPixel(0, 0);
  expect(r.origin).toEqual(expect.objectContaining({ x: 0, y: 0, z: 0 }));
  expect(r.direction).toEqual(
    expect.objectContaining({
      x: 0.6651864261194508,
      y: 0.3325932130597254,
      z: -0.6685123582500481,
    })
  );
});

//TODO: Fix this test
// test("Transformed camera ray for pixel", () => {
//   const c = new Camera(201, 101, Math.PI / 2);
//   c.setTransform(c.transform.rotateY(Math.PI / 4).translate(0, -2, 5));
//   const r = c.rayForPixel(100, 50);
//     expect(r.direction).toEqual(
//       expect.objectContaining({
//         x: Math.sqrt(2) / 2,
//         y: 0,
//         z: -Math.sqrt(2) / 2,
//       })
//     );
//   expect(r.origin).toEqual(expect.objectContaining({ x: 0, y: 2, z: -5 }));
// });
