import { Shield, Heart, Zap, Target } from 'react-feather';

export default function WhyFemureSection() {
    return (
        <section className="py-20" style={{ background: 'linear-gradient(to bottom, #FFF8F8, #FFFFFF)' }}>
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="font-headline text-4xl text-femure-primary mb-4">The Femure Difference</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Two philosophies, one choice. Discover how homeopathy empowers your body's natural healing intelligence.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch max-w-6xl mx-auto">
                    {/* Allopathic Approach */}
                    <div className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-20 h-20 bg-gray-100 rounded-bl-full"></div>
                        <div className="text-center relative z-10">
                            <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-8 mx-auto">
                                <Zap className="text-gray-500 w-10 h-10" />
                            </div>
                            <h3 className="font-headline text-2xl text-center mb-6 text-gray-800">The Allopathic Philosophy</h3>
                            <div className="space-y-4 text-gray-600">
                                <div className="flex items-start">
                                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <p className="text-sm leading-relaxed">Focuses on <span className="font-semibold">suppressing symptoms</span> with chemical interventions</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <p className="text-sm leading-relaxed">Treats the <span className="font-semibold">disease, not the person</span> - one size fits all approach</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <p className="text-sm leading-relaxed">Can create <span className="font-semibold">dependency</span> and mask underlying imbalances</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <p className="text-sm leading-relaxed">May require <span className="font-semibold">lifelong medication</span> without addressing root causes</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Homeopathic Approach */}
                    <div className="bg-gradient-to-br from-femure-primary/5 to-femure-secondary/10 p-10 rounded-2xl shadow-xl border-2 border-femure-primary/20 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-femure-primary/10 rounded-bl-full"></div>
                        <div className="absolute bottom-0 left-0 w-16 h-16 bg-femure-secondary/20 rounded-tr-full"></div>
                        <div className="text-center relative z-10">
                            <div className="w-20 h-20 rounded-full bg-femure-primary flex items-center justify-center mb-8 mx-auto shadow-lg">
                                <Shield className="text-white w-10 h-10" />
                            </div>
                            <h3 className="font-headline text-2xl text-center mb-6 text-femure-primary">Femure's Homeopathic Philosophy</h3>
                            <div className="space-y-4 text-gray-700">
                                <div className="flex items-start">
                                    <div className="w-2 h-2 bg-femure-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <p className="text-sm leading-relaxed"><span className="font-semibold text-femure-primary">Empowers your immune system</span> to recognize and fight the root cause</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-2 h-2 bg-femure-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <p className="text-sm leading-relaxed">Treats the <span className="font-semibold text-femure-primary">whole person</span> - mind, body, and spirit as one</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-2 h-2 bg-femure-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <p className="text-sm leading-relaxed">Stimulates your body's <span className="font-semibold text-femure-primary">natural healing intelligence</span></p>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-2 h-2 bg-femure-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <p className="text-sm leading-relaxed">Creates <span className="font-semibold text-femure-primary">lasting wellness</span> by restoring internal balance</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Key Insight Section */}
                <div className="mt-16 bg-gradient-to-r from-femure-primary/10 to-femure-secondary/10 rounded-2xl p-8 max-w-4xl mx-auto">
                    <div className="text-center">
                        <div className="w-16 h-16 rounded-full bg-femure-primary flex items-center justify-center mb-6 mx-auto">
                            <Target className="text-white w-8 h-8" />
                        </div>
                        <h3 className="font-headline text-2xl text-femure-primary mb-4">The Core Difference</h3>
                        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                            <span className="font-semibold text-femure-primary">Homeopathy doesn't fight your symptoms</span> - it teaches your immune system to recognize and eliminate the underlying cause. 
                            Like training a muscle, we strengthen your body's natural defense mechanisms, creating lasting health rather than temporary relief.
                        </p>
                        <div className="mt-6 text-sm text-gray-600 italic">
                            "The highest ideal of cure is the speedy, gentle, and permanent restoration of health." - Samuel Hahnemann, Founder of Homeopathy
                        </div>
                    </div>
                </div>

                <p className="text-center text-xs text-gray-500 mt-8 italic max-w-lg mx-auto">
                    Femure is not a substitute for allopathic treatment in emergency situations. Please seek immediate medical help for serious conditions.
                </p>
            </div>
        </section>
    );
}