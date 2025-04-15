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

// ✅ Tambahan fungsi untuk menyimpan cart secara eksplisit
export const saveCart = (cart: Product[]): void => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

// ✅ Fungsi untuk menghapus item dari cart berdasarkan index
export const removeFromCart = (index: number): void => {
  const cart: Product[] = getCart();
  cart.splice(index, 1);
  saveCart(cart);
};
