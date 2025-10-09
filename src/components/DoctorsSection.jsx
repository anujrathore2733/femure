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
    const [selectedDoctor, setSelectedDoctor] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (doctor) => {
        setSelectedDoctor(doctor);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedDoctor(null);
    };

    return (
        <>
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="font-headline text-3xl text-center mb-12">Meet the Experts Who Listen</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {doctors.map((doctor, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden transition duration-300 hover:shadow-lg border-4 border-femure-primary">
                                <div className="p-6 flex flex-col items-center">
                                    <Image src={doctor.image} alt={doctor.name} width={128} height={128} className="w-32 h-32 rounded-full object-cover border-4 border-femure-secondary" />
                                    <h3 className="mt-4 font-headline text-xl">{doctor.name}</h3>
                                    <p className="text-femure-accent mb-3">{doctor.specialty}</p>
                                    <div className="flex items-center text-sm text-gray-600 mb-2">
                                        <Star className="w-4 h-4 fill-current text-yellow-400 mr-1" />
                                        <span>{doctor.rating}★ Rating</span>
                                    </div>
                                    <div className="text-center text-sm text-gray-600 space-y-1 mb-4">
                                        <p><span className="font-semibold">Experience:</span> {doctor.experience}</p>
                                        <p><span className="font-semibold">Patients Treated:</span> {doctor.patients}</p>
                                        <p><span className="font-semibold">Languages:</span> {doctor.languages}</p>
                                    </div>
                                    <p className="text-gray-600 text-center italic mb-4">{`"${doctor.quote}"`}</p>
                                    <button 
                                        onClick={() => openModal(doctor)}
                                        className="bg-femure-primary hover:bg-femure-accent text-white py-2 px-6 rounded-full text-sm transition duration-300"
                                    >
                                        Book Consultation
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Consultation Modal */}
            <ConsultationModal 
                isOpen={isModalOpen}
                onClose={closeModal}
                selectedDoctor={selectedDoctor}
            />
        </>
    );
}