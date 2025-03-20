import React from "react";
import Navbar from "@/app/components/navbar";

export const metadata = {
    title: "Catalogue - Sarynthelebel",
};

export default function Catalogue() {
    return (
        <>
            <Navbar />
            <div className="flex items-center justify-center h-screen bg-gray-800">
                <h1 className="text-xl font-bold text-white">ini halaman about yang dibuat Tasya cantik</h1>
            </div>
        </>
    );
}
