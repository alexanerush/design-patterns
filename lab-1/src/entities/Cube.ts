import { Shape } from "./Shape";
import { Point } from "./Point";
import { Subject } from "../observer/Subject";

export class Cube extends Subject implements Shape {
  public id: string;
  public name: string;
  public origin: Point;
  public edge: number;

  constructor(id: string, name: string, origin: Point, edge: number) {
    super();
    this.id = id;
    this.name = name;
    this.origin = origin;
    this.edge = edge;
  }

  public updateEdge(newEdge: number): void {
    this.edge = newEdge;
    this.notify();
  }
}
