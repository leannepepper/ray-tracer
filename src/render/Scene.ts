import { Geometry } from "../geometry/Geometry";

export class Scene {
  objects: Geometry[];

  constructor(objects?: Geometry[]) {
    this.objects = objects || [];
  }

  add(object: Geometry) {
    this.objects.push(object);
  }

  getObjects() {
    return this.objects;
  }

  clear() {
    this.objects = [];
  }
}
