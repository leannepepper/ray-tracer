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

const matrixA = new Matrix3(9, 7, 6, 5, 4, 3, 2, 1, 8);

const minor = matrixA.minor(0, 0);

console.log({ matrixA, minor });
const renderer = new WebGLRenderer();
renderer.makeGreen();
