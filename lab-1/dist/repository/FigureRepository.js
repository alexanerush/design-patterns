"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FigureRepository = void 0;
class FigureRepository {
    constructor() {
        this.figures = [];
    }
    add(figure) {
        this.figures.push(figure);
    }
    removeById(id) {
        this.figures = this.figures.filter((figure) => figure.id !== id);
    }
    getById(id) {
        return this.figures.find((figure) => figure.id === id);
    }
    getAll() {
        return this.figures;
    }
}
exports.FigureRepository = FigureRepository;
