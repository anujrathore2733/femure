'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Shield, Zap, Clock, Heart, Users, Droplet, Sun, Award, TrendingUp, Target } from 'react-feather';
import ConsultationModal from './ConsultationModal';

const conditions = [
    {
        icon: Shield,
        title: 'PCOD / PCOS',
        tagline: 'Restore Hormonal Balance Naturally',
        image: '/img1.png', // Woman with natural glow
        gradient: 'from-pink-50 to-rose-100',
        symptoms: [
            'Irregular or missed periods',
            'Unexpected weight gain',
            'Persistent acne & facial hair',
            'Mood swings & low energy',
        ],
    },
    {
        icon: Zap,
        title: 'Dysmenorrhea',
        tagline: 'Eliminate Menstrual Pain Completely',
        image: '/img2.png', // Doctor consulting patient
        gradient: 'from-blue-50 to-indigo-100',
        symptoms: [
            'Severe cramping & back pain',
            'Nausea & headaches',
            'Pain disrupting daily life',
            'Heavy bleeding episodes',
        ],
    },
    {
        icon: Clock,
        title: 'Menstrual Irregularities',
        tagline: 'Achieve Regular, Healthy Cycles',
        image: '/img3.png', // Happy woman doing yoga
        gradient: 'from-green-50 to-emerald-100',
        symptoms: [
            'Heavy or prolonged bleeding',
            'Unpredictable cycle timing',
            'Spotting between periods',
            'Extreme fatigue & weakness',
        ],
    },
    {
        icon: Heart,
        title: 'Premenstrual Syndrome (PMS)',
        tagline: 'Stabilize Mood & Mental Wellbeing',
        image: '/img4.png', // Calm, peaceful woman
        gradient: 'from-purple-50 to-violet-100',
        symptoms: [
            'Intense mood swings & irritability',
            'Breast tenderness & bloating',
            'Food cravings & fatigue',
            'Anxiety & emotional distress',
        ],
    },
    {
        icon: Users,
        title: 'Fertility Support',
        tagline: 'Enhance Your Natural Fertility',
        image: '/img1.png', // Woman with natural glow
        gradient: 'from-orange-50 to-amber-100',
        symptoms: [
            'Difficulty conceiving naturally',
            'Irregular ovulation patterns',
            'Hormonal imbalances',
            'Unexplained infertility concerns',
        ],
    },
    {
        icon: Droplet,
        title: 'Leucorrhea',
        tagline: 'Restore Vaginal Health & Comfort',
        image: '/img2.png', // Doctor consulting patient
        gradient: 'from-teal-50 to-cyan-100',
        symptoms: [
            'Abnormal vaginal discharge',
            'Itching & burning sensations',
            'Unpleasant odor & discomfort',
            'Recurrent infections',
        ],
    },
    {
        icon: Sun,
        title: 'Menopausal Symptoms',
        tagline: 'Navigate Menopause with Confidence',
        image: '/img3.png', // Happy woman doing yoga
        gradient: 'from-yellow-50 to-orange-100',
        symptoms: [
            'Hot flashes & night sweats',
            'Mood changes & irritability',
            'Sleep disturbances & fatigue',
            'Vaginal dryness & discomfort',
        ],
    },
    {
        icon: Award,
        title: 'Breast Health',
        tagline: 'Maintain Optimal Breast Wellness',
        image: '/img4.png', // Calm, peaceful woman
        gradient: 'from-red-50 to-pink-100',
        symptoms: [
            'Breast pain & tenderness',
            'Lumps & discomfort',
            'Hormonal breast changes',
            'Pre-menstrual breast swelling',
        ],
    },
];

