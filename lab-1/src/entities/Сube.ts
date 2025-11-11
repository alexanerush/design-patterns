import { Shape } from './Shape';
import { Point } from './Point';

export class Cube implements Shape {
  public readonly id: string;
  public readonly name: string;
  public readonly origin: Point;
  public readonly edge: number;

  constructor(id: string, name: string, origin: Point, edge: number) {
    this.id = id;
    this.name = name;
    this.origin = origin;
    this.edge = edge;
  }
}
