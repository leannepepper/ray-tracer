import { Color } from "../math/Color";
import { Vector } from "../math/Vector";

export class PhongMaterial {
  constructor(
    public color?: Color,
    public ambient?: number,
    public diffuse?: number,
    public specular?: number,
    public shininess?: number
  ) {
    this.color = color || new Color(1, 1, 1);
    this.ambient = ambient || 0.1;
    this.diffuse = diffuse || 0.9;
    this.specular = specular || 0.9;
    this.shininess = shininess || 200.0;
  }

  reflect(inVec: Vector, normal: Vector) {
    return inVec.subtract(normal.multiply(2 * inVec.dot(normal)));
  }
}
