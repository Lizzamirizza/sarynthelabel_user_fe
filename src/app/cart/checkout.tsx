// cart/checkout.tsx
import React, { useEffect, useState } from "react";
import { Product } from "../lib/types/Product"; // Pastikan path benar

const Checkout = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(storedCart);
  }, []);

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  const handlePayment = () => {
    // Proses pembayaran atau redireksi ke payment gateway seperti Midtrans
    alert("Proceeding to payment...");
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-white font-inter">
      <h1 className="text-2xl mt-30 text-black mb-10 font-bold">Checkout</h1>

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
          <button 
            onClick={handlePayment} 
            className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
          >
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
