import { Point } from "./math/Point";
import { Vector } from "./math/Vector";
import { Color } from "./math/Color";
import { Matrix2, Matrix3, Matrix4 } from "./math/matrices/Matrix";
import { WebGLRenderer } from "./renderer/WebGLRenderer";
import { Ray } from "./math/Ray";
import { Sphere } from "./geometry/Sphere";

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

const sphere1 = new Sphere(new Point(0, 0, 0), 1);
const ray = new Ray(new Point(0, 0, -5), new Vector(0, 0, 1));

const intersections = sphere1.intersect(ray);

console.log({ sphere1, intersections });

/** Render testing */
const renderer = new WebGLRenderer();
renderer.makeGreen();
