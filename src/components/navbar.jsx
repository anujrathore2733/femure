'use client';

import { useState, useEffect, useRef } from 'react';
import { Heart, Menu, X } from 'react-feather';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        };

        if (menuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuOpen]);

    // Close menu when pressing Escape key
    useEffect(() => {
        const handleEscapeKey = (event) => {
            if (event.key === 'Escape') {
                setMenuOpen(false);
            }
        };

        if (menuOpen) {
            document.addEventListener('keydown', handleEscapeKey);
        }

        return () => {
            document.removeEventListener('keydown', handleEscapeKey);
        };
    }, [menuOpen]);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <nav className="bg-white shadow-sm py-4 sticky top-0 z-50" ref={menuRef}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <div className="flex items-center">
                    <span className="font-headline text-2xl font-bold text-femure-primary">Femure</span>
                </div>
                <div className="hidden md:flex space-x-8">
                    <a href="#home" className="text-femure-primary font-medium">Home</a>
                    <a href="#conditions" className="text-gray-600 hover:text-femure-primary">Conditions</a>
                    <a href="#doctors" className="text-gray-600 hover:text-femure-primary">Doctors</a>
                    <a href="#pricing" className="text-gray-600 hover:text-femure-primary">Pricing</a>
                    <a href="#testimonials" className="text-gray-600 hover:text-femure-primary">Testimonials</a>
                </div>
                <button 
                    onClick={toggleMenu} 
                    className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                    aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                >
                    {menuOpen ? (
                        <X className="text-femure-primary w-6 h-6" />
                    ) : (
                        <Menu className="text-femure-primary w-6 h-6" />
                    )}
                </button>
            </div>
            <div className={`${menuOpen ? 'block' : 'hidden'} md:hidden px-6 pb-4`}>
                <div className="flex flex-col space-y-4 pt-4 border-t border-gray-100">
                    <a href="#home" className="text-femure-primary font-medium" onClick={closeMenu}>Home</a>
                    <a href="#conditions" className="text-gray-600 hover:text-femure-primary" onClick={closeMenu}>Conditions</a>
                    <a href="#doctors" className="text-gray-600 hover:text-femure-primary" onClick={closeMenu}>Doctors</a>
                    <a href="#pricing" className="text-gray-600 hover:text-femure-primary" onClick={closeMenu}>Pricing</a>
                    <a href="#testimonials" className="text-gray-600 hover:text-femure-primary" onClick={closeMenu}>Testimonials</a>
                </div>
            </div>
        </nav>
    );
}