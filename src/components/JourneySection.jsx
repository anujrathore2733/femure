'use client';

import { useState } from 'react';
import { PhoneCall, Package, TrendingUp, Users, Heart, Shield, ArrowRight } from 'react-feather';
import ConsultationModal from './ConsultationModal';

export default function JourneySection() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    const journeySteps = [
        {
            icon: PhoneCall,
            title: "Get Consultation",
            description: "Start Your Journey",
            detail: "Share your story with certified homeopaths in a personalized 30-minute discovery call"
        },
        {
            icon: Package,
            title: "Personalized Medicine Delivered",
            description: "Tailored For You",
            detail: "Custom remedies designed for your unique constitution, delivered to your doorstep"
        },
        {
            icon: TrendingUp,
            title: "Track Progress",
            description: "Guided Healing",
            detail: "Regular follow-ups ensure your treatment evolves with your healing journey"
        },
        {
            icon: Users,
            title: "Join Community",
            description: "Thrive Together",
            detail: "Connect with 5,000+ women sharing stories, support, and celebrating wellness"
        }
    ];

    return (
        <>
        <section className="py-16 md:py-24 bg-gradient-to-b from-white via-rose-50/30 to-white">
            <div className="container mx-auto px-6 max-w-6xl">
                {/* Premium Header */}
                <div className="text-center mb-12 md:mb-20">
                    <div className="inline-flex items-center bg-gradient-to-r from-femure-primary/10 to-femure-secondary/10 rounded-full px-5 py-2.5 mb-6 border border-femure-primary/20 shadow-sm">
                        <Heart className="w-4 h-4 text-femure-primary mr-2" />
                        <span className="text-sm font-semibold text-femure-primary tracking-wide">Your Healing Journey</span>
                    </div>
                    <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-5 leading-tight">
                        Your <span className="femure-logo text-femure-primary">Femure</span> Journey
                    </h2>
                    <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
                        A simple, proven path to <span className="text-femure-primary font-semibold">lasting healing</span> — designed uniquely for you
                    </p>
                </div>

                {/* Elegant Journey Flow */}
                <div className="mb-16">
                    {/* Desktop: Premium Flow Design */}
                    <div className="hidden md:block">
                        <div className="relative max-w-5xl mx-auto">
                            {/* Journey Steps with Elegant Connectors */}
                            <div className="relative grid grid-cols-4 gap-4">
                                {journeySteps.map((step, index) => {
                                    const Icon = step.icon;
                                    const isLast = index === journeySteps.length - 1;
                                    
                                    return (
                                        <div key={index} className="relative">
                                            {/* Premium Elegant Flow Connector */}
                                            {!isLast && (
                                                <div className="absolute top-14 left-full w-full flex items-center justify-center z-0 px-2" style={{width: 'calc(100% + 1rem)'}}>
                                                    {/* Elegant decorative dots */}
                                                    <div className="flex items-center gap-1.5">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-femure-primary/30"></div>
                                                        <div className="w-2 h-2 rounded-full bg-femure-primary/50 border border-femure-primary/40"></div>
                                                        <div className="w-1.5 h-1.5 rounded-full bg-femure-primary/30"></div>
                                                    </div>
                                                </div>
                                            )}
                                            
                                            <div className="relative group">
                                                {/* Premium Step Circle */}
                                                <div className="relative w-32 h-32 mx-auto mb-6">
                                                    {/* Outer glow ring */}
                                                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-femure-primary/10 to-femure-secondary/10 blur-xl group-hover:blur-2xl transition-all duration-300 opacity-50 group-hover:opacity-70"></div>
                                                    
                                                    <div className="relative w-full h-full rounded-full bg-gradient-to-br from-white via-femure-primary/3 to-white border border-femure-primary/20 shadow-2xl shadow-femure-primary/10 relative overflow-hidden group-hover:border-femure-primary/50 group-hover:shadow-2xl group-hover:shadow-femure-primary/20 transition-all duration-300">
                                                        {/* Elegant multi-layer gradient overlay */}
                                                        <div className="absolute inset-0 bg-gradient-to-br from-femure-primary/8 via-transparent to-femure-primary/5"></div>
                                                        <div className="absolute inset-[2px] rounded-full bg-gradient-to-t from-white/50 to-transparent"></div>
                                                        
                                                        {/* Premium Icon Container */}
                                                        <div className="absolute inset-0 flex items-center justify-center z-10">
                                                            <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-femure-primary/20 via-femure-primary/10 to-femure-primary/5 flex items-center justify-center shadow-lg shadow-femure-primary/10 border border-femure-primary/15 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-femure-primary/20 transition-all duration-300">
                                                                {/* Inner glow */}
                                                                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/40 to-transparent"></div>
                                                                <Icon className="relative w-7 h-7 text-femure-primary group-hover:scale-110 transition-transform duration-300" strokeWidth={3} fill="none" />
                                                            </div>
                                                        </div>
                                                        
                                                        {/* Premium Step Number Badge - Prominent for Flow */}
                                                        <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-gradient-to-br from-femure-primary to-femure-secondary text-white flex items-center justify-center text-sm font-bold shadow-xl shadow-femure-primary/50 z-20 ring-3 ring-white group-hover:ring-femure-primary/30 group-hover:scale-110 transition-all duration-300">
                                                            <span className="drop-shadow-sm">{index + 1}</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Premium Step Content */}
                                                <div className="text-center">
                                                    <h3 className="font-headline text-lg font-bold mb-2 text-gray-900 group-hover:text-femure-primary transition-colors duration-300 leading-tight">
                                                        {step.title}
                                                    </h3>
                                                    <p className="text-xs text-femure-primary font-semibold mb-2.5 tracking-wider uppercase leading-tight">{step.description}</p>
                                                    <p className="text-sm text-gray-600 leading-relaxed px-1">{step.detail}</p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Mobile: Elegant Vertical Flow */}
                    <div className="md:hidden">
                        <div className="relative max-w-sm mx-auto">
                            <div className="space-y-12">
                                {journeySteps.map((step, index) => {
                                    const Icon = step.icon;
                                    const isLast = index === journeySteps.length - 1;
                                    
                                    return (
                                        <div key={index} className="relative">
                                            {/* Premium Minimal Vertical Connector */}
                                            {!isLast && (
                                                <div className="absolute left-8 top-20 bottom-0 flex flex-col items-center z-0">
                                                    {/* Clean minimal vertical line */}
                                                    <div className="w-0.5 h-full bg-gradient-to-b from-femure-primary/20 via-femure-primary/30 to-femure-primary/20"></div>
                                                    {/* Subtle center dot */}
                                                    <div className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-femure-primary/50"></div>
                                                </div>
                                            )}
                                            
                                            <div className="flex items-start space-x-5 relative group">
                                                {/* Premium Step Circle */}
                                                <div className="relative w-20 h-20 flex-shrink-0 z-10">
                                                    {/* Outer glow */}
                                                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-femure-primary/10 to-femure-secondary/10 blur-md group-hover:blur-lg transition-all duration-300 opacity-50 group-hover:opacity-70"></div>
                                                    
                                                    <div className="relative w-full h-full rounded-full bg-gradient-to-br from-white via-femure-primary/3 to-white border border-femure-primary/20 shadow-xl shadow-femure-primary/10 relative overflow-hidden group-hover:border-femure-primary/50 group-hover:shadow-2xl group-hover:shadow-femure-primary/20 transition-all duration-300">
                                                        {/* Elegant multi-layer gradient overlay */}
                                                        <div className="absolute inset-0 bg-gradient-to-br from-femure-primary/8 via-transparent to-femure-primary/5"></div>
                                                        <div className="absolute inset-[2px] rounded-full bg-gradient-to-t from-white/50 to-transparent"></div>
                                                        
                                                        {/* Premium Icon Container */}
                                                        <div className="absolute inset-0 flex items-center justify-center z-10">
                                                            <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-femure-primary/20 via-femure-primary/10 to-femure-primary/5 flex items-center justify-center shadow-lg shadow-femure-primary/10 border border-femure-primary/15 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-femure-primary/20 transition-all duration-300">
                                                                {/* Inner glow */}
                                                                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/40 to-transparent"></div>
                                                                <Icon className="relative w-6 h-6 text-femure-primary group-hover:scale-110 transition-transform duration-300" strokeWidth={3} fill="none" />
                                                            </div>
                                                        </div>
                                                        
                                                        {/* Premium Step Number Badge - Prominent for Flow */}
                                                        <div className="absolute -top-2.5 -right-2.5 w-8 h-8 rounded-full bg-gradient-to-br from-femure-primary to-femure-secondary text-white flex items-center justify-center text-xs font-bold shadow-xl shadow-femure-primary/50 z-20 ring-3 ring-white group-hover:ring-femure-primary/30 group-hover:scale-110 transition-all duration-300">
                                                            <span className="drop-shadow-sm">{index + 1}</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Premium Step Content */}
                                                <div className="flex-1 pt-1">
                                                    <h3 className="font-headline text-lg font-bold mb-1.5 text-gray-900 group-hover:text-femure-primary transition-colors duration-300 leading-tight">
                                                        {step.title}
                                                    </h3>
                                                    <p className="text-xs text-femure-primary font-semibold mb-1.5 tracking-wider uppercase leading-tight">{step.description}</p>
                                                    <p className="text-sm text-gray-600 leading-relaxed">{step.detail}</p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
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
        />
    </>
    );
}