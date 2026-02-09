"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SortByPrice = void 0;
const Product_1 = require("../products/Product");
const SortStrategy_1 = require("./SortStrategy");
class SortByPrice {
    sort(items) {
        return [...items].sort((a, b) => a.price - b.price);
    }
}
exports.SortByPrice = SortByPrice;
//# sourceMappingURL=SortByPrice.js.map