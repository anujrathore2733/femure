'use client';

import { useState } from 'react';
import { Phone, Users, Heart, MessageCircle, Calendar, Shield } from 'react-feather';
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
            <section className="py-10 md:py-16 bg-gradient-to-br from-rose-50 via-white to-pink-50">
                <div className="container mx-auto px-6">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="font-headline text-3xl md:text-4xl text-gray-900 mb-4">
                            Your <span className="text-femure-primary">Healing</span> Ecosystem
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            More than medicine. A complete wellness experience designed just for you.
                        </p>
                    </div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {/* Weekly Follow-ups - Available in All Plans */}
                        <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                            <div className="w-14 h-14 rounded-full bg-femure-primary/10 flex items-center justify-center mb-6">
                                <Phone className="w-7 h-7 text-femure-primary" />
                            </div>
                            <h3 className="font-semibold text-xl text-gray-900 mb-4">Weekly Follow-ups</h3>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                                Your doctor checks in every week. Someone who listens, celebrates your wins, and adjusts your plan as you heal.
                            </p>
                            <div className="space-y-3">
                                <div className="flex items-center">
                                    <div className="w-2 h-2 bg-femure-primary rounded-full mr-3"></div>
                                    <span className="text-sm text-gray-600">Someone who actually listens to how you're feeling</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-2 h-2 bg-femure-primary rounded-full mr-3"></div>
                                    <span className="text-sm text-gray-600">Celebrate small wins — every improvement matters</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-2 h-2 bg-femure-primary rounded-full mr-3"></div>
                                    <span className="text-sm text-gray-600">Adjust your plan as your body responds naturally</span>
                                </div>
                            </div>
                            <div className="mt-4 text-xs text-femure-primary font-medium">✓ All Plans</div>
                        </div>

                        {/* Nutritionist Support - Holistic & Total Plans Only */}
                        <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                            <div className="w-14 h-14 rounded-full bg-femure-primary/10 flex items-center justify-center mb-6">
                                <Users className="w-7 h-7 text-femure-primary" />
                            </div>
                            <h3 className="font-semibold text-xl text-gray-900 mb-4">Nutritionist Support</h3>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                                Stop guessing what to eat. Personalized meal plans that work with your body and hormones, not against them.
                            </p>
                            <div className="space-y-3">
                                <div className="flex items-center">
                                    <div className="w-2 h-2 bg-femure-primary rounded-full mr-3"></div>
                                    <span className="text-sm text-gray-600">Meal plans tailored to your condition and preferences</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-2 h-2 bg-femure-primary rounded-full mr-3"></div>
                                    <span className="text-sm text-gray-600">Learn which foods heal you vs. trigger symptoms</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-2 h-2 bg-femure-primary rounded-full mr-3"></div>
                                    <span className="text-sm text-gray-600">No more food guilt — eat with confidence and joy</span>
                                </div>
                            </div>
                            <div className="mt-4 text-xs text-femure-primary font-medium">✓ Holistic & Total Plans</div>
                        </div>

                        {/* Community Access - Total Plan Only */}
                        <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                            <div className="w-14 h-14 rounded-full bg-femure-primary/10 flex items-center justify-center mb-6">
                                <Heart className="w-7 h-7 text-femure-primary" />
                            </div>
                            <h3 className="font-semibold text-xl text-gray-900 mb-4">Community Access</h3>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                                Join 5,000+ women healing together. Share your story, learn from others, celebrate wins — you're not alone.
                            </p>
                            <div className="space-y-3">
                                <div className="flex items-center">
                                    <div className="w-2 h-2 bg-femure-primary rounded-full mr-3"></div>
                                    <span className="text-sm text-gray-600">Connect with women who truly understand your struggle</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-2 h-2 bg-femure-primary rounded-full mr-3"></div>
                                    <span className="text-sm text-gray-600">Share experiences and learn from others' healing stories</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-2 h-2 bg-femure-primary rounded-full mr-3"></div>
                                    <span className="text-sm text-gray-600">Weekly group sessions on healing topics that matter</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-2 h-2 bg-femure-primary rounded-full mr-3"></div>
                                    <span className="text-sm text-gray-600">Celebrate wins together — your success inspires others</span>
                                </div>
                            </div>
                            <div className="mt-4 text-xs text-femure-primary font-medium">✓ Total Health Plan</div>
                        </div>
                    </div>

                    {/* Bottom CTA */}
                    <div className="text-center mt-16">
                        <div className="max-w-lg mx-auto">
                            <h3 className="font-headline text-2xl text-gray-900 mb-4">
                                Ready to bloom into your best self?
                            </h3>
                            <p className="text-gray-600 mb-8">
                                Your transformation begins with a single step. Let's write your healing story together.
                            </p>
                            <button 
                                onClick={openModal}
                                className="bg-femure-primary hover:brightness-90 text-white py-4 px-10 rounded-full shadow-lg hover:shadow-xl hover:shadow-femure-primary/40 transition-all duration-300 font-semibold text-lg"
                            >
                                Begin Your Story
                            </button>
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