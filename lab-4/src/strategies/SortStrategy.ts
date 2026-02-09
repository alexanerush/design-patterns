import { Product } from "../products/Product";

export interface SortStrategy {
  sort(items: Product[]): Product[];
}
