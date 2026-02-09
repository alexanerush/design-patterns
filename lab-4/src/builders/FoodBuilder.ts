import { ProductBuilder } from "./ProductBuilder";
import { FoodFactory } from "../factories/FoodFactory";

export class FoodBuilder extends ProductBuilder {
  constructor() {
    super(new FoodFactory());
  }
}
