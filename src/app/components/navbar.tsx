import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Home, Search, ShoppingCart, User } from "lucide-react";

export default function Navbar(): React.JSX.Element {
    return (
        <nav className="fixed top-0 left-0 w-full bg-transparent backdrop-blur-md p-4 flex justify-between items-center shadow-md">
            <div className="flex-1 flex justify-center">
                <Image src="/sarynthelebel.png" alt="Sarynthelebel Logo" width={100} height={40} />
            </div>
            <div className="flex gap-4">
                <Link href="/beranda">
                    <Home size={24} className="text-white cursor-pointer hover:text-gray-300" />
                </Link>
                <Link href="/search">
                    <Search size={24} className="text-white cursor-pointer hover:text-gray-300" />
                </Link>
                <Link href="/cart">
                    <ShoppingCart size={24} className="text-white cursor-pointer hover:text-gray-300" />
                </Link>
                <Link href="/user">
                    <User size={24} className="text-white cursor-pointer hover:text-gray-300" />
                </Link>
            </div>
        </nav>
    );
}
