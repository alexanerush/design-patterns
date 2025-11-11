import { Rectangle } from '../entities/Rectangle';

export class RectangleService {
  public isValid(rect: Rectangle): boolean {
    return rect.points.length === 4;
  }

  public getPerimeter(rect: Rectangle): number {
    if (!this.isValid(rect)) {
      throw new Error('Rectangle is not valid');
    }

    const { width, height } = this.getDimensions(rect);
    return 2 * (width + height);
  }

  public getArea(rect: Rectangle): number {
    if (!this.isValid(rect)) {
      throw new Error('Rectangle is not valid');
    }

    const { width, height } = this.getDimensions(rect);
    return width * height;
  }

  private getDimensions(rect: Rectangle): { width: number; height: number } {
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
