'use client';

import { useState } from 'react';
import Image from 'next/image';
import ConsultationModal from './ConsultationModal';

export default function CommunitySection() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <section className="py-16" style={{ background: 'linear-gradient(to right, #FFE8E8, #FFD6D6)' }}>
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 mb-12 md:mb-0">
                            <h2 className="font-headline text-3xl mb-6">More Than Medicine — The Femure Circle</h2>
                            <p className="text-gray-700 mb-6">Join the Femure Wellness Circle for monthly workshops and group sessions to maintain emotional and physical balance.</p>
                            <div className="space-y-4 mb-8">
                                <div className="flex items-start">
                                    <span className="text-xl mr-3">🌙</span>
                                    <p className="text-gray-700">Hormone Harmony — cycle awareness workshop</p>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-xl mr-3">☀️</span>
                                    <p className="text-gray-700">Mindful Mornings — stress relief sessions</p>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-xl mr-3">💚</span>
                                    <p className="text-gray-700">Mental Wellness — anxiety & emotional balance support</p>
                                </div>
                            </div>
                            <button 
                                onClick={openModal}
                                className="bg-femure-primary hover:bg-femure-accent text-white py-3 px-8 rounded-full shadow-md transition duration-300"
                            >
                                Join the Wellness Circle
                            </button>
                        </div>
                        <div className="md:w-1/2 flex justify-center">
                            <Image src="/img4.png" alt="Women in circle" width={500} height={300} className="rounded-lg shadow-xl max-w-md w-full" />
                        </div>
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