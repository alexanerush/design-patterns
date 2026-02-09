"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SortByName = void 0;
const Product_1 = require("../products/Product");
const SortStrategy_1 = require("./SortStrategy");
class SortByName {
    sort(items) {
        return [...items].sort((a, b) => a.name.localeCompare(b.name));
    }
}
exports.SortByName = SortByName;
//# sourceMappingURL=SortByName.js.map