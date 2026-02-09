import { Product } from "../products/Product";
import { SortStrategy } from "./SortStrategy";

export class SortByRating implements SortStrategy {
  sort(items: Product[]): Product[] {
    // по убыванию рейтинга
    return [...items].sort((a, b) => b.rating - a.rating);
  }
}
