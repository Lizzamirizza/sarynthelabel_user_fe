// src/lib/utils/cart.ts
import { Product } from "../lib/types/Product";

export const addToCart = (product: Product): void => {
  const cart: Product[] = JSON.parse(localStorage.getItem("cart") || "[]");
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const getCart = (): Product[] => {
  return JSON.parse(localStorage.getItem("cart") || "[]");
};

export const clearCart = (): void => {
  localStorage.removeItem("cart");
};
