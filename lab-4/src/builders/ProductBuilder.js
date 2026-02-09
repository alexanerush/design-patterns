"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductBuilder = void 0;
const AbstractProductFactory_1 = require("../factories/AbstractProductFactory");
const Product_1 = require("../products/Product");
class ProductBuilder {
    factory;
    name = "";
    price = 0;
    rating = 0;
    constructor(factory) {
        this.factory = factory;
    }
    setName(name) {
        this.name = name;
        return this;
    }
    setPrice(price) {
        this.price = price;
        return this;
    }
    setRating(rating) {
        this.rating = rating;
        return this;
    }
    build() {
        if (!this.name.trim())
            throw new Error("Name is required");
        if (this.price <= 0)
            throw new Error("Price must be > 0");
        if (this.rating < 0 || this.rating > 5)
            throw new Error("Rating must be 0..5");
        return this.factory.createProduct(this.name, this.price, this.rating);
    }
}
exports.ProductBuilder = ProductBuilder;
//# sourceMappingURL=ProductBuilder.js.map