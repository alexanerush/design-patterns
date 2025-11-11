"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CubeService = void 0;
class CubeService {
    isValid(cube) {
        return cube.edge > 0;
    }
    getSurfaceArea(cube) {
        if (!this.isValid(cube)) {
            throw new Error('Cube is not valid');
        }
        return 6 * Math.pow(cube.edge, 2);
    }
    getVolume(cube) {
        if (!this.isValid(cube)) {
            throw new Error('Cube is not valid');
        }
        return Math.pow(cube.edge, 3);
    }
    isBaseOnCoordinatePlane(cube) {
        if (!this.isValid(cube)) {
            throw new Error('Cube is not valid');
        }
        const { x, y, z } = cube.origin;
        return x === 0 || y === 0 || z === 0;
    }
}
exports.CubeService = CubeService;
