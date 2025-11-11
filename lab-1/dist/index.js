"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Point_1 = require("./entities/Point");
const Rectangle_1 = require("./entities/Rectangle");
const RectangleService_1 = require("./services/RectangleService");
const _ube_1 = require("./entities/\u0421ube");
const CubeService_1 = require("./services/CubeService");
console.log('=== RECTANGLE ===');
const rect = new Rectangle_1.Rectangle('1', 'Rect1', [
    new Point_1.Point(0, 0),
    new Point_1.Point(6, 0),
    new Point_1.Point(6, 4),
    new Point_1.Point(0, 4),
]);
const rectService = new RectangleService_1.RectangleService();
console.log('Perimeter:', rectService.getPerimeter(rect));
console.log('Area:', rectService.getArea(rect));
console.log('\n=== CUBE ===');
const cube = new _ube_1.Cube('2', 'Cube1', new Point_1.Point(0, 0, 0), 4);
const cubeService = new CubeService_1.CubeService();
console.log('Surface area:', cubeService.getSurfaceArea(cube));
console.log('Volume:', cubeService.getVolume(cube));
console.log('Is base on coordinate plane:', cubeService.isBaseOnCoordinatePlane(cube)); // true
