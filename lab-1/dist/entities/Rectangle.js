"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
const Subject_1 = require("../observer/Subject");
class Rectangle extends Subject_1.Subject {
    constructor(id, name, points) {
        super();
        this.id = id;
        this.name = name;
        this.points = points;
    }
    updatePoints(newPoints) {
        this.points = newPoints;
        this.notify();
    }
}
exports.Rectangle = Rectangle;
