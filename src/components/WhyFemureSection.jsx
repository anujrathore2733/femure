import { Shield, Heart, Zap, Target } from 'react-feather';

export default function WhyFemureSection() {
    return (
        <section className="py-8 md:py-12" style={{ background: 'linear-gradient(to bottom, #FFF8F8, #FFFFFF)' }}>
            <div className="container mx-auto px-6">
                {/* Compact Header */}
                <div className="text-center mb-8">
                    <h2 className="font-headline text-3xl md:text-4xl text-femure-primary mb-3">The <span className="text-gray-900">Femure</span> Difference</h2>
                    <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                        Two philosophies, one choice. Discover how homeopathy empowers your body's natural healing intelligence.
                    </p>
                </div>

                {/* Mobile: Stacked, Desktop: Side by side */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
                    {/* Allopathic Approach */}
                    <div className="bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-16 h-16 bg-gray-100 rounded-bl-full"></div>
                        <div className="text-center relative z-10">
                            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4 md:mb-6 mx-auto">
                                <Zap className="text-gray-500 w-6 h-6 md:w-8 md:h-8" />
                            </div>
                            <h3 className="font-headline text-xl md:text-2xl text-center mb-4 text-gray-800">Allopathic Approach</h3>
                            <div className="space-y-3 text-gray-600">
                                <div className="flex items-start">
                                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <p className="text-sm md:text-base leading-relaxed">Focuses on <span className="font-semibold">suppressing symptoms</span> with chemicals</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <p className="text-sm md:text-base leading-relaxed">Treats the <span className="font-semibold">disease, not the person</span></p>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <p className="text-sm md:text-base leading-relaxed">Can create <span className="font-semibold">dependency</span> and mask imbalances</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <p className="text-sm md:text-base leading-relaxed">May require <span className="font-semibold">lifelong medication</span></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Homeopathic Approach */}
                    <div className="bg-gradient-to-br from-femure-primary/5 to-femure-secondary/10 p-6 md:p-8 rounded-xl shadow-lg border-2 border-femure-primary/20 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-20 h-20 bg-femure-primary/10 rounded-bl-full"></div>
                        <div className="absolute bottom-0 left-0 w-12 h-12 bg-femure-secondary/20 rounded-tr-full"></div>
                        <div className="text-center relative z-10">
                            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-femure-primary flex items-center justify-center mb-4 md:mb-6 mx-auto shadow-lg">
                                <Shield className="text-white w-6 h-6 md:w-8 md:h-8" />
                            </div>
                            <h3 className="font-headline text-xl md:text-2xl text-center mb-4 text-femure-primary">Femure's Homeopathy</h3>
                            <div className="space-y-3 text-gray-700">
                                <div className="flex items-start">
                                    <div className="w-2 h-2 bg-femure-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <p className="text-sm md:text-base leading-relaxed"><span className="font-semibold text-femure-primary">Empowers your immune system</span> to fight root causes</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-2 h-2 bg-femure-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <p className="text-sm md:text-base leading-relaxed">Treats the <span className="font-semibold text-femure-primary">whole person</span> - mind, body, spirit</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-2 h-2 bg-femure-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <p className="text-sm md:text-base leading-relaxed">Stimulates your <span className="font-semibold text-femure-primary">natural healing intelligence</span></p>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-2 h-2 bg-femure-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <p className="text-sm md:text-base leading-relaxed">Creates <span className="font-semibold text-femure-primary">lasting wellness</span> through balance</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Compact Key Insight Section */}
                <div className="mt-8 md:mt-12 bg-gradient-to-r from-femure-primary/10 to-femure-secondary/10 rounded-xl p-6 md:p-8 max-w-4xl mx-auto">
                    <div className="text-center">
                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-femure-primary flex items-center justify-center mb-4 md:mb-6 mx-auto">
                            <Target className="text-white w-6 h-6 md:w-8 md:h-8" />
                        </div>
                        <h3 className="font-headline text-xl md:text-2xl text-femure-primary mb-4">The Core Difference</h3>
                        <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                            <span className="font-semibold text-femure-primary">Homeopathy doesn't fight your symptoms</span> - it teaches your immune system to recognize and eliminate the underlying cause. 
                            Like training a muscle, we strengthen your body's natural defense mechanisms.
                        </p>
                        <div className="mt-4 md:mt-6 text-sm md:text-base text-gray-600 italic">
                            "The highest ideal of cure is the speedy, gentle, and permanent restoration of health." - Samuel Hahnemann
                        </div>
                    </div>
                </div>

                <p className="text-center text-xs text-gray-500 mt-6 md:mt-8 italic max-w-lg mx-auto">
                    Femure is not a substitute for allopathic treatment in emergency situations. Please seek immediate medical help for serious conditions.
                </p>
            </div>
        </section>
    );
}