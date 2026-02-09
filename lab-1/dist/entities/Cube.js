"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cube = void 0;
const Subject_1 = require("../observer/Subject");
class Cube extends Subject_1.Subject {
    constructor(id, name, origin, edge) {
        super();
        this.id = id;
        this.name = name;
        this.origin = origin;
        this.edge = edge;
    }
    updateEdge(newEdge) {
        this.edge = newEdge;
        this.notify();
    }
}
exports.Cube = Cube;
