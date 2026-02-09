import { Product } from "../products/Product";
import { SortStrategy } from "./SortStrategy";

export class SortByName implements SortStrategy {
  sort(items: Product[]): Product[] {
    return [...items].sort((a, b) => a.name.localeCompare(b.name));
  }
}
