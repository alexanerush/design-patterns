import { Point } from "./entities/Point";
import { Rectangle } from "./entities/Rectangle";
import { Cube } from "./entities/Cube"; 
import { FigureRepository } from "./repository/FigureRepository";
import { Warehouse } from "./warehouse/Warehouse";

const repo = new FigureRepository();
const warehouse = Warehouse.getInstance();

const rect = new Rectangle("r1", "Rectangle 1", [
  new Point(0, 0),
  new Point(4, 0),
  new Point(4, 3),
  new Point(0, 3),
]);

const cube = new Cube("c1", "Cube 1", new Point(0, 0, 0), 5);

rect.attach(warehouse);
cube.attach(warehouse);

repo.add(rect);
repo.add(cube);

rect.updatePoints([
  new Point(0, 0),
  new Point(4, 0),
  new Point(4, 3),
  new Point(0, 3),
]);

cube.updateEdge(5);

console.log("WAREHOUSE AFTER INIT:", warehouse.getAll());

cube.updateEdge(10);

console.log("WAREHOUSE AFTER CUBE UPDATE:", warehouse.getAll());
