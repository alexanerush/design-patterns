import { Cube } from '../entities/Сube';

export class CubeService {
  public isValid(cube: Cube): boolean {
    return cube.edge > 0;
  }

  public getSurfaceArea(cube: Cube): number {
    if (!this.isValid(cube)) {
      throw new Error('Cube is not valid');
    }
    return 6 * Math.pow(cube.edge, 2);
  }

  public getVolume(cube: Cube): number {
    if (!this.isValid(cube)) {
      throw new Error('Cube is not valid');
    }
    return Math.pow(cube.edge, 3);
  }

  public isBaseOnCoordinatePlane(cube: Cube): boolean {
    if (!this.isValid(cube)) {
      throw new Error('Cube is not valid');
    }

    const { x, y, z } = cube.origin;

    return x === 0 || y === 0 || z === 0;
  }
}
