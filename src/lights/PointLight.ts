import { Color } from "../math/Color";
import { Vector } from "../math/Vector";

export class PointLight {
  constructor(public position: Vector, public intensity: Color) {
    this.position = position;
    this.intensity = intensity;
  }
}
