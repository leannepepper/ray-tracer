import { Point } from "./utilities/Point";
import { Vector } from "./utilities/Vector";
import { Color } from "./utilities/Color";
import { Matrix2, Matrix3, Matrix4 } from "./utilities/Matrix";
import { WebGLRenderer } from "./renderer/WebGLRenderer";

const vectorA = new Vector(1, 8, 3);
const vectorB = new Vector(1, 2, 3);

const pointA = new Point(1, 8, 3);
const pointB = new Point(1, 2, 3);

const colorA = new Color(1, 8, 3);
const colorB = new Color(1, 2, 3);

const matrixA = new Matrix4(9, 7, 6, 5, 4, 3, 2, 1, 8, 7, 6, 5, 4, 3, 2, 1);
const matrixB = matrixA.transpose();

const submatrixA = matrixA.submatrix(1, 1);

console.log({ matrixA, submatrixA });
const renderer = new WebGLRenderer();
renderer.makeGreen();
