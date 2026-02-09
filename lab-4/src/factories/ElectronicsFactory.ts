import { AbstractProductFactory } from "./AbstractProductFactory";
import { Product } from "../products/Product";

export class ElectronicsFactory implements AbstractProductFactory {
  createProduct(name: string, price: number, rating: number): Product {
    return {
      id: `el-${Date.now()}-${Math.random()}`,
      category: "electronics",
      name,
      price,
      rating,
    };
  }
}
