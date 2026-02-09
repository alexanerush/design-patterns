"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Warehouse = void 0;
const Rectangle_1 = require("../entities/Rectangle");
const Cube_1 = require("../entities/Cube");
const RectangleService_1 = require("../services/RectangleService");
const CubeService_1 = require("../services/CubeService");
class Warehouse {
    constructor() {
        this.data = new Map();
        this.rectService = new RectangleService_1.RectangleService();
        this.cubeService = new CubeService_1.CubeService();
    }
    static getInstance() {
        if (!Warehouse.instance) {
            Warehouse.instance = new Warehouse();
        }
        return Warehouse.instance;
    }
    update(figure) {
        if (figure instanceof Rectangle_1.Rectangle) {
            this.data.set(figure.id, {
                area: this.rectService.getArea(figure),
                perimeter: this.rectService.getPerimeter(figure),
            });
        }
        else if (figure instanceof Cube_1.Cube) {
            this.data.set(figure.id, {
                volume: this.cubeService.getVolume(figure),
                surfaceArea: this.cubeService.getSurfaceArea(figure),
            });
        }
    }
    get(id) {
        return this.data.get(id);
    }
    getAll() {
        return Array.from(this.data.values());
    }
}
exports.Warehouse = Warehouse;
