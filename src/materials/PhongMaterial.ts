import { Color } from "../math/Color";
import { Vector } from "../math/Vector";

export class PhongMaterial {
  color = new Color(0.5, 1, 1);

  constructor() {
    this.color = new Color(0.5, 1, 1);
  }

  reflect(inVec: Vector, normal: Vector) {
    return inVec.subtract(normal.multiply(2 * inVec.dot(normal)));
  }
}
