"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoodFactory = void 0;
const AbstractProductFactory_1 = require("./AbstractProductFactory");
const Product_1 = require("../products/Product");
class FoodFactory {
    createProduct(name, price, rating) {
        return {
            id: `food-${Date.now()}-${Math.random()}`,
            category: "food",
            name,
            price,
            rating,
        };
    }
}
exports.FoodFactory = FoodFactory;
//# sourceMappingURL=FoodFactory.js.map