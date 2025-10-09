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

export default function HeroSection() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
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
        <section className="hero-bg py-20 md:py-28">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-stretch min-h-[600px]">
                <div className="md:w-1/2 mb-12 md:mb-0 flex flex-col justify-center">
                    <h1 className="font-headline text-4xl md:text-5xl leading-tight mb-6 text-femure-primary">Personalized Homeopathy, Designed for Women.</h1>
                    <p className="text-lg text-gray-600 mb-4">
                        Imagine a life where you feel balanced and in control. At Femure, we don't just treat symptoms—we build a partnership to guide you toward lasting wellness. Our community is here to support you on every step of your journey to relief from:
                    </p>
                    <ul className="text-lg text-gray-600 mb-8 space-y-2">
                        <li className="flex items-center"><Check className="text-femure-primary mr-2" /> PCOS and Hormonal Imbalances</li>
                        <li className="flex items-center"><Check className="text-femure-primary mr-2" /> Menstrual Pain and Irregular Periods</li>
                        <li className="flex items-center"><Check className="text-femure-primary mr-2" /> Menopausal Symptoms and Infertility Concerns</li>
                        <li className="flex items-center"><Check className="text-femure-primary mr-2" /> General feminine health issues</li>
                    </ul>
                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                        <button 
                            onClick={openModal}
                            className="bg-femure-primary hover:bg-femure-accent text-white py-3 px-6 rounded-full shadow-md transition duration-300"
                        >
                            Book Video Consultation
                        </button>
                        <button 
                            onClick={openModal}
                            className="border border-femure-primary text-femure-primary hover:bg-femure-secondary py-3 px-6 rounded-full transition duration-300"
                        >
                            Book Audio Consultation
                        </button>
                    </div>
                    <div className="mt-8 flex flex-wrap gap-4">
                        <span className="flex items-center text-sm text-gray-600"><CheckCircle className="mr-2 text-femure-accent" /> 15+ Certified Doctors</span>
                        <span className="flex items-center text-sm text-gray-600"><CheckCircle className="mr-2 text-femure-accent" /> 20,000+ Women Treated</span>
                        <span className="flex items-center text-sm text-gray-600"><CheckCircle className="mr-2 text-femure-accent" /> 4.9★ Rated Care</span>
                    </div>
                </div>
                <div className="md:w-1/2 flex justify-center items-center relative">
                    <div className="w-full h-full max-w-lg relative">
                        {images.map((img, index) => (
                            <div key={index} className={`carousel-item ${index === currentSlide ? 'active' : ''}`}>
                                <Image src={img.src} alt={img.alt} width={600} height={600} className="rounded-lg shadow-xl w-full h-full object-cover" />
                            </div>
                        ))}
                        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                            {images.map((_, index) => (
                                <button
                                    key={index}
                                    className={`carousel-dot w-3 h-3 bg-white rounded-full transition duration-300 ${index === currentSlide ? 'opacity-70' : 'opacity-30 hover:opacity-70'}`}
                                    onClick={() => updateCarousel(index)}
                                    aria-label={`Slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Consultation Modal */}
            <ConsultationModal 
                isOpen={isModalOpen}
                onClose={closeModal}
                selectedDoctor={null}
            />
        </section>
    );
}