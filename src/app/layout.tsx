"use client";

import { Suspense } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import LoadingOverlay from "./components/loadingOverlay";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Sarynthelabel</title>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} flex flex-col min-h-screen`}>
        <Suspense fallback={<LoadingOverlay />}>
          <main className="flex-grow">{children}</main>
        </Suspense>
        <Footer />
      </body>
    </html>
  );
}
