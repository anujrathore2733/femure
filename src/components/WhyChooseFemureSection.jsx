import { Heart } from 'react-feather';

export default function WhyChooseFemureSection() {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-6">
                <h2 className="font-headline text-3xl text-center mb-12">Why Choose Femure — Science Meets Empathy</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="text-center p-6">
                        <div className="w-16 h-16 rounded-full bg-femure-secondary flex items-center justify-center mb-4 mx-auto">
                            <span className="text-2xl">🧬</span>
                        </div>
                        <h3 className="font-headline text-xl mb-3">Expert-Led</h3>
                        <p className="text-gray-600">Backed by over 100 years of collective clinical experience.</p>
                    </div>
                    <div className="text-center p-6">
                        <div className="w-16 h-16 rounded-full bg-femure-secondary flex items-center justify-center mb-4 mx-auto">
                            <span className="text-2xl">💊</span>
                        </div>
                        <h3 className="font-headline text-xl mb-3">Custom Formulation</h3>
                        <p className="text-gray-600">Every medicine is crafted uniquely for you.</p>
                    </div>
                    <div className="text-center p-6">
                        <div className="w-16 h-16 rounded-full bg-femure-secondary flex items-center justify-center mb-4 mx-auto">
                            <span className="text-2xl">🔁</span>
                        </div>
                        <h3 className="font-headline text-xl mb-3">Follow-ups</h3>
                        <p className="text-gray-600">Continuous tracking and care adjustments.</p>
                    </div>
                    <div className="text-center p-6">
                        <div className="w-16 h-16 rounded-full bg-femure-secondary flex items-center justify-center mb-4 mx-auto">
                            <span className="text-2xl">🧘‍♀️</span>
                        </div>
                        <h3 className="font-headline text-xl mb-3">Community</h3>
                        <p className="text-gray-600">Wellness circles, lifestyle workshops, and shared support.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}