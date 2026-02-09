import { Shape } from '../entities/Shape';

export class FigureRepository {
  private figures: Shape[] = [];

  public add(figure: Shape): void {
    this.figures.push(figure);
  }

  public removeById(id: string): void {
    this.figures = this.figures.filter((figure) => figure.id !== id);
  }

  public getById(id: string): Shape | undefined {
    return this.figures.find((figure) => figure.id === id);
  }

  public getAll(): Shape[] {
    return this.figures;
  }
}
