import { Vector } from "../math/Vector";
import { Color } from "../math/Color";

export class PointLight {
  constructor(public position: Vector, public intensity: Color) {
    this.position = position;
    this.intensity = intensity;
  }
}
