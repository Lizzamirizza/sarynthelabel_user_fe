import React from "react";
import Navbar from "@/app/components/navbar";

export const metadata = {
    title: "Cart - Sarynthelebel",
};

export default function Cart() {
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
                </div>
            </div>
        </>
    );
}
