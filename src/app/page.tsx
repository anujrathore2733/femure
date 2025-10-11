'use client';

import { useState } from 'react';
import HeroSection from '@/components/heroSection';
import DoctorsSection from '@/components/DoctorsSection';
import InquiryForm from '@/components/InquiryForm';
import ConditionsSection from '@/components/ConditionsSection';
import WhyFemureSection from '@/components/WhyFemureSection';
import WhyChooseFemureSection from '@/components/WhyChooseFemureSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import JourneySection from '@/components/JourneySection';
import CommunitySection from '@/components/CommunitySection';
import FloatingCallButton from '@/components/FloatingCallButton';
import ConsultationModal from '@/components/ConsultationModal';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <main>
      <HeroSection />
      <DoctorsSection />
      <ConditionsSection />
      <InquiryForm />
      <JourneySection />
      <WhyFemureSection />
      <WhyChooseFemureSection />
      <TestimonialsSection />
      <CommunitySection />

      {/* Final Call to Action Section */}
      <section className="py-20" style={{ background: 'linear-gradient(to right, #C24C6E, #E8C9B1)' }}>
        <div className="container mx-auto px-6 text-center text-white">
          <h2 className="font-headline text-3xl md:text-4xl mb-6">You deserve care that listens and heals.</h2>
          <button 
            onClick={openModal}
            className="bg-white text-femure-primary hover:bg-femure-secondary py-3 px-12 rounded-full shadow-lg font-medium transition duration-300 mb-4"
          >
            Book Your Consultation
          </button>
          <p className="text-white opacity-90">Personalized. Compassionate. Continuous.</p>
        </div>
      </section>

      {/* Floating Call Button */}
      <FloatingCallButton />

      {/* Consultation Modal */}
      <ConsultationModal 
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </main>
  );
}