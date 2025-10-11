'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Check, CheckCircle } from 'react-feather';
import ConsultationModal from './ConsultationModal';

const images = [
    { src: '/img1.png', alt: 'Woman smiling in first slide' },
    { src: '/img2.png', alt: 'Doctor consulting patient in second slide' },
    { src: '/img3.png', alt: 'Happy woman doing yoga in third slide' },
];

const headings = [
    'Struggling with PCOS or Hormonal Issues?',
    'Tired of Irregular Periods & Pain?',
    'Looking for Natural Fertility Support?',
    'Stress & Anxiety Stealing Your Peace?',
    'Menopause Making You Feel Lost & Alone?'
];

export default function HeroSection() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentHeading, setCurrentHeading] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const headingInterval = setInterval(() => {
            setCurrentHeading((prev) => (prev + 1) % headings.length);
        }, 4000);

        return () => clearInterval(headingInterval);
    }, []);

    const updateCarousel = (index) => {
        setCurrentSlide(index);
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <section className="relative overflow-hidden">
            {/* Mobile Hero - Premium Minimalist Design */}
            <div className="md:hidden relative bg-gradient-to-br from-rose-50 via-white to-pink-50 min-h-screen flex flex-col">
                {/* Top Section - Hero Content */}
                <div className="flex-1 flex flex-col justify-center px-6 pt-6 pb-4">
                    <div className="max-w-lg mx-auto text-center">
                        {/* Main Headline - Premium with Creative Animation */}
                        <div className="relative h-[140px] sm:h-[160px] flex items-center justify-center mb-6 overflow-hidden">
                            <h1 className="font-headline text-4xl sm:text-5xl leading-tight text-femure-primary font-bold tracking-tight absolute inset-0 flex items-center justify-center">
                                {headings.map((heading, index) => (
                                    <span 
                                        key={index}
                                        className={`absolute inset-0 flex items-center justify-center px-4 transition-all duration-1000 ease-in-out ${
                                            index === currentHeading 
                                                ? 'opacity-100 translate-y-0 scale-100' 
                                                : index === (currentHeading - 1 + headings.length) % headings.length
                                                    ? 'opacity-0 -translate-y-8 scale-95'
                                                    : 'opacity-0 translate-y-8 scale-95'
                                        }`}
                                        style={{
                                            background: 'linear-gradient(135deg, #C24C6E 0%, #E85D8A 50%, #C24C6E 100%)',
                                            backgroundSize: '200% 200%',
                                            animation: index === currentHeading ? 'gradientShift 3s ease infinite' : 'none',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                            backgroundClip: 'text',
                                            textAlign: 'center'
                                        }}>
                                        {heading}
                                    </span>
                                ))}
                            </h1>
                        </div>
                        <style jsx>{`
                            @keyframes gradientShift {
                                0%, 100% {
                                    background-position: 0% 50%;
                                }
                                50% {
                                    background-position: 100% 50%;
                                }
                            }
                        `}</style>

                        {/* Powerful Solution Statement */}
                        <div className="mb-6 text-center">
                            <p className="text-3xl text-gray-900 leading-tight font-bold mb-4">
                                <span className="text-femure-primary">Femure</span> is Your Answer
                            </p>
                            <p className="text-base text-gray-700 leading-relaxed mb-5">
                                Personalized homeopathy for <span className="font-semibold text-gray-900">PCOS, hormonal issues, menstrual wellness, fertility, stress & mental health</span> — treating root causes with natural remedies, continuous care, and a supportive community.
                            </p>
                            
                            {/* Key Differentiators */}
                            <div className="grid grid-cols-2 gap-2.5 text-sm text-gray-700 mb-5">
                                <div className="flex items-start">
                                    <span className="text-femure-primary mr-2 text-base">✓</span>
                                    <span className="text-left">Root cause treatment</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-femure-primary mr-2 text-base">✓</span>
                                    <span className="text-left">Regular follow-ups</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-femure-primary mr-2 text-base">✓</span>
                                    <span className="text-left">Community support</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-femure-primary mr-2 text-base">✓</span>
                                    <span className="text-left">Natural healing</span>
                                </div>
                            </div>
                        </div>

                        {/* CTA Button with Consultation Info */}
                        <button
                            onClick={openModal}
                            className="w-full bg-femure-primary hover:bg-femure-accent text-white py-4 px-8 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 text-lg font-semibold mb-2"
                        >
                            Book Consultation
                        </button>
                        <p className="text-sm text-gray-600 text-center mb-3">
                            Audio & Video consultations available
                        </p>
                    </div>
                </div>

                {/* Bottom Section - Image Carousel with Gradient and Trust Indicators */}
                <div className="relative h-80 overflow-hidden -mt-4">
                    {/* Image Carousel - Subtle, Supporting Role */}
                    <div className="absolute inset-0">
                        {images.map((img, index) => (
                            <div
                                key={index}
                                className={`carousel-item absolute inset-0 ${index === currentSlide ? 'active' : ''}`}
                            >
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    fill
                                    className="object-cover object-top"
                                    priority={index === 0}
                                    sizes="100vw"
                                />
                            </div>
                        ))}
                        {/* Gradient overlay - stronger at top where trust indicators sit */}
                        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/60 to-transparent"></div>
                    </div>

                    {/* Trust Indicators - On Gradient Overlay */}
                    <div className="absolute top-8 left-0 right-0 z-10">
                        <div className="flex justify-center items-center gap-6 text-xs px-4">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-femure-primary">15+</div>
                                <div className="text-xs text-gray-800 font-medium">Doctors</div>
                            </div>
                            <div className="w-px h-10 bg-femure-primary/30"></div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-femure-primary">20K+</div>
                                <div className="text-xs text-gray-800 font-medium">Treated</div>
                            </div>
                            <div className="w-px h-10 bg-femure-primary/30"></div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-femure-primary">4.9★</div>
                                <div className="text-xs text-gray-800 font-medium">Rating</div>
                            </div>
                        </div>
                    </div>

                    {/* Carousel Dots - Minimal */}
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-10">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                className={`h-1.5 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-femure-primary w-6' : 'bg-gray-400 w-1.5'}`}
                                onClick={() => updateCarousel(index)}
                                aria-label={`Slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Desktop Hero - Original Layout */}
            <div className="hidden md:block hero-bg py-10">
                <div className="container mx-auto px-6 flex flex-row items-center gap-12 min-h-[600px]">
                    {/* Text Content */}
                    <div className="w-1/2 flex flex-col justify-center">
                        {/* Desktop Headline - Premium with Creative Animation */}
                        <div className="relative h-[180px] flex items-center mb-6 overflow-hidden">
                            <h1 className="font-headline text-5xl leading-tight text-femure-primary font-bold tracking-tight absolute inset-0 flex items-center">
                                {headings.map((heading, index) => (
                                    <span 
                                        key={index}
                                        className={`absolute inset-0 flex items-center transition-all duration-1000 ease-in-out ${
                                            index === currentHeading 
                                                ? 'opacity-100 translate-y-0 scale-100' 
                                                : index === (currentHeading - 1 + headings.length) % headings.length
                                                    ? 'opacity-0 -translate-y-8 scale-95'
                                                    : 'opacity-0 translate-y-8 scale-95'
                                        }`}
                                        style={{
                                            background: 'linear-gradient(135deg, #C24C6E 0%, #E85D8A 50%, #C24C6E 100%)',
                                            backgroundSize: '200% 200%',
                                            animation: index === currentHeading ? 'gradientShift 3s ease infinite' : 'none',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                            backgroundClip: 'text'
                                        }}>
                                        {heading}
                                    </span>
                                ))}
                            </h1>
                        </div>
                        
                        {/* Powerful Solution Statement - Desktop */}
                        <div className="mb-8">
                            <p className="text-4xl text-gray-900 leading-tight font-bold mb-5">
                                <span className="text-femure-primary">Femure</span> is Your Answer
                            </p>
                            <p className="text-xl text-gray-700 leading-relaxed mb-6">
                                Personalized homeopathy for <span className="font-semibold text-gray-900">PCOS, hormonal issues, menstrual wellness, fertility, stress & mental health</span> — treating root causes with natural remedies, continuous care, and a supportive community.
                            </p>
                            
                            {/* Key Differentiators - Desktop */}
                            <div className="grid grid-cols-2 gap-4 text-base text-gray-700">
                                <div className="flex items-start">
                                    <span className="text-femure-primary mr-2 text-xl">✓</span>
                                    <span>Root cause treatment</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-femure-primary mr-2 text-xl">✓</span>
                                    <span>Regular follow-ups</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-femure-primary mr-2 text-xl">✓</span>
                                    <span>Community support</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-femure-primary mr-2 text-xl">✓</span>
                                    <span>Natural healing</span>
                                </div>
                            </div>
                        </div>

                        <div className="mb-8">
                            <button
                                onClick={openModal}
                                className="bg-femure-primary hover:bg-femure-accent text-white py-4 px-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg font-semibold"
                            >
                                Book Consultation
                            </button>
                            <p className="text-sm text-gray-600 mt-3">
                                Audio & Video consultations available
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4 text-sm">
                            <span className="flex items-center text-gray-700 bg-white/50 px-3 py-1.5 rounded-full">
                                <CheckCircle className="mr-1.5 text-femure-accent flex-shrink-0" size={16} />
                                15+ Certified Doctors
                            </span>
                            <span className="flex items-center text-gray-700 bg-white/50 px-3 py-1.5 rounded-full">
                                <CheckCircle className="mr-1.5 text-femure-accent flex-shrink-0" size={16} />
                                20,000+ Women Treated
                            </span>
                            <span className="flex items-center text-gray-700 bg-white/50 px-3 py-1.5 rounded-full">
                                <CheckCircle className="mr-1.5 text-femure-accent flex-shrink-0" size={16} />
                                4.9★ Rated Care
                            </span>
                        </div>
                    </div>

                    {/* Image Carousel - Desktop */}
                    <div className="w-1/2 flex justify-center items-center">
                        <div className="w-full h-full max-w-lg relative">
                            {images.map((img, index) => (
                                <div key={index} className={`carousel-item ${index === currentSlide ? 'active' : ''}`}>
                                    <Image
                                        src={img.src}
                                        alt={img.alt}
                                        width={600}
                                        height={600}
                                        className="rounded-2xl shadow-2xl w-full h-full object-cover"
                                        priority={index === 0}
                                    />
                                </div>
                            ))}
                            <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2.5">
                                {images.map((_, index) => (
                                    <button
                                        key={index}
                                        className={`carousel-dot w-3 h-3 bg-white rounded-full transition-all duration-300 ${index === currentSlide ? 'opacity-90 scale-125' : 'opacity-40 hover:opacity-70'}`}
                                        onClick={() => updateCarousel(index)}
                                        aria-label={`Slide ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Consultation Modal */}
                <ConsultationModal
                    isOpen={isModalOpen}
                    onClose={closeModal}
                />
        </section>
    );
}