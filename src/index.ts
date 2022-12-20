import { Point } from "./math/Point";
import { Vector } from "./math/Vector";
import { Color } from "./math/Color";
import { Matrix2, Matrix3, Matrix4 } from "./math/matrices/Matrix";
import { Renderer } from "./render/Renderer";
import { Ray } from "./math/Ray";
import { Sphere } from "./geometry/Sphere";
import { Intersections } from "./math/Intersections";
import { Scene } from "./render/Scene";

/** Math Utils testing */
const vectorA = new Vector(1, 8, 3);
const vectorB = new Vector(1, 2, 3);

const pointA = new Point(1, 8, 3);
const pointB = new Point(1, 2, 3);

const colorA = new Color(1, 8, 3);
const colorB = new Color(1, 2, 3);

const matrixA = new Matrix4(1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5, 4, 3, 2);

const rayA = new Ray(new Point(1, 2, 3), new Vector(4, 5, 6));

const scaleMatrix = new Matrix4().scale(5, 5, 5);

const rotateXMatrix = new Matrix4().rotateX(Math.PI / 2);

const result = rayA.position(2);

// console.log({ rayA, result });

/** Geometry testing */
const intersections = new Intersections();

const sphere1 = new Sphere(new Point(0, 0, 0), 1.0);
const ray1 = new Ray(new Point(0, 0, -5), new Vector(0, 0, 1));
const ray2 = new Ray(new Point(0, 0, 3), new Vector(0, 0, 1));

// Add material to sphere
sphere1.material.color = new Color(255, 100, 1);
sphere1.material.ambient = 0.05;

// const intersect1 = sphere1.intersect(ray1);
// const intersect2 = sphere1.intersect(ray2);

// intersections.add(intersect1);
// intersections.add(intersect2);
// const hit = intersections.hit();

// Test the normalization of a vector
// const normal = sphere1.normalAt(new Point(0, 1, 0));

// The the normal at a translated sphere
const sphere2 = new Sphere(new Point(0, 0, 0), 0.5);
sphere2.material.color = new Color(200, 100, 1);
//sphere2.transform = sphere2.transform.translate(0, 1, 0);
//const normal2 = sphere2.normalAt(new Point(0, 1.70711, -0.70711));
//console.log(normal2);

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
renderer.setSize(400, 400);
const scene = new Scene();
scene.add(sphere1);
scene.add(sphere2);

const sceneIntersections = intersections.getIntersections(
  scene,
  new Ray(new Point(0, 0, -5), new Vector(0, 0, 1))
);
console.log({ sceneIntersections });

renderer.render(scene);
