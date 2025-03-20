import Image from "next/image";
import { FaInstagram, FaEnvelope } from "react-icons/fa"; // Import icon dari react-icons

export default function Footer() {
    return (
        <footer className="flex flex-col items-center py-6 border-t text-gray-900 bg-white w-full font-sans text-[15px]">
            {/* Bagian Atas: Logo - Navigasi - Sosial Media */}
            <div className="flex items-center justify-between w-full max-w-4xl px-6">
                {/* Logo (Kiri) */}
                <div className="flex items-center space-x-2">
                    <Image src="/logo_saryn.png" alt="Sarynthelabel Logo" width={120} height={40} />
                    <span className="text-[15px] font-semibold">Sarynthelabel</span>
                </div>

                {/* Navigasi Tengah */}
                <nav className="flex space-x-6 font-medium">
                    <a href="/catalogue" className="hover:underline text-[15px]">Catalogue</a>
                    <a href="/about" className="hover:underline text-[15px]">About</a>
                    <a href="/custom" className="hover:underline text-[15px]">Custom</a>
                </nav>

                {/* Ikon Sosial Media (Kanan) */}
                <div className="flex space-x-4">
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={24} className="hover:text-gray-500 transition" />
                    </a>
                    <a href="mailto:your-email@example.com">
                        <FaEnvelope size={24} className="hover:text-gray-500 transition" />
                    </a>
                </div>
            </div>

            {/* Copyright (Bawah Tengah) */}
            <p className="mt-4 text-[15px] text-gray-500 text-center">
                © 2025 Sarynthelabel. All Rights Reserved.
            </p>
        </footer>
    );
}
