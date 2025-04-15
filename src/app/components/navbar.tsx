import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar(): React.JSX.Element {
    return (
        <nav className="fixed top-0 left-0 w-full p-4 flex items-center z-50">
            {/* Logo centered */}
            <div className="flex-1 flex justify-center">
                <Image src="/sarynlogo.png" alt="Sarynthelebel Logo" width={60} height={60} className="rounded-full" />
            </div>
            
            {/* Icons positioned in the middle of the right-side space */}
            <div className="absolute right-[15%] flex gap-6">
                <Link href="/search">
                    <Image src="/search.svg" alt="Search" width={22} height={22} className="cursor-pointer" />
                </Link>
                <Link href="/cart">
                    <Image src="/basket.svg" alt="Cart" width={22} height={22} className="cursor-pointer" />
                </Link>
                <Link href="/user">
                    <Image src="/profile.svg" alt="User" width={22} height={22} className="cursor-pointer" />
                </Link>
            </div>
        </nav>
    );
}
