import { Shield, Zap, Target, CheckCircle, XCircle } from 'react-feather';

export default function WhyFemureSection() {
    return (
        <section className="py-12 md:py-16 bg-white">
            <div className="container mx-auto px-6">
                {/* Crisp Header */}
                <div className="text-center mb-12">
                    <h2 className="font-headline text-4xl md:text-5xl text-gray-900 mb-4">
                        The <span className="text-femure-primary">Femure</span> Difference
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        <span className="font-semibold text-gray-900">Two approaches. One choice.</span> 
                        <br className="hidden md:block" />
                        Choose the path that heals, not just treats.
                    </p>
                </div>

                {/* Clear Comparison */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
                    {/* Traditional Medicine */}
                    <div className="bg-gray-50 p-8 rounded-2xl border-2 border-gray-200 relative">
                        <div className="text-center mb-6">
                            <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center mb-4 mx-auto">
                                <XCircle className="text-gray-500 w-8 h-8" />
                            </div>
                            <h3 className="font-headline text-2xl text-gray-800 mb-2">Traditional Medicine</h3>
                            <p className="text-gray-600">Quick fixes, lasting problems</p>
                        </div>
                        
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <XCircle className="text-red-500 w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                                <p className="text-gray-700"><span className="font-semibold">Suppresses symptoms</span> with chemicals</p>
                            </div>
                            <div className="flex items-start">
                                <XCircle className="text-red-500 w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                                <p className="text-gray-700">Treats <span className="font-semibold">disease, not the person</span></p>
                            </div>
                            <div className="flex items-start">
                                <XCircle className="text-red-500 w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                                <p className="text-gray-700">Creates <span className="font-semibold">dependency</span> on medication</p>
                            </div>
                            <div className="flex items-start">
                                <XCircle className="text-red-500 w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                                <p className="text-gray-700">Often requires <span className="font-semibold">lifelong treatment</span></p>
                            </div>
                        </div>
                    </div>

                    {/* Femure Homeopathy */}
                    <div className="bg-gradient-to-br from-femure-primary/5 to-femure-secondary/10 p-8 rounded-2xl border-2 border-femure-primary relative shadow-lg">
                        <div className="absolute -top-3 -right-3 bg-femure-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                            RECOMMENDED
                        </div>
                        
                        <div className="text-center mb-6">
                            <div className="w-16 h-16 rounded-full bg-femure-primary flex items-center justify-center mb-4 mx-auto shadow-lg">
                                <Shield className="text-white w-8 h-8" />
                            </div>
                            <h3 className="font-headline text-2xl text-femure-primary mb-2">Femure Homeopathy</h3>
                            <p className="text-gray-700">Natural healing, lasting wellness</p>
                        </div>
                        
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <CheckCircle className="text-green-500 w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                                <p className="text-gray-700"><span className="font-semibold text-femure-primary">Strengthens your immune system</span> naturally</p>
                            </div>
                            <div className="flex items-start">
                                <CheckCircle className="text-green-500 w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                                <p className="text-gray-700">Treats <span className="font-semibold text-femure-primary">you as a whole person</span></p>
                            </div>
                            <div className="flex items-start">
                                <CheckCircle className="text-green-500 w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                                <p className="text-gray-700">Builds <span className="font-semibold text-femure-primary">natural resistance</span> to illness</p>
                            </div>
                            <div className="flex items-start">
                                <CheckCircle className="text-green-500 w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                                <p className="text-gray-700">Creates <span className="font-semibold text-femure-primary">permanent wellness</span></p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Key Insight - Simplified */}
                <div className="bg-gradient-to-r from-femure-primary/10 to-femure-secondary/10 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto text-center">
                    <div className="w-20 h-20 rounded-full bg-femure-primary flex items-center justify-center mb-6 mx-auto shadow-lg">
                        <Target className="text-white w-10 h-10" />
                    </div>
                    
                    <h3 className="font-headline text-3xl text-femure-primary mb-6">The Simple Truth</h3>
                    
                    <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                        <p>
                            <span className="font-bold text-femure-primary">Traditional medicine fights your symptoms.</span>
                        </p>
                        <p>
                            <span className="font-bold text-femure-primary">Femure homeopathy strengthens your body.</span>
                        </p>
                        <p className="text-base text-gray-600 mt-6">
                            Like training a muscle, we teach your immune system to recognize and eliminate the root cause. 
                            <span className="font-semibold"> No dependency. No side effects. Just natural healing.</span>
                        </p>
                    </div>
                </div>

                {/* Disclaimer */}
                <p className="text-center text-sm text-gray-500 mt-8 max-w-2xl mx-auto">
                    <span className="font-semibold">Important:</span> Femure homeopathy is not a substitute for emergency medical care. 
                    Please seek immediate medical help for serious conditions.
                </p>
            </div>
        </section>
    );
}