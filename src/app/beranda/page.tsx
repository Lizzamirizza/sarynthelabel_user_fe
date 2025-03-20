import React from "react";
import Navbar from "@/app/components/navbar";

export const metadata = {
    title: "Beranda - Sarynthelebel",
};

export default function HomePage() {
    return (
        <>
            <Navbar />
            <div className="flex items-center justify-center h-screen bg-gray-800">
                <h1 className="text-xl font-bold text-white">ini halaman beranda yang dibuat Tasya cantik</h1>
            </div>
        </>
    );
}
