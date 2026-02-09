import { AbstractProductFactory } from "../factories/AbstractProductFactory";
import { Product } from "../products/Product";

export abstract class ProductBuilder {
  protected name: string = "";
  protected price: number = 0;
  protected rating: number = 0;

  constructor(protected factory: AbstractProductFactory) {}

  setName(name: string): this {
    this.name = name;
    return this;
  }

  setPrice(price: number): this {
    this.price = price;
    return this;
  }

  setRating(rating: number): this {
    this.rating = rating;
    return this;
  }

  build(): Product {
    if (!this.name.trim()) throw new Error("Name is required");
    if (this.price <= 0) throw new Error("Price must be > 0");
    if (this.rating < 0 || this.rating > 5) throw new Error("Rating must be 0..5");

    return this.factory.createProduct(this.name, this.price, this.rating);
  }
}
