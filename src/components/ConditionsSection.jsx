'use client';

import { useState } from 'react';
import { Shield, Zap, Clock, Heart, Users, Droplet, Sun, Award, CheckCircle, Star } from 'react-feather';
import ConsultationModal from './ConsultationModal';

const conditions = [
    {
        icon: Shield,
        title: 'PCOD / PCOS',
        tagline: 'Restore Hormonal Balance Naturally',
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
            <section className="py-20" style={{ background: 'linear-gradient(to bottom, #FFF8F8, #FFFFFF)' }}>
                <div className="container mx-auto px-6">
                    {/* Enhanced Header Section */}
                    <div className="text-center mb-16">
                        <div className="flex items-center justify-center mb-6">
                            <CheckCircle className="w-8 h-8 text-femure-primary mr-3" />
                            <Star className="w-6 h-6 text-femure-accent mr-3" />
                            <CheckCircle className="w-8 h-8 text-femure-primary" />
                        </div>
                        <h2 className="font-headline text-4xl md:text-5xl text-femure-primary mb-6 leading-tight">
                            Proven Results. Lasting Relief.
                        </h2>
                        <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-4 leading-relaxed">
                            <span className="font-semibold text-gray-900">20,000+ women</span> have found relief through our personalized homeopathic approach. 
                            Our doctors have successfully treated these conditions with <span className="font-semibold text-femure-primary">95% patient satisfaction</span>.
                        </p>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Do any of these symptoms sound familiar? You're not alone, and there's a natural solution.
                        </p>
                    </div>

                    {/* Enhanced Condition Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {conditions.map((condition, index) => {
                            const Icon = condition.icon;
                            return (
                                <div key={index} className="condition-card bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-femure-primary/20 group flex flex-col">
                                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-femure-primary/10 to-femure-secondary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <Icon className="text-femure-primary w-8 h-8" />
                                    </div>
                                    <h3 className="font-headline text-xl mb-3 text-gray-900">{condition.title}</h3>
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
                                        className="w-full bg-femure-primary/10 hover:bg-femure-primary/20 text-femure-primary py-2.5 px-4 rounded-full text-sm font-semibold transition-all duration-300 border border-femure-primary/20 hover:border-femure-primary/40"
                                    >
                                        Know More
                                    </button>
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
                            <p className="text-sm text-gray-600 mt-4">
                                ✓ Free initial assessment ✓ Personalized treatment plan ✓ Ongoing support
                            </p>
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