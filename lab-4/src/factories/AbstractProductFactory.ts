import { Product } from "../products/Product";

export interface AbstractProductFactory {
  createProduct(
    name: string,
    price: number,
    rating: number
  ): Product;
}
