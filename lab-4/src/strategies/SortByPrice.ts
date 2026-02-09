import { Product } from "../products/Product";
import { SortStrategy } from "./SortStrategy";

export class SortByPrice implements SortStrategy {
  sort(items: Product[]): Product[] {
    return [...items].sort((a, b) => a.price - b.price);
  }
}
