"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SortByRating = void 0;
class SortByRating {
    sort(items) {
        // по убыванию рейтинга
        return [...items].sort((a, b) => b.rating - a.rating);
    }
}
exports.SortByRating = SortByRating;
