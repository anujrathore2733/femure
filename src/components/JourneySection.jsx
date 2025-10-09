import { Calendar, User, Package, Repeat } from 'react-feather';

export default function JourneySection() {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-6">
                <h2 className="font-headline text-3xl text-center mb-16">Your Femure Journey</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                    <div className="flex flex-col items-center">
                        <div className="w-20 h-20 rounded-full bg-femure-secondary flex items-center justify-center mb-4 border-4 border-femure-primary">
                            <Calendar className="text-femure-primary w-10 h-10" />
                        </div>
                        <h3 className="font-headline text-xl mb-2">1. Book Your Consultation</h3>
                        <p className="text-gray-600">Choose your preferred time and connect with our certified doctors via audio or video call.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-20 h-20 rounded-full bg-femure-secondary flex items-center justify-center mb-4 border-4 border-femure-primary">
                            <User className="text-femure-primary w-10 h-10" />
                        </div>
                        <h3 className="font-headline text-xl mb-2">2. Meet Your Doctor</h3>
                        <p className="text-gray-600">Share your health history and symptoms in a private, one-on-one session. We listen to understand.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-20 h-20 rounded-full bg-femure-secondary flex items-center justify-center mb-4 border-4 border-femure-primary">
                            <Package className="text-femure-primary w-10 h-10" />
                        </div>
                        <h3 className="font-headline text-xl mb-2">3. Receive Personalized Medicine</h3>
                        <p className="text-gray-600">We formulate a custom treatment plan and deliver your personalized medicine right to your doorstep.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-20 h-20 rounded-full bg-femure-secondary flex items-center justify-center mb-4 border-4 border-femure-primary">
                            <Repeat className="text-femure-primary w-10 h-10" />
                        </div>
                        <h3 className="font-headline text-xl mb-2">4. Stay Supported</h3>
                        <p className="text-gray-600">Our care doesn't stop. We provide regular follow-ups and support to ensure your continuous wellness.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}