'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Star } from 'react-feather';
import ConsultationModal from './ConsultationModal';

const doctors = [
    {
        name: 'Dr. Priya Sharma',
        specialty: "Women's Health Specialist",
        rating: 4.9,
        experience: '15+ years',
        patients: '8,000+',
        languages: 'English, Hindi',
        quote: 'Your health journey is unique, and so should be your treatment.',
        image: '/img1.png'
    },
    {
        name: 'Dr. Ananya Patel',
        specialty: 'Homeopathy & Hormone Expert',
        rating: 4.8,
        experience: '12+ years',
        patients: '6,500+',
        languages: 'English, Gujarati, Hindi',
        quote: "Balance comes from understanding your body's natural rhythm.",
        image: '/img1.png'
    },
    {
        name: 'Dr. Meera Krishnan',
        specialty: 'Fertility & Wellness Coach',
        rating: 5.0,
        experience: '10+ years',
        patients: '7,500+',
        languages: 'English, Tamil, Kannada',
        quote: 'True healing addresses mind, body and emotions together.',
        image: '/img1.png'
    },
];

export default function DoctorsSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <section className="py-8 md:py-16 bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="font-headline text-2xl md:text-3xl text-center mb-6 md:mb-12">Meet the Experts Who Listen</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                        {doctors.map((doctor, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden transition duration-300 hover:shadow-lg border-2 md:border-4 border-femure-primary">
                                <div className="p-4 md:p-6 flex flex-col items-center">
                                    <Image src={doctor.image} alt={doctor.name} width={80} height={80} className="w-20 h-20 md:w-32 md:h-32 rounded-full object-cover border-2 md:border-4 border-femure-secondary" />
                                    <h3 className="mt-3 md:mt-4 font-headline text-xl md:text-xl">{doctor.name}</h3>
                                    <p className="text-femure-accent text-base md:text-base mb-2 md:mb-3">{doctor.specialty}</p>
                                    <div className="flex items-center text-sm md:text-sm text-gray-600 mb-2">
                                        <Star className="w-4 h-4 md:w-4 md:h-4 fill-current text-yellow-400 mr-1" />
                                        <span>{doctor.rating}★ Rating</span>
                                    </div>
                                    <div className="text-center text-sm md:text-sm text-gray-600 space-y-1 mb-3 md:mb-4">
                                        <p><span className="font-semibold">Experience:</span> {doctor.experience}</p>
                                        <p><span className="font-semibold">Patients:</span> {doctor.patients}</p>
                                        <p><span className="font-semibold">Languages:</span> {doctor.languages}</p>
                                    </div>
                                    <p className="text-gray-600 text-center italic text-sm md:text-sm">{`"${doctor.quote}"`}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    {/* CTA Section */}
                    <div className="text-center mt-8 md:mt-12">
                        <h3 className="font-headline text-xl md:text-2xl text-gray-900 mb-4">
                            Ready to Start Your Healing Journey?
                        </h3>
                        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                            Book a consultation with our expert homeopaths and take the first step towards personalized, natural healing.
                        </p>
                        <button
                            onClick={openModal}
                            className="bg-femure-primary hover:bg-femure-accent text-white py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg font-semibold"
                        >
                            Book Consultation
                        </button>
                        <p className="text-sm text-gray-500 mt-3">
                            Audio & Video consultations available
                        </p>
                    </div>
                </div>
            </section>

            {/* Consultation Modal */}
            <ConsultationModal 
                isOpen={isModalOpen}
                onClose={closeModal}
            />
        </>
    );
}