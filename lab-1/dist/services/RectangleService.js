"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RectangleService = void 0;
class RectangleService {
    isValid(rect) {
        return rect.points.length === 4;
    }
    getPerimeter(rect) {
        if (!this.isValid(rect)) {
            throw new Error('Rectangle is not valid');
        }
        const { width, height } = this.getDimensions(rect);
        return 2 * (width + height);
    }
    getArea(rect) {
        if (!this.isValid(rect)) {
            throw new Error('Rectangle is not valid');
        }
        const { width, height } = this.getDimensions(rect);
        return width * height;
    }
    getDimensions(rect) {
        const xs = rect.points.map((p) => p.x);
        const ys = rect.points.map((p) => p.y);
        const minX = Math.min(...xs);
        const maxX = Math.max(...xs);
        const minY = Math.min(...ys);
        const maxY = Math.max(...ys);
        const width = maxX - minX;
        const height = maxY - minY;
        if (width <= 0 || height <= 0) {
            throw new Error('Rectangle has non-positive dimensions');
        }
        return { width, height };
    }
}
exports.RectangleService = RectangleService;
