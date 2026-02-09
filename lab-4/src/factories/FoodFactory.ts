import { AbstractProductFactory } from "./AbstractProductFactory";
import { Product } from "../products/Product";

export class FoodFactory implements AbstractProductFactory {
  createProduct(name: string, price: number, rating: number): Product {
    return {
      id: `food-${Date.now()}-${Math.random()}`,
      category: "food",
      name,
      price,
      rating,
    };
  }
}
