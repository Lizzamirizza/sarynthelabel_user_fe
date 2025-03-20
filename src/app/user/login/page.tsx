import React from "react";
import Link from "next/link";

export default function Login() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-white">
            <div className="bg-white shadow-lg rounded-lg p-8 w-96">
                <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <input type="email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Masukkan email" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Password</label>
                        <input type="password" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Masukkan password" />
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">Login</button>
                </form>
                <div className="flex items-center my-4">
                    <hr className="flex-grow border-gray-300" />
                    <span className="mx-2 text-gray-500">or</span>
                    <hr className="flex-grow border-gray-300" />
                </div>
                <p className="text-center text-gray-700">
                    Belum memiliki akun? <Link href="/user/register" className="text-blue-500 hover:underline">Buat akun</Link>
                </p>
            </div>
        </div>
    );
}