import { Shape } from "./Shape";
import { Point } from "./Point";
import { Subject } from "../observer/Subject";

export class Rectangle extends Subject implements Shape {
  public id: string;
  public name: string;
  public points: Point[];

  constructor(id: string, name: string, points: Point[]) {
    super();
    this.id = id;
    this.name = name;
    this.points = points;
  }

  public updatePoints(newPoints: Point[]): void {
    this.points = newPoints;
    this.notify();
  }
}
