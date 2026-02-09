"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoodFactory = void 0;
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
