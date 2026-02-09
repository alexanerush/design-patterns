import { FoodBuilder } from "../builders/FoodBuilder";
import { ElectronicsBuilder } from "../builders/ElectronicsBuilder";
import { SortByName } from "../strategies/SortByName";
import { SortByPrice } from "../strategies/SortByPrice";
import { SortByRating } from "../strategies/SortByRating";
import { SortStrategy } from "../strategies/SortStrategy";
import { Product } from "../products/Product";

function print(title: string, items: Product[]) {
  console.log(`\n=== ${title} ===`);
  for (const p of items) {
    console.log(`${p.category} | ${p.name} | €${p.price} | ⭐${p.rating}`);
  }
}

function sortAndPrint(title: string, items: Product[], strategy: SortStrategy) {
  const sorted = strategy.sort(items);
  print(title, sorted);
}

async function main() {
  const items: Product[] = [];

  // Builder + Abstract Factory (внутри builder)
  items.push(
    new FoodBuilder().setName("Pasta").setPrice(3.5).setRating(4.2).build()
  );
  items.push(
    new FoodBuilder().setName("Chocolate").setPrice(2.0).setRating(4.8).build()
  );
  items.push(
    new ElectronicsBuilder().setName("Headphones").setPrice(49.99).setRating(4.4).build()
  );
  items.push(
    new ElectronicsBuilder().setName("Keyboard").setPrice(79.0).setRating(4.1).build()
  );

  print("Original", items);

  // Strategy
  sortAndPrint("Sorted by name", items, new SortByName());
  sortAndPrint("Sorted by price (asc)", items, new SortByPrice());
  sortAndPrint("Sorted by rating (desc)", items, new SortByRating());
}

main();
