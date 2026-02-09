"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElectronicsFactory = void 0;
const AbstractProductFactory_1 = require("./AbstractProductFactory");
const Product_1 = require("../products/Product");
class ElectronicsFactory {
    createProduct(name, price, rating) {
        return {
            id: `el-${Date.now()}-${Math.random()}`,
            category: "electronics",
            name,
            price,
            rating,
        };
    }
}
exports.ElectronicsFactory = ElectronicsFactory;
//# sourceMappingURL=ElectronicsFactory.js.map