'use client';

import { useState } from 'react';
import { Heart, Menu } from 'react-feather';
import Image from 'next/image';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-white shadow-sm py-4 sticky top-0 z-50">
            <div className="container mx-auto px-6 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <Image 
                        src="/logo.svg" 
                        alt="Femure Logo" 
                        width={32} 
                        height={32} 
                        className="w-8 h-8"
                    />
                    <span className="font-headline text-xl text-femure-primary">Femure</span>
                </div>
                <div className="hidden md:flex space-x-8">
                    <a href="#" className="text-femure-primary font-medium">Home</a>
                    <a href="#" className="text-gray-600 hover:text-femure-primary">Conditions</a>
                    <a href="#" className="text-gray-600 hover:text-femure-primary">Doctors</a>
                    <a href="#" className="text-gray-600 hover:text-femure-primary">About</a>
                    <a href="#" className="text-gray-600 hover:text-femure-primary">Community</a>
                </div>
                <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
                    <Menu className="text-femure-primary" />
                </button>
            </div>
            <div className={`${menuOpen ? '' : 'hidden'} md:hidden px-6 pb-4`}>
                <div className="flex flex-col space-y-4 pt-4 border-t border-gray-100">
                    <a href="#" className="text-femure-primary font-medium">Home</a>
                    <a href="#" className="text-gray-600 hover:text-femure-primary">Conditions</a>
                    <a href="#" className="text-gray-600 hover:text-femure-primary">Doctors</a>
                    <a href="#" className="text-gray-600 hover:text-femure-primary">About</a>
                    <a href="#" className="text-gray-600 hover:text-femure-primary">Community</a>
                </div>
            </div>
        </nav>
    );
}