import { Vector } from "../math/Vector";

export class PointLight {
  constructor(public position: Vector, public intensity: number) {
    this.position = position;
    this.intensity = intensity;
  }
}
