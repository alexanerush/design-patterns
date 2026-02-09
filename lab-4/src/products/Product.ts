export type ProductCategory = "food" | "electronics";

export type Product = {
  id: string;
  category: ProductCategory;
  name: string;
  price: number;   // EUR
  rating: number;  // 0..5
};
