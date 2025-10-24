import { Heart, Instagram, Linkedin } from 'react-feather';

export default function Footer() {
    return (
        <footer className="bg-white py-12">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0 flex items-center">
                        <span className="font-headline text-2xl font-bold text-femure-primary">Femure</span>
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
                        <a href="https://www.instagram.com/femure.india/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-femure-primary transition-colors duration-300">
                            <Instagram className="w-5 h-5" />
                        </a>
                        <a href="#" className="text-gray-600 hover:text-femure-primary transition-colors duration-300">
                            <Linkedin className="w-5 h-5" />
                        </a>
                    </div>
                </div>
                
                {/* Brand Attribution - Above Copyright */}
                <div className="mt-8 pt-8 border-t border-gray-100 text-center mb-4">
                    <div className="inline-flex flex-col items-center space-y-3 bg-gradient-to-r from-femure-primary/5 to-femure-secondary/5 px-10 py-6 rounded-2xl">
                        <div className="flex items-center space-x-3">
                            <span className="text-3xl font-bold text-femure-primary">Femure</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className="text-base text-gray-600">is a brand of</span>
                            <span className="text-lg font-semibold text-gray-800">Apna Homeopathy</span>
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