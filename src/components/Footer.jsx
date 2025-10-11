import { Heart, Instagram, Linkedin } from 'react-feather';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-white py-12">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0 flex items-center">
                        <Heart className="text-femure-primary mr-2" />
                        <span className="font-headline text-xl text-femure-primary">Femure</span>
                    </div>
                    <div className="flex flex-wrap justify-center gap-6 mb-6 md:mb-0">
                        <a href="#" className="text-gray-600 hover:text-femure-primary">About</a>
                        <a href="#" className="text-gray-600 hover:text-femure-primary">Doctors</a>
                        <a href="#" className="text-gray-600 hover:text-femure-primary">FAQ</a>
                        <a href="#" className="text-gray-600 hover:text-femure-primary">Privacy</a>
                        <a href="#" className="text-gray-600 hover:text-femure-primary">Terms</a>
                        <a href="#" className="text-gray-600 hover:text-femure-primary">Contact</a>
                    </div>
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-600 hover:text-femure-primary"><Instagram /></a>
                        <a href="#" className="text-gray-600 hover:text-femure-primary"><Linkedin /></a>
                    </div>
                </div>
                
                {/* Brand Attribution - Above Copyright */}
                <div className="mt-8 pt-8 border-t border-gray-100 text-center mb-4">
                    <div className="inline-flex flex-col items-center space-y-3 bg-gradient-to-r from-femure-primary/5 to-femure-secondary/5 px-10 py-6 rounded-2xl">
                        <div className="flex items-center space-x-3">
                            <Image 
                                src="/logo.svg" 
                                alt="Femure" 
                                width={32} 
                                height={32} 
                                className="h-8 w-8"
                            />
                            <span className="text-2xl font-bold text-femure-primary">Femure</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className="text-base text-gray-600">is a brand of</span>
                            <Image 
                                src="/ApnHomeopathy Final Logo Approved.svg" 
                                alt="Apna Homeopathy" 
                                width={160} 
                                height={60} 
                                className="h-16 w-auto"
                            />
                        </div>
                    </div>
                </div>
                
                <div className="text-center text-sm text-gray-500">
                    <p>© 2025 Apna Homeopathy. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}