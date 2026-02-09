"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FoodBuilder_1 = require("../builders/FoodBuilder");
const ElectronicsBuilder_1 = require("../builders/ElectronicsBuilder");
const SortByName_1 = require("../strategies/SortByName");
const SortByPrice_1 = require("../strategies/SortByPrice");
const SortByRating_1 = require("../strategies/SortByRating");
const SortStrategy_1 = require("../strategies/SortStrategy");
const Product_1 = require("../products/Product");
function print(title, items) {
    console.log(`\n=== ${title} ===`);
    for (const p of items) {
        console.log(`${p.category} | ${p.name} | €${p.price} | ⭐${p.rating}`);
    }
}
function sortAndPrint(title, items, strategy) {
    const sorted = strategy.sort(items);
    print(title, sorted);
}
async function main() {
    const items = [];
    // Builder + Abstract Factory (внутри builder)
    items.push(new FoodBuilder_1.FoodBuilder().setName("Pasta").setPrice(3.5).setRating(4.2).build());
    items.push(new FoodBuilder_1.FoodBuilder().setName("Chocolate").setPrice(2.0).setRating(4.8).build());
    items.push(new ElectronicsBuilder_1.ElectronicsBuilder().setName("Headphones").setPrice(49.99).setRating(4.4).build());
    items.push(new ElectronicsBuilder_1.ElectronicsBuilder().setName("Keyboard").setPrice(79.0).setRating(4.1).build());
    print("Original", items);
    // Strategy
    sortAndPrint("Sorted by name", items, new SortByName_1.SortByName());
    sortAndPrint("Sorted by price (asc)", items, new SortByPrice_1.SortByPrice());
    sortAndPrint("Sorted by rating (desc)", items, new SortByRating_1.SortByRating());
}
main();
//# sourceMappingURL=index.js.map