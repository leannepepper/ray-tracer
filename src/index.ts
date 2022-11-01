import { Point } from "./math/Point";
import { Vector } from "./math/Vector";
import { Color } from "./math/Color";
import { Matrix2, Matrix3, Matrix4 } from "./math/matrices/Matrix";
import { WebGLRenderer } from "./renderer/WebGLRenderer";

const vectorA = new Vector(1, 8, 3);
const vectorB = new Vector(1, 2, 3);

const pointA = new Point(1, 8, 3);
const pointB = new Point(1, 2, 3);

const colorA = new Color(1, 8, 3);
const colorB = new Color(1, 2, 3);

const matrixA = new Matrix4(1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5, 4, 3, 2);

const scaleMatrix = new Matrix4().scale(5, 5, 5);

const rotateXMatrix = new Matrix4().rotateX(Math.PI / 2);

const result = new Matrix4().rotateY(Math.PI / 2);

console.log({ result });
const renderer = new WebGLRenderer();
renderer.makeGreen();
