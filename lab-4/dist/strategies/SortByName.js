"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SortByName = void 0;
class SortByName {
    sort(items) {
        return [...items].sort((a, b) => a.name.localeCompare(b.name));
    }
}
exports.SortByName = SortByName;
