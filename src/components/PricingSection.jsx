'use client';

import { useState } from 'react';
import { Star, Video, Phone, Package, Users, Heart, CheckCircle, ArrowDown, Tag } from 'react-feather';
import ConsultationModal from './ConsultationModal';

const plans = [
    {
        id: 'essential',
        name: 'Essential Care Plan',
        icon: Star,
        iconColor: 'text-yellow-500',
        bgGradient: 'from-yellow-50 to-orange-50',
        borderColor: 'border-yellow-200',
        price: '₹2,500',
        originalPrice: '₹3,500',
        discount: '29% OFF',
        duration: '1 Month',
        features: [
            { icon: Phone, text: 'Audio consultation with doctor', included: true },
            { icon: Package, text: 'Personalized homeopathic medicine delivered', included: true },
            { icon: Phone, text: 'Weekly follow-ups', included: true },
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
        price: '₹3,500',
        originalPrice: '₹4,500',
        discount: '22% OFF',
        duration: '1 Month',
        features: [
            { icon: Video, text: 'Video consultation with doctor', included: true },
            { icon: Package, text: 'Personalized homeopathic medicine delivered', included: true },
            { icon: Phone, text: 'Weekly follow-ups', included: true },
            { icon: Users, text: 'One nutritionist session', included: true },
            { icon: Heart, text: 'Community access', included: false }
        ],
        popular: true,
        description: 'Comprehensive care with nutrition guidance for complete wellness'
    },
    {
        id: 'total',
        name: 'Total Harmony',
        icon: Star,
        iconColor: 'text-green-500',
        bgGradient: 'from-green-50 to-emerald-50',
        borderColor: 'border-green-200',
        price: '₹5,000',
        originalPrice: '₹6,000',
        discount: '17% OFF',
        duration: '1 Month',
        features: [
            { icon: Video, text: 'Video consultation with doctor', included: true },
            { icon: Package, text: 'Personalized homeopathic medicine delivered', included: true },
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
    const [expandedPlans, setExpandedPlans] = useState(new Set());
    const [activeMobilePlanId, setActiveMobilePlanId] = useState(plans.find(p => p.popular)?.id || plans[1]?.id || plans[0]?.id);

    const openModal = (plan) => {
        setSelectedPlan(plan);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedPlan(null);
    };

    const toggleExpanded = (planId) => {
        setExpandedPlans((prev) => {
            const next = new Set(prev);
            if (next.has(planId)) {
                next.delete(planId);
            } else {
                next.add(planId);
            }
            return next;
        });
    };

    const numeric = (moneyStr) => parseInt(String(moneyStr).replace(/[^0-9]/g, ''), 10) || 0;
    const getSavingsAmount = (plan) => {
        const orig = numeric(plan.originalPrice);
        const price = numeric(plan.price);
        const diff = Math.max(orig - price, 0);
        return diff;
    };

    const formatINR = (amount) => `₹${amount.toLocaleString('en-IN')}`;

    const getDiscountPercent = (discountStr) => {
        if (!discountStr) return null;
        const match = String(discountStr).match(/(\d+)%/);
        return match ? match[1] : null;
    };

    const getPlanTheme = (planId) => {
        switch (planId) {
            case 'essential':
                return {
                    badgeActive: 'from-amber-500 to-orange-500',
                    badgeInactive: 'from-amber-400 to-orange-400',
                    tabActive: 'from-amber-500 to-orange-500',
                };
            case 'holistic':
                return {
                    badgeActive: 'from-rose-500 to-pink-500',
                    badgeInactive: 'from-rose-400 to-pink-400',
                    tabActive: 'from-rose-500 to-pink-500',
                };
            case 'total':
                return {
                    badgeActive: 'from-emerald-500 to-green-500',
                    badgeInactive: 'from-emerald-400 to-green-400',
                    tabActive: 'from-emerald-500 to-green-500',
                };
            default:
                return {
                    badgeActive: 'from-femure-primary to-femure-secondary',
                    badgeInactive: 'from-femure-primary/80 to-femure-secondary/80',
                    tabActive: 'from-femure-primary to-femure-secondary',
                };
        }
    };

    const renderPlanCard = (plan) => {
        const Icon = plan.icon;
        const isExpanded = expandedPlans.has(plan.id);
        const visibleFeatures = plan.features; // always show all features per latest request
        const savings = getSavingsAmount(plan);
        return (
            <div 
                key={plan.id}
                className={`relative group transition-all duration-700 flex flex-col ${
                    plan.popular ? 'md:scale-105' : ''
                }`}
            >
                {/* Popular Badge - Top Right Corner */}
                {plan.popular && (
                    <div className="absolute -top-2 -right-2 z-20">
                        <div className="bg-femure-primary text-white px-3 py-1 text-xs font-medium tracking-wide transform rotate-12 shadow-lg">
                            POPULAR
                        </div>
                    </div>
                )}

                {/* Round Percent Badge - Top Left */}
                {getDiscountPercent(plan.discount) && (
                    <div className="absolute -top-2 -left-2 z-20">
                        <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-emerald-500 text-white shadow flex items-center justify-center text-[10px] md:text-xs font-extrabold ring-1 ring-black/5">
                            {getDiscountPercent(plan.discount)}%
                        </div>
                    </div>
                )}

                {/* Card - Fixed Height */}
                <div className={`border transition-all duration-500 rounded-2xl flex flex-col h-full ${
                    plan.id === 'essential'
                        ? 'bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200 shadow-xl'
                        : plan.id === 'holistic'
                            ? 'bg-gradient-to-br from-femure-primary/5 to-femure-secondary/10 border-femure-primary shadow-2xl'
                            : plan.id === 'total'
                                ? 'bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 shadow-xl'
                                : 'bg-white border-gray-200 hover:border-femure-primary/50 shadow-lg hover:shadow-xl'
                }`}>
                    {/* Header - Ultra Minimal */}
                    <div className="p-5 md:p-8 pb-4 md:pb-6 flex-shrink-0">
                        <div className="text-center">
                            <div className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 md:mb-4 flex items-center justify-center">
                                <Icon className={`w-5 h-5 md:w-6 md:h-6 ${plan.iconColor}`} />
                            </div>
                            <h3 className="text-base md:text-lg font-medium text-gray-900 mb-1 md:mb-2 tracking-wide">{plan.name}</h3>
                            <p className="text-xs md:text-sm text-gray-500 mb-4 md:mb-6 hidden md:block min-h-[2.5rem]">{plan.description}</p>
                            {/* Price - Minimal */}
                            <div className="mb-4 md:mb-6">
                                <div className="flex items-center justify-center gap-2 md:gap-3 mb-1 md:mb-2">
                                    <span className="text-xs md:text-sm text-gray-400 line-through">{plan.originalPrice}</span>
                                    <span className="bg-femure-primary text-white text-[10px] md:text-xs px-1.5 md:px-2 py-0.5 font-medium rounded">
                                        {plan.discount}
                                    </span>
                                </div>
                                <div className="text-2xl md:text-3xl font-light text-femure-primary mb-0.5 md:mb-1">{plan.price}</div>
                                <div className="text-[10px] md:text-xs text-gray-400 uppercase tracking-wider">{plan.duration}</div>
                                {savings > 0 && (
                                    <div className="mt-2">
                                        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 text-[10px] md:text-xs font-medium">
                                            Save {formatINR(savings)}
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Features - Minimal - Flexible Height */}
                    <div className="px-5 md:px-8 pb-5 md:pb-8 flex-grow flex flex-col">
                        <div className="space-y-2.5 md:space-y-3 mb-4 md:mb-8 flex-grow">
                            {visibleFeatures.map((feature, featureIndex) => {
                                const FeatureIcon = feature.icon;
                                return (
                                    <div key={featureIndex} className="flex items-center">
                                        <div className={`w-3.5 h-3.5 md:w-4 md:h-4 rounded-full mr-2.5 md:mr-3 flex items-center justify-center flex-shrink-0 ${
                                            feature.included 
                                                ? 'bg-femure-primary' 
                                                : 'bg-gray-200'
                                        }`}>
                                            {feature.included ? (
                                                <CheckCircle className="w-2 h-2 md:w-2.5 md:h-2.5 text-white" />
                                            ) : (
                                                <div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
                                            )}
                                        </div>
                                        <FeatureIcon className={`w-3.5 h-3.5 md:w-4 md:h-4 mr-2.5 md:mr-3 flex-shrink-0 ${
                                            feature.included ? 'text-femure-primary' : 'text-gray-400'
                                        }`} />
                                        <span className={`text-xs md:text-sm ${
                                            feature.included ? 'text-gray-700' : 'text-gray-400'
                                        }`}>
                                            {feature.text}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                        {/* CTA - Minimal - Fixed at Bottom */}
                        <button
                            onClick={() => openModal(plan)}
                            className="w-full py-2.5 md:py-3 px-4 text-sm font-medium transition-all duration-300 mt-auto rounded-full bg-femure-primary hover:bg-femure-accent text-white shadow-lg hover:shadow-xl"
                        >
                            Start Your Journey
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <>
            <section className="py-8 md:py-16 bg-gradient-to-br from-gray-50 via-white to-rose-50">
                <div className="container mx-auto px-6">

                    {/* Minimal Header */}
                    <div className="text-center mb-8 md:mb-16">
                        <div className="inline-block mb-6">
                            <div className="w-10 md:w-12 h-px bg-femure-primary mx-auto mb-3 md:mb-4"></div>
                            <h2 className="text-2xl md:text-4xl font-light text-gray-900 tracking-tight">
                                Choose Your <span className="text-femure-primary font-normal">Path</span>
                            </h2>
                        </div>
                        <p className="text-gray-500 max-w-lg mx-auto leading-relaxed text-sm md:text-base">
                            Three carefully crafted plans for your wellness journey
                        </p>
                    </div>

                    {/* Mobile: Tabbed Switcher */}
                    <div className="md:hidden max-w-md mx-auto">
                        <div className="grid grid-cols-3 gap-1.5 px-1.5 py-1.5 bg-white/80 border border-rose-100 rounded-full mb-3 shadow-sm relative ring-1 ring-white/40 backdrop-blur">
                            {plans.map((p) => {
                                const shortName = p.id === 'total' ? p.name : p.name.split(' ')[0];
                                const percent = getDiscountPercent(p.discount);
                                const theme = getPlanTheme(p.id);
                                return (
                                    <button
                                        key={p.id}
                                        onClick={() => setActiveMobilePlanId(p.id)}
                                        className={`relative w-full flex items-center justify-center gap-1 text-[11px] py-2 px-2 rounded-full transition-all font-semibold whitespace-normal leading-tight text-center shadow-sm ${
                                            activeMobilePlanId === p.id
                                                ? `bg-gradient-to-r ${theme.tabActive} text-white shadow-md`
                                                : 'bg-white text-femure-primary/90 hover:bg-rose-50'
                                        }`}
                                    >
                                        <span className="break-words">{shortName}</span>
                                        {/* No discount in mobile tabs for cleaner look */}
                                    </button>
                                );
                            })}
                        </div>

                        {plans.filter((p) => p.id === activeMobilePlanId).map((p) => renderPlanCard(p))}
                    </div>

                    {/* Desktop: 3-column grid */}
                    <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {plans.map((plan) => renderPlanCard(plan))}
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
