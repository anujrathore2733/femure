'use client';

import { useState } from 'react';
import { Star, Video, Phone, Package, Users, Heart, CheckCircle, ArrowDown } from 'react-feather';
import ConsultationModal from './ConsultationModal';

const plans = [
    {
        id: 'essential',
        name: 'Essential Care Plan',
        icon: Star,
        iconColor: 'text-yellow-500',
        bgGradient: 'from-yellow-50 to-orange-50',
        borderColor: 'border-yellow-200',
        price: '₹2,250',
        originalPrice: '₹3,500',
        discount: '35% OFF',
        duration: '1 Month',
        features: [
            { icon: Phone, text: 'Audio consultation with doctor', included: true },
            { icon: Package, text: 'Personalized homeopathic medicine delivered', included: true },
            { icon: Phone, text: 'Weekly follow-up sessions', included: true },
            { icon: Video, text: 'Video consultation', included: false },
            { icon: Users, text: 'Nutritionist support', included: false },
            { icon: Heart, text: 'Community access', included: false }
        ],
        popular: false,
        description: 'Perfect for getting started with personalized homeopathic care'
    },
    {
        id: 'holistic',
        name: 'Holistic Wellness Plan',
        icon: Heart,
        iconColor: 'text-pink-500',
        bgGradient: 'from-pink-50 to-rose-50',
        borderColor: 'border-pink-200',
        price: '₹3,000',
        originalPrice: '₹4,500',
        discount: '33% OFF',
        duration: '1 Month',
        features: [
            { icon: Video, text: 'Video consultation with doctor', included: true },
            { icon: Package, text: 'Medicine delivery', included: true },
            { icon: Phone, text: 'Weekly follow-ups', included: true },
            { icon: Users, text: 'One nutritionist session', included: true },
            { icon: Heart, text: 'Community access', included: false }
        ],
        popular: true,
        description: 'Comprehensive care with nutrition guidance for complete wellness'
    },
    {
        id: 'total',
        name: 'Total Health Program',
        icon: Star,
        iconColor: 'text-green-500',
        bgGradient: 'from-green-50 to-emerald-50',
        borderColor: 'border-green-200',
        price: '₹4,000',
        originalPrice: '₹6,000',
        discount: '33% OFF',
        duration: '1 Month',
        features: [
            { icon: Video, text: 'Video consultation', included: true },
            { icon: Package, text: 'Medicine delivery', included: true },
            { icon: Phone, text: 'Weekly follow-ups', included: true },
            { icon: Users, text: 'Ongoing nutritionist support', included: true },
            { icon: Heart, text: 'Exclusive community access', included: true }
        ],
        popular: false,
        description: 'Complete wellness journey with ongoing support and community'
    }
];

