import { Shape } from './Shape';
import { Point } from './Point';

export class Rectangle implements Shape {
  public readonly id: string;
  public readonly name: string;
  public readonly points: Point[];

  constructor(id: string, name: string, points: Point[]) {
    this.id = id;
    this.name = name;
    this.points = points;
  }
}
