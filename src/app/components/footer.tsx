"use client";

import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t w-full">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-6 relative">
        {/* Left: Logo */}
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <img src="/sarynlogo.png" alt="Logo" className="h-8" />
          <span className="text-lg font-semibold text-black">sarynthelebel</span>
        </div>

        {/* Center: Navigation */}
        <nav className="flex space-x-6 text-black text-sm font-medium mb-4 md:mb-0 md:absolute md:left-1/2 md:top-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2">
          <a href="#" className="hover:underline">Catalogue</a>
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Custom</a>
        </nav>

        {/* Right: Social icons */}
        <div className="flex space-x-6">
          <img src="/instagram.svg" alt="Instagram" className="h-6 w-6 cursor-pointer" />
          <img src="/gmail.svg" alt="Gmail" className="h-6 w-6 cursor-pointer" />
        </div>
      </div>

      <div className="py-2 bg-gray-100 w-full text-center">
        <p className="text-gray-500 text-xs">© 2025 Sarynthelebel. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