export default function ConditionsSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCondition, setSelectedCondition] = useState(null);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const openModalWithCondition = (condition) => {
        setSelectedCondition(condition);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedCondition(null);
    };

    return (
        <>
            <section className="py-12 md:py-16" style={{ background: 'linear-gradient(to bottom, #FFF8F8, #FFFFFF)' }}>
                <div className="container mx-auto px-6">
                    {/* Light Header Section */}
                    <div className="text-center mb-10 md:mb-16">
                        <h2 className="font-headline text-3xl md:text-4xl text-gray-800 mb-4 leading-tight">
                            Conditions We Treat
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-4">
                            Comprehensive care for all women's health concerns
                        </p>
                        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                            Do any of these symptoms sound familiar? You're not alone, and there's a natural solution.
                        </p>
                    </div>

                    {/* Enhanced Condition Cards with Images */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {conditions.map((condition, index) => {
                            const Icon = condition.icon;
                            return (
                                <div key={index} className="condition-card bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-femure-primary/20 group flex flex-col relative">
                                    {/* Creative Image Background */}
                                    <div className={`relative h-32 bg-gradient-to-br ${condition.gradient} overflow-hidden`}>
                                        <div className="absolute inset-0 bg-black/10"></div>
                                        <Image
                                            src={condition.image}
                                            alt={condition.title}
                                            fill
                                            className="object-cover object-center opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                                        />
                                        {/* Floating Icon */}
                                        <div className="absolute top-4 right-4 w-12 h-12 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                            <Icon className="text-femure-primary w-6 h-6" />
                                        </div>
                                        {/* Subtle Pattern Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/5"></div>
                                    </div>

                                    {/* Content Section */}
                                    <div className="p-6 flex flex-col flex-grow">
                                        <h3 className="font-headline text-xl mb-2 text-gray-900 group-hover:text-femure-primary transition-colors duration-300">{condition.title}</h3>
                                        <p className="text-femure-primary font-semibold mb-4 text-sm uppercase tracking-wide">{condition.tagline}</p>
                                        
                                        <ul className="text-gray-600 text-sm space-y-2 mb-6 flex-grow">
                                            {condition.symptoms.map((symptom, i) => (
                                                <li key={i} className="flex items-start">
                                                    <div className="w-1.5 h-1.5 bg-femure-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                                    <span>{symptom}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        
                                        <button 
                                            onClick={() => openModalWithCondition(condition)}
                                            className="w-full bg-femure-primary/10 hover:bg-femure-primary/20 text-femure-primary py-2.5 px-4 rounded-full text-sm font-semibold transition-all duration-300 border border-femure-primary/20 hover:border-femure-primary/40 group-hover:bg-femure-primary group-hover:text-white"
                                        >
                                            Know More
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Enhanced CTA Section */}
                    <div className="text-center mt-16">
                        <div className="bg-gradient-to-r from-femure-primary/5 to-femure-secondary/10 rounded-2xl p-8 max-w-2xl mx-auto">
                            <h3 className="font-headline text-2xl text-femure-primary mb-4">
                                Ready to Start Your Healing Journey?
                            </h3>
                            <p className="text-gray-700 mb-6">
                                Join thousands of women who have found lasting relief through personalized homeopathic care.
                            </p>
                            <button 
                                onClick={openModal}
                                className="bg-femure-primary hover:bg-femure-accent text-white py-4 px-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg font-semibold"
                            >
                                Get Expert Consultation Now
                            </button>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-4">
                                <div className="flex items-center">
                                    <div className="w-5 h-5 rounded-full bg-femure-primary/10 flex items-center justify-center mr-2">
                                        <div className="w-2 h-2 rounded-full bg-femure-primary"></div>
                                    </div>
                                    <span className="text-sm text-gray-600">Personalized treatment plan</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-5 h-5 rounded-full bg-femure-primary/10 flex items-center justify-center mr-2">
                                        <div className="w-2 h-2 rounded-full bg-femure-primary"></div>
                                    </div>
                                    <span className="text-sm text-gray-600">Regular follow-ups</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-5 h-5 rounded-full bg-femure-primary/10 flex items-center justify-center mr-2">
                                        <div className="w-2 h-2 rounded-full bg-femure-primary"></div>
                                    </div>
                                    <span className="text-sm text-gray-600">Ongoing support</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Consultation Modal */}
            <ConsultationModal 
                isOpen={isModalOpen}
                onClose={closeModal}
                selectedCondition={selectedCondition}
            />
        </>
    );
}