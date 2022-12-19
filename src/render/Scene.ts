import { Geometry } from "../geometry/Geometry";
import { PointLight } from "../lights/PointLight";

export class Scene {
  objects: Geometry[];
  lights: PointLight[];

  constructor(objects?: Geometry[]) {
    this.objects = objects || [];
    this.lights = [];
  }

  add(object: Geometry | PointLight) {
    if (object instanceof Geometry) {
      this.objects.push(object);
    } else {
      this.lights.push(object);
    }
  }

  getObjects() {
    return this.objects;
  }

  getLights() {
    return this.lights;
  }

  clear() {
    this.objects = [];
    this.lights = [];
  }
}
