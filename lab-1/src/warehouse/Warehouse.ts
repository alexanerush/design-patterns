import { Observer } from "../observer/Observer";
import { Shape } from "../entities/Shape";
import { Rectangle } from "../entities/Rectangle";
import { Cube } from "../entities/Cube";
import { RectangleService } from "../services/RectangleService";
import { CubeService } from "../services/CubeService";

export type Metrics = {
  area?: number;
  perimeter?: number;
  volume?: number;
  surfaceArea?: number;
};

export class Warehouse implements Observer {
  private static instance: Warehouse;
  private data: Map<string, Metrics> = new Map();

  private rectService = new RectangleService();
  private cubeService = new CubeService();

  private constructor() {}

  public static getInstance(): Warehouse {
    if (!Warehouse.instance) {
      Warehouse.instance = new Warehouse();
    }
    return Warehouse.instance;
  }

  public update(figure: Shape): void {
    if (figure instanceof Rectangle) {
      this.data.set(figure.id, {
        area: this.rectService.getArea(figure),
        perimeter: this.rectService.getPerimeter(figure),
      });
    } else if (figure instanceof Cube) {
      this.data.set(figure.id, {
        volume: this.cubeService.getVolume(figure),
        surfaceArea: this.cubeService.getSurfaceArea(figure),
      });
    }
  }

  public get(id: string): Metrics | undefined {
    return this.data.get(id);
  }

  public getAll(): Metrics[] {
    return Array.from(this.data.values());
  }
}
