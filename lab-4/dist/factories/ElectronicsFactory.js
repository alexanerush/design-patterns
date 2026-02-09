"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElectronicsFactory = void 0;
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
