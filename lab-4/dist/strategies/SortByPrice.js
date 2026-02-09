"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SortByPrice = void 0;
class SortByPrice {
    sort(items) {
        return [...items].sort((a, b) => a.price - b.price);
    }
}
exports.SortByPrice = SortByPrice;
