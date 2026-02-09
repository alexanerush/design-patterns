import { AbstractProductFactory } from "../factories/AbstractProductFactory";
import { Product } from "../products/Product";
export declare abstract class ProductBuilder {
    protected factory: AbstractProductFactory;
    protected name: string;
    protected price: number;
    protected rating: number;
    constructor(factory: AbstractProductFactory);
    setName(name: string): this;
    setPrice(price: number): this;
    setRating(rating: number): this;
    build(): Product;
}
//# sourceMappingURL=ProductBuilder.d.ts.map