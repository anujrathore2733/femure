import { AlertCircle, Heart } from 'react-feather';

export default function WhyFemureSection() {
    return (
        <section className="py-16" style={{ background: 'linear-gradient(to bottom, #FFF8F8, #FFFFFF)' }}>
            <div className="container mx-auto px-6">
                <h2 className="font-headline text-3xl text-center mb-12">The Femure Difference</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto">
                    <div className="bg-white p-8 rounded-xl shadow-md flex flex-col justify-between">
                        <div className="text-center">
                            <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-6 mx-auto">
                                <AlertCircle className="text-gray-500 w-8 h-8" />
                            </div>
                            <h3 className="font-headline text-xl text-center mb-2">The Allopathic Approach</h3>
                            <ul className="text-gray-600 text-sm text-center list-disc pl-5 space-y-2">
                                <li>Focuses on quickly suppressing symptoms with chemical drugs.</li>
                                <li>Can lead to long-term side effects and drug resistance.</li>
                                <li>Often requires lifelong medication without addressing the underlying cause.</li>
                                <li>Treats specific organs, not the whole person.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-xl flex flex-col justify-between border-4 border-femure-primary relative">
                        <div className="absolute -top-4 -right-4 bg-femure-primary text-white px-3 py-1 rounded-full text-xs font-medium uppercase shadow-md -rotate-3">Our Approach</div>
                        <div className="text-center">
                            <div className="w-16 h-16 rounded-full bg-femure-secondary flex items-center justify-center mb-6 mx-auto">
                                <Heart className="text-femure-primary w-8 h-8" />
                            </div>
                            <h3 className="font-headline text-xl text-center mb-2">Femure Personalized Homeopathy</h3>
                            <ul className="text-gray-600 text-sm text-center list-disc pl-5 space-y-2">
                                <li>A holistic approach that targets the root cause of your condition.</li>
                                <li>Uses gentle, personalized formulations with minimal side effects.</li>
                                <li>Doctor-guided care and continuous support for lasting healing.</li>
                                <li>Restores balance to your entire body and mind.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <p className="text-center text-xs text-gray-500 mt-8 italic max-w-lg mx-auto">Femure is not a substitute for allopathic treatment in emergency situations. Please seek immediate medical help for serious conditions.</p>
            </div>
        </section>
    );
}