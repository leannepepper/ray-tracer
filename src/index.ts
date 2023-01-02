import { Point } from "./math/Point";
import { Vector } from "./math/Vector";
import { Color } from "./math/Color";
import { Matrix2, Matrix3, Matrix4 } from "./math/matrices/Matrix";
import { Renderer } from "./render/Renderer";
import { Ray } from "./math/Ray";
import { Sphere } from "./geometry/Sphere";
import { Intersections } from "./math/Intersections";
import { Scene } from "./render/Scene";
import { PointLight } from "./lights/PointLight";
import { Camera } from "./camera/Camera";

// Test the normal at a transformed sphere
const sphere3 = new Sphere(new Point(0, 0, 0), 1.0);
const rotateZMatrix = new Matrix4().rotateZ(Math.PI / 5);
const scaleMatrix2 = new Matrix4().scale(1, 0.5, 1);
const transformMatrix = scaleMatrix2.multiply(rotateZMatrix) as Matrix4;
sphere3.transform = transformMatrix;
// const normal3 = sphere3.normalAt(
//   new Point(0, Math.sqrt(2) / 2, -Math.sqrt(2) / 2)
// );

/** Render testing */
const renderer = new Renderer();
renderer.setSize(100, 100);

const scene = new Scene();
const camera = new Camera(100, 100, 90);
const pointLight = new PointLight(new Vector(2, -5, 5), 0.89);

// Objects
// Add material to sphere
const sphere1 = new Sphere(new Point(0, 0, 1), 1.0);
sphere1.material.color = new Color(255, 100, 1);
sphere1.material.ambient = 0.05;

const sphere2 = new Sphere(new Point(1, 0, -1), 0.5);
sphere2.material.color = new Color(255, 255, 1);
sphere2.material.ambient = 0.05;

scene.add(sphere1);
//scene.add(sphere2);
scene.add(pointLight);

camera.setTransform(
  new Point(0, 0, 1),
  new Point(0, 0, 0),
  new Vector(0, 1, 0)
);

//test the Intersections
const ray = new Ray(new Point(0, 0, 0), new Vector(0, 0, 1));
const intersections = new Intersections();
//const test = intersections.getIntersections(scene, ray);
//const hitData = intersections.prepareComputations(test.intersections[0], ray);

//console.log({ test, hitData });

renderer.render(scene, camera);
