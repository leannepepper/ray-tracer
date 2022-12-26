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
