import { AbstractProductFactory } from "./AbstractProductFactory";
import { Product } from "../products/Product";
export declare class FoodFactory implements AbstractProductFactory {
    createProduct(name: string, price: number, rating: number): Product;
}
//# sourceMappingURL=FoodFactory.d.ts.map