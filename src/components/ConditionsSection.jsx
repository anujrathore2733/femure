'use client';

import { useState } from 'react';
import { Moon, Activity, Calendar, Cloud, Heart, Droplet, Sun, Award } from 'react-feather';
import ConsultationModal from './ConsultationModal';

const conditions = [
    {
        icon: Moon,
        title: 'PCOD / PCOS',
        tagline: 'Balancing Hormones, Naturally.',
        symptoms: [
            'Irregular periods',
            'Sudden weight gain',
            'Persistent acne or unwanted facial hair',
            'Mood swings and fatigue',
        ],
    },
    {
        icon: Activity,
        title: 'Dysmenorrhea',
        tagline: 'Soothing Pain, Calming Rhythm.',
        symptoms: [
            'Crippling cramps',
            'Severe lower back pain',
            'Headaches or nausea',
            'Pain that disrupts your daily routine',
        ],
    },
    {
        icon: Calendar,
        title: 'Menstrual Complaints',
        tagline: 'Regular, Comfortable, and in Harmony.',
        symptoms: [
            'Heavy or prolonged bleeding',
            'Unpredictable or missed periods',
            'Spotting between cycles',
            'Extreme fatigue during your period',
        ],
    },
    {
        icon: Cloud,
        title: 'Premenstrual Syndrome (PMS)',
        tagline: 'Stabilizing Mood and Mind.',
        symptoms: [
            'Intense irritability or mood swings',
            'Persistent fatigue or breast tenderness',
            'Bloating and food cravings',
            'Anxiety before your cycle',
        ],
    },
    {
        icon: Heart,
        title: 'Infertility / Sterility',
        tagline: 'Nurturing Your Journey to Motherhood.',
        symptoms: [
            'Difficulty conceiving',
            'Irregular ovulation',
            'Hormonal imbalances',
            'Support for unexplained infertility',
        ],
    },
    {
        icon: Droplet,
        title: 'Leucorrhea',
        tagline: "Restoring Your Body's Comfort.",
        symptoms: [
            'Persistent or unusual vaginal discharge',
            'Itching or irritation',
            'Discomfort and inflammation',
            'Foul odor',
        ],
    },
    {
        icon: Sun,
        title: 'Menopausal Issues',
        tagline: 'Embracing a New Phase, Gracefully.',
        symptoms: [
            'Hot flashes and night sweats',
            'Mood changes and irritability',
            'Trouble sleeping',
            'Vaginal dryness or thinning hair',
        ],
    },
    {
        icon: Award,
        title: 'Breast Complaints',
        tagline: 'Gentle Care for Your Comfort.',
        symptoms: [
            'Tenderness or pain',
            'Cysts or fibroadenomas',
            'Swelling or fullness',
            'Lumps or discomfort before your period',
        ],
    },
];

export default function ConditionsSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <section className="py-16" style={{ background: 'linear-gradient(to bottom, #FFF8F8, #FFFFFF)' }}>
                <div className="container mx-auto px-6">
                    <h2 className="font-headline text-3xl text-center mb-4">Reclaim Your Wellness. Find Relief.</h2>
                    <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">We provide gentle, personalized care for a range of women's health concerns, addressing the root cause. Do any of these symptoms sound familiar?</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {conditions.map((condition, index) => {
                            const Icon = condition.icon;
                            return (
                                <div key={index} className="condition-card bg-white rounded-xl p-6 shadow-sm transition duration-300">
                                    <div className="w-12 h-12 rounded-full bg-femure-secondary flex items-center justify-center mb-4">
                                        <Icon className="text-femure-primary" />
                                    </div>
                                    <h3 className="font-headline text-xl mb-2">{condition.title}</h3>
                                    <p className="text-femure-accent mb-3">{condition.tagline}</p>
                                    <ul className="text-gray-600 text-sm list-disc pl-5">
                                        {condition.symptoms.map((symptom, i) => (
                                            <li key={i}>{symptom}</li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                    <div className="text-center mt-12">
                        <button 
                            onClick={openModal}
                            className="bg-femure-primary hover:bg-femure-accent text-white py-3 px-8 rounded-full shadow-md transition duration-300"
                        >
                            Talk to a Doctor About My Condition
                        </button>
                    </div>
                </div>
            </section>

            {/* Consultation Modal */}
            <ConsultationModal 
                isOpen={isModalOpen}
                onClose={closeModal}
                selectedDoctor={null}
            />
        </>
    );
}