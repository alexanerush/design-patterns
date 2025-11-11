import { Point } from './entities/Point';
import { Rectangle } from './entities/Rectangle';
import { RectangleService } from './services/RectangleService';
import { Cube } from './entities/Сube';
import { CubeService } from './services/CubeService';

console.log('=== RECTANGLE ===');
const rect = new Rectangle('1', 'Rect1', [
  new Point(0, 0),
  new Point(6, 0),
  new Point(6, 4),
  new Point(0, 4),
]);

const rectService = new RectangleService();
console.log('Perimeter:', rectService.getPerimeter(rect)); //20
console.log('Area:', rectService.getArea(rect)); //24
console.log('\n=== CUBE ===');
const cube = new Cube('2', 'Cube1', new Point(0, 0, 0), 4);
const cubeService = new CubeService();

console.log('Surface area:', cubeService.getSurfaceArea(cube)); //96
console.log('Volume:', cubeService.getVolume(cube)); //64
console.log('Is base on coordinate plane:', cubeService.isBaseOnCoordinatePlane(cube)); // true
