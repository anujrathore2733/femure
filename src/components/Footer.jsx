import { Heart, Instagram, Linkedin } from 'react-feather';

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
                <div className="mt-8 pt-8 border-t border-gray-100 text-center text-sm text-gray-500">
                    <p>© 2025 Femure. Personalized Homeopathy for Women.</p>
                    <div className="mt-2 flex justify-center space-x-4">
                        <span>ISO Certified</span>
                        <span>GMP Compliant</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}