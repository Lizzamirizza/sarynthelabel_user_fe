// cart/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Product } from "../lib/types/Product";
import { getCart } from "../utils/cart";
import Link from "next/link";

export default function Cart() {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    const cart = getCart();
    setCartItems(cart);
  }, []);

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center min-h-screen bg-white font-inter">
        <h1 className="text-2xl mt-30 text-black mb-10 font-bold">Cart</h1>
        <div className="w-full max-w-4xl">
          <div className="grid grid-cols-4 text-center border-b py-2 text-gray-500 text-[13px]">
            <div>PRODUCT</div>
            <div>PRICE</div>
            <div>QUANTITY</div>
            <div>TOTAL</div>
          </div>

          {/* Cart Items */}
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-4 text-center items-center border-b py-4 text-black text-sm"
            >
              <div className="flex items-center justify-center">
                <img
                  src={item.images?.[0] || "/placeholder.jpg"}
                  alt={item.name}
                  className="w-12 h-12 object-cover rounded mr-2"
                />
                <span>{item.name}</span>
              </div>
              <div>{item.price.toLocaleString()} IDR</div>
              <div>1</div>
              <div>{item.price.toLocaleString()} IDR</div>
            </div>
          ))}

          {/* Total Price */}
          <div className="text-right mt-4 text-lg font-semibold text-black">
            Total: {totalPrice.toLocaleString()} IDR
          </div>

          {/* Checkout Button */}
          <div className="text-right mt-6">
            <Link href="/cart/checkout">
              <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition">
                Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
