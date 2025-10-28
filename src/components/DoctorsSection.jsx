'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Star } from 'react-feather';
import ConsultationModal from './ConsultationModal';

const doctors = [
    {
        name: 'Dr. Tanya Vaish',
        specialty: 'Homeopathy, PCOS & Fertility Specialist',
        qualification: 'BHMS, MD',
        rating: 4.8,
        experience: '8+ years',
        patients: '3700+',
        languages: 'English, Hindi',
        license: 'H041477',
        licenseUrl: 'https://cchindia.com/verify-license',
        quote: "Empowering women through holistic, personalized care is my passion.",
        image: '/drtanya.png'
    },
    {
        name: 'Dr Nisha Dhiman',
        specialty: "Menstrual & Period Cycle Specialist",
        qualification: 'BHMS',
        rating: 4.7,
        experience: '8+ years',
        patients: '2700+',
        languages: 'English, Hindi',
        license: '695/A',
        licenseUrl: 'https://cchindia.com/verify-license',
        quote: 'Understanding your period cycle is the first step to a healthier you.',
      image: '/dr.nisha.png'
    },
    {
        name: 'Dr. Parul Gupta',
        specialty: "Women's Health & Mental Health Specialist",
        qualification: 'BHMS',
        rating: 4.7,
        experience: '10+ years',
        patients: '5000+',
        languages: 'English, Hindi',
        license: '7411',
        licenseUrl: 'https://cchindia.com/verify-license',
        quote: "Every woman deserves compassionate care for both body and mind.",
        image: '/drparul.jpg'
    },
    {
        name: 'Dr. Sakshi Bhadana',
        specialty: 'Homeopathy & Hormone Expert',
        qualification: 'BHMS, MD',
        rating: 4.8,
        experience: '7+ years',
        patients: '2500+',
        languages: 'English, Hindi',
        license: 'H040065',
        licenseUrl: 'https://cchindia.com/verify-license',
        quote: "Balance comes from understanding your body's natural rhythm.",
        image: '/SakshiBhadana.png'
    },
    {
        name: 'Dr. Pooja Patidar',
        specialty: "Women's Health Specialist",
        qualification: 'BHMS, MD',
        rating: 4.5,
        experience: '6+ years',
        patients: '1700+',
        languages: 'English, Hindi',
        license: '0047846',
        licenseUrl: 'https://cchindia.com/verify-license',
        quote: 'Your health journey is unique, and so should be your treatment.',
        image: '/DrPoojaPatidar.jpeg'
    },
    {
        name: 'Dr. Shivani',
        specialty: "PCOS & Hormonal Imbalance Specialist",
        qualification: 'BHMS',
        rating: 4.4,
        experience: '4+ years',
        patients: '1000+',
        languages: 'English, Hindi',
        license: '09884',
        licenseUrl: 'https://cchindia.com/verify-license',
        quote: "Small hormonal changes can create big transformations — let's journey together.",
        image: '/drshivani.png'
    }
    
    
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
                            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden transition duration-300 hover:shadow-lg border-2 md:border-4 border-femure-primary relative">
                                {/* License Number */}
                                <div className="absolute top-2 right-2 z-10">
                                    <div className="text-[10px] text-gray-500 font-medium">
                                        License No: {doctor.license}
                                    </div>
                                </div>
                                <div className="p-4 md:p-6 flex flex-col items-center">
                                    <Image 
                                        src={doctor.image} 
                                        alt={doctor.name} 
                                        width={80} 
                                        height={80} 
                                        className="w-20 h-20 md:w-32 md:h-32 rounded-full object-cover border-2 md:border-4 border-femure-secondary"
                                        style={{
                                            objectPosition: doctor.name === 'Dr. Tanya Vaish' ? 'center 30%' : 'center'
                                        }}
                                        onError={(e) => {
                                            e.target.src = '/img1.png'; // Fallback image
                                        }}
                                    />
                                    <h3 className="mt-3 md:mt-4 font-headline text-xl md:text-xl">{doctor.name}</h3>
                                    <p className="text-femure-accent text-base md:text-base mb-1">{doctor.specialty}</p>
                                    <p className="text-femure-primary text-sm md:text-sm font-semibold mb-2 md:mb-3">{doctor.qualification}</p>
                                    <div className="text-center text-sm md:text-sm text-gray-600 mb-3 md:mb-4">
                                        <div className="flex items-center justify-center mb-1">
                                            <Star className="w-4 h-4 md:w-4 md:h-4 fill-current text-yellow-400 mr-1" />
                                            <span className="font-semibold">{doctor.rating}★ Rating</span>
                                        </div>
                                        <p className="text-xs md:text-sm"><span className="font-semibold">Experience:</span> {doctor.experience} • <span className="font-semibold">Patients:</span> {doctor.patients}</p>
                                        <p className="text-xs md:text-sm"><span className="font-semibold">Languages:</span> {doctor.languages}</p>
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