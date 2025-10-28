import { Heart, Users, Zap, Shield, Target } from 'react-feather';

export default function WhyChooseFemureSection() {
    return (
        <section className="py-8 md:py-12 bg-gradient-to-br from-rose-50 via-white to-pink-50">
            <div className="container mx-auto px-6">
                {/* Compact Header */}
                <div className="text-center mb-8">
                    <h2 className="font-headline text-2xl md:text-3xl text-gray-900 mb-2">
                        Why Choose <span className="femure-logo text-femure-primary">Femure</span>
                    </h2>
                    <p className="text-sm md:text-base text-gray-600">Science Meets Empathy</p>
                </div>

                {/* Mobile: Compact 2x2 Grid, Desktop: 4 columns */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                    {/* Expert-Led */}
                    <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 md:p-6 text-center shadow-sm border border-rose-100 hover:shadow-md transition-all duration-300">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-femure-primary to-femure-accent flex items-center justify-center mb-3 mx-auto">
                            <Users className="w-5 h-5 md:w-6 md:h-6 text-white" />
                        </div>
                        <h3 className="font-semibold text-sm md:text-lg text-gray-900 mb-1 md:mb-2">Expert-Led</h3>
                        <p className="text-xs md:text-sm text-gray-600 leading-tight">100+ years clinical experience</p>
                    </div>

                    {/* Custom Formulation */}
                    <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 md:p-6 text-center shadow-sm border border-rose-100 hover:shadow-md transition-all duration-300">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-femure-primary to-femure-accent flex items-center justify-center mb-3 mx-auto">
                            <Target className="w-5 h-5 md:w-6 md:h-6 text-white" />
                        </div>
                        <h3 className="font-semibold text-sm md:text-lg text-gray-900 mb-1 md:mb-2">Personalized</h3>
                        <p className="text-xs md:text-sm text-gray-600 leading-tight">Custom medicine for you</p>
                    </div>

                    {/* Follow-ups */}
                    <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 md:p-6 text-center shadow-sm border border-rose-100 hover:shadow-md transition-all duration-300">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-femure-primary to-femure-accent flex items-center justify-center mb-3 mx-auto">
                            <Zap className="w-5 h-5 md:w-6 md:h-6 text-white" />
                        </div>
                        <h3 className="font-semibold text-sm md:text-lg text-gray-900 mb-1 md:mb-2">Continuous Care</h3>
                        <p className="text-xs md:text-sm text-gray-600 leading-tight">Regular follow-ups & tracking</p>
                    </div>

                    {/* Community */}
                    <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 md:p-6 text-center shadow-sm border border-rose-100 hover:shadow-md transition-all duration-300">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-femure-primary to-femure-accent flex items-center justify-center mb-3 mx-auto">
                            <Heart className="w-5 h-5 md:w-6 md:h-6 text-white" />
                        </div>
                        <h3 className="font-semibold text-sm md:text-lg text-gray-900 mb-1 md:mb-2">Community</h3>
                        <p className="text-xs md:text-sm text-gray-600 leading-tight">Support & wellness circles</p>
                    </div>
                </div>

                {/* Compact Bottom CTA */}
                <div className="text-center mt-6 md:mt-8">
                    <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm border border-rose-200">
                        <Shield className="w-4 h-4 text-femure-primary mr-2" />
                        <span className="text-sm font-medium text-gray-700">Trusted by 20,000+ women</span>
                    </div>
                </div>
            </div>
        </section>
    );
}