export default function PricingSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState(null);

    const openModal = (plan) => {
        setSelectedPlan(plan);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedPlan(null);
    };

    return (
        <>
            <section className="py-12 md:py-16 bg-gradient-to-br from-gray-50 via-white to-rose-50">
                <div className="container mx-auto px-6">

                    {/* Minimal Header */}
                    <div className="text-center mb-16">
                        <div className="inline-block mb-6">
                            <div className="w-12 h-px bg-femure-primary mx-auto mb-4"></div>
                            <h2 className="text-3xl md:text-4xl font-light text-gray-900 tracking-tight">
                                Choose Your <span className="text-femure-primary font-normal">Path</span>
                            </h2>
                        </div>
                        <p className="text-gray-500 max-w-lg mx-auto leading-relaxed">
                            Three carefully crafted plans for your wellness journey
                        </p>
                    </div>

                    {/* Minimal Premium Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {plans.map((plan, index) => {
                            const Icon = plan.icon;
                            return (
                                <div 
                                    key={plan.id}
                                    className={`relative group transition-all duration-700 ${
                                        plan.popular ? 'md:scale-105' : ''
                                    }`}
                                >
                                    {/* Popular Badge - Minimal */}
                                    {plan.popular && (
                                        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 z-20">
                                            <div className="bg-femure-primary text-white px-3 py-1 text-xs font-medium tracking-wide">
                                                POPULAR
                                            </div>
                                        </div>
                                    )}

                                    {/* Card */}
                                    <div className={`border transition-all duration-500 rounded-2xl ${
                                        plan.id === 'essential'
                                            ? 'bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200 shadow-xl'
                                            : plan.id === 'holistic'
                                                ? 'bg-gradient-to-br from-femure-primary/5 to-femure-secondary/10 border-femure-primary shadow-2xl'
                                                : plan.id === 'total'
                                                    ? 'bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 shadow-xl'
                                                    : 'bg-white border-gray-200 hover:border-femure-primary/50 shadow-lg hover:shadow-xl'
                                    }`}>
                                        {/* Header - Ultra Minimal */}
                                        <div className="p-8 pb-6">
                                            <div className="text-center">
                                                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                                                    <Icon className={`w-6 h-6 ${plan.iconColor}`} />
                                                </div>
                                                <h3 className="text-lg font-medium text-gray-900 mb-2 tracking-wide">{plan.name}</h3>
                                                <p className="text-sm text-gray-500 mb-6 hidden md:block">{plan.description}</p>
                                                
                                                {/* Price - Minimal */}
                                                <div className="mb-6">
                                                    <div className="flex items-center justify-center gap-3 mb-2">
                                                        <span className="text-sm text-gray-400 line-through">{plan.originalPrice}</span>
                                                        <span className="bg-femure-primary text-white text-xs px-2 py-0.5 font-medium">
                                                            {plan.discount}
                                                        </span>
                                                    </div>
                                                    <div className="text-3xl font-light text-femure-primary mb-1">{plan.price}</div>
                                                    <div className="text-xs text-gray-400 uppercase tracking-wider">{plan.duration}</div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Features - Minimal */}
                                        <div className="px-8 pb-8">
                                            <div className="space-y-3 mb-8">
                                                {plan.features.map((feature, featureIndex) => {
                                                    const FeatureIcon = feature.icon;
                                                    return (
                                                        <div key={featureIndex} className="flex items-center">
                                                            <div className={`w-4 h-4 rounded-full mr-3 flex items-center justify-center ${
                                                                feature.included 
                                                                    ? 'bg-femure-primary' 
                                                                    : 'bg-gray-200'
                                                            }`}>
                                                                {feature.included ? (
                                                                    <CheckCircle className="w-2.5 h-2.5 text-white" />
                                                                ) : (
                                                                    <div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
                                                                )}
                                                            </div>
                                                            <FeatureIcon className={`w-4 h-4 mr-3 ${
                                                                feature.included ? 'text-femure-primary' : 'text-gray-400'
                                                            }`} />
                                                            <span className={`text-sm ${
                                                                feature.included ? 'text-gray-700' : 'text-gray-400'
                                                            }`}>
                                                                {feature.text}
                                                            </span>
                                                        </div>
                                                    );
                                                })}
                                            </div>

                                            {/* CTA - Minimal */}
                                            <button
                                                onClick={() => openModal(plan)}
                                                className={`w-full py-3 px-4 text-sm font-medium transition-all duration-300 ${
                                                    plan.popular
                                                        ? 'bg-femure-primary hover:bg-femure-accent text-white'
                                                        : 'bg-gray-50 hover:bg-femure-primary hover:text-white text-gray-700 border border-gray-200 hover:border-femure-primary'
                                                }`}
                                            >
                                                {plan.popular ? 'Start My Healing Journey' : 'Begin My Wellness'}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Minimal Bottom CTA */}
                    <div className="text-center mt-16">
                        <div className="max-w-md mx-auto">
                            <p className="text-gray-500 text-sm mb-6">
                                Need guidance? Our experts are here to help you choose.
                            </p>
                            <button
                                onClick={() => openModal(null)}
                                className="text-femure-primary hover:text-femure-accent text-sm font-medium tracking-wide uppercase transition-colors duration-300"
                            >
                                Get Consultation →
                            </button>
                        </div>
                    </div>

                </div>
            </section>

            {/* Consultation Modal */}
            <ConsultationModal 
                isOpen={isModalOpen}
                onClose={closeModal}
                selectedPlan={selectedPlan}
            />
        </>
    );
}
