import { ProductBuilder } from "./ProductBuilder";
import { ElectronicsFactory } from "../factories/ElectronicsFactory";

export class ElectronicsBuilder extends ProductBuilder {
  constructor() {
    super(new ElectronicsFactory());
  }
}
