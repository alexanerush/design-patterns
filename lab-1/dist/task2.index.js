"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Point_1 = require("./entities/Point");
const Rectangle_1 = require("./entities/Rectangle");
const Cube_1 = require("./entities/Cube");
const FigureRepository_1 = require("./repository/FigureRepository");
const Warehouse_1 = require("./warehouse/Warehouse");
const repo = new FigureRepository_1.FigureRepository();
const warehouse = Warehouse_1.Warehouse.getInstance();
const rect = new Rectangle_1.Rectangle("r1", "Rectangle 1", [
    new Point_1.Point(0, 0),
    new Point_1.Point(4, 0),
    new Point_1.Point(4, 3),
    new Point_1.Point(0, 3),
]);
const cube = new Cube_1.Cube("c1", "Cube 1", new Point_1.Point(0, 0, 0), 5);
rect.attach(warehouse);
cube.attach(warehouse);
repo.add(rect);
repo.add(cube);
rect.updatePoints([
    new Point_1.Point(0, 0),
    new Point_1.Point(4, 0),
    new Point_1.Point(4, 3),
    new Point_1.Point(0, 3),
]);
cube.updateEdge(5);
console.log("WAREHOUSE AFTER INIT:", warehouse.getAll());
cube.updateEdge(10);
console.log("WAREHOUSE AFTER CUBE UPDATE:", warehouse.getAll());
