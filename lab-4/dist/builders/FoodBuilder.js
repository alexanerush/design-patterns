"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoodBuilder = void 0;
const ProductBuilder_1 = require("./ProductBuilder");
const FoodFactory_1 = require("../factories/FoodFactory");
class FoodBuilder extends ProductBuilder_1.ProductBuilder {
    constructor() {
        super(new FoodFactory_1.FoodFactory());
    }
}
exports.FoodBuilder = FoodBuilder;
