"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SortByRating = void 0;
const Product_1 = require("../products/Product");
const SortStrategy_1 = require("./SortStrategy");
class SortByRating {
    sort(items) {
        // по убыванию рейтинга
        return [...items].sort((a, b) => b.rating - a.rating);
    }
}
exports.SortByRating = SortByRating;
//# sourceMappingURL=SortByRating.js.map