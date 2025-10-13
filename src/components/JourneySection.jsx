import { Calendar, User, Clock, Users, Heart, Shield, ArrowRight } from 'react-feather';

export default function JourneySection() {
    const journeySteps = [
        {
            icon: Calendar,
            title: "Initial Consultation",
            description: "Connect with certified homeopaths",
            detail: "Share your health story and get personalized assessment"
        },
        {
            icon: User,
            title: "Custom Treatment",
            description: "Personalized medicine for you",
            detail: "Tailored remedies based on your unique symptoms and constitution"
        },
        {
            icon: Clock,
            title: "Healing Journey",
            description: "Consistent progress tracking",
            detail: "Regular follow-ups and treatment adjustments for optimal results"
        },
        {
            icon: Users,
            title: "Community Support",
            description: "Wellness circles & guidance",
            detail: "Join thousands of women on similar healing journeys"
        }
    ];

    return (
        <section className="py-16 md:py-20 bg-white">
            <div className="container mx-auto px-6 max-w-6xl">
                {/* Clean Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center bg-femure-primary/10 rounded-full px-4 py-2 mb-6">
                        <Heart className="w-4 h-4 text-femure-primary mr-2" />
                        <span className="text-sm font-medium text-femure-primary">Your Healing Journey</span>
                    </div>
                    <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4 leading-tight">
                        Your <span className="text-femure-primary">Femure</span> Journey
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        From consultation to community — a personalized path to lasting wellness
                    </p>
                </div>

                {/* Elegant Journey Flow */}
                <div className="mb-16">
                    {/* Desktop: Curved Flow Design */}
                    <div className="hidden md:block">
                        <div className="relative max-w-5xl mx-auto">
                            {/* Curved SVG Path */}
                            <svg className="absolute inset-0 w-full h-64" viewBox="0 0 800 200" preserveAspectRatio="none">
                                <defs>
                                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                                        <polygon points="0 0, 10 3.5, 0 7" fill="#C24C6E" />
                                    </marker>
                                </defs>
                                <path
                                    d="M 50 100 Q 200 50 400 100 T 750 100"
                                    stroke="#C24C6E"
                                    strokeWidth="2"
                                    fill="none"
                                    markerEnd="url(#arrowhead)"
                                    opacity="0.6"
                                />
                            </svg>
                            
                            {/* Journey Steps with Enhanced Design */}
                            <div className="relative grid grid-cols-4 gap-8">
                                {journeySteps.map((step, index) => {
                                    const Icon = step.icon;
                                    
                                    return (
                                        <div key={index} className="relative">
                                            {/* Enhanced Step Circle */}
                                            <div className="relative w-28 h-28 mx-auto mb-6">
                                                <div className="w-full h-full rounded-full bg-white border-2 border-femure-primary/30 shadow-lg relative overflow-hidden">
                                                    {/* Subtle gradient overlay */}
                                                    <div className="absolute inset-0 bg-gradient-to-br from-femure-primary/5 to-transparent"></div>
                                                    
                                                    {/* Icon Container */}
                                                    <div className="absolute inset-0 flex items-center justify-center z-10">
                                                        <div className="w-12 h-12 rounded-full bg-femure-primary/10 flex items-center justify-center">
                                                            <Icon className="w-6 h-6 text-femure-primary" />
                                                        </div>
                                                    </div>
                                                    
                                                    {/* Step Number Badge */}
                                                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-femure-primary text-white flex items-center justify-center text-sm font-bold shadow-lg z-20">
                                                        {index + 1}
                                                    </div>
                                                    
                                                    {/* Subtle pulse effect */}
                                                    <div className="absolute inset-0 rounded-full bg-femure-primary/10 animate-pulse opacity-50"></div>
                                                </div>
                                            </div>

                                            {/* Enhanced Step Content */}
                                            <div className="text-center">
                                                <h3 className="font-headline text-lg font-semibold mb-2 text-gray-900">
                                                    {step.title}
                                                </h3>
                                                <p className="text-sm text-gray-600 mb-2 font-medium">{step.description}</p>
                                                <p className="text-xs text-gray-500 leading-relaxed">{step.detail}</p>
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
                            {/* Vertical SVG Path */}
                            <svg className="absolute left-6 top-0 w-1 h-full" viewBox="0 0 4 400" preserveAspectRatio="none">
                                <defs>
                                    <marker id="arrowhead-mobile" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                                        <polygon points="0 0, 8 3, 0 6" fill="#C24C6E" />
                                    </marker>
                                </defs>
                                <path
                                    d="M 2 20 L 2 380"
                                    stroke="#C24C6E"
                                    strokeWidth="2"
                                    fill="none"
                                    markerEnd="url(#arrowhead-mobile)"
                                    opacity="0.6"
                                />
                            </svg>
                            
                            <div className="space-y-8">
                                {journeySteps.map((step, index) => {
                                    const Icon = step.icon;
                                    
                                    return (
                                        <div key={index} className="flex items-start space-x-4 relative">
                                            {/* Enhanced Step Circle */}
                                            <div className="relative w-14 h-14 flex-shrink-0 z-10">
                                                <div className="w-full h-full rounded-full bg-white border-2 border-femure-primary/30 shadow-lg relative overflow-hidden">
                                                    {/* Subtle gradient overlay */}
                                                    <div className="absolute inset-0 bg-gradient-to-br from-femure-primary/5 to-transparent"></div>
                                                    
                                                    {/* Icon Container */}
                                                    <div className="absolute inset-0 flex items-center justify-center z-10">
                                                        <div className="w-8 h-8 rounded-full bg-femure-primary/10 flex items-center justify-center">
                                                            <Icon className="w-4 h-4 text-femure-primary" />
                                                        </div>
                                                    </div>
                                                    
                                                    {/* Step Number Badge */}
                                                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-femure-primary text-white flex items-center justify-center text-xs font-bold shadow-lg z-20">
                                                        {index + 1}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Enhanced Step Content */}
                                            <div className="flex-1 pt-2">
                                                <h3 className="font-headline text-base font-semibold mb-1 text-gray-900">
                                                    {step.title}
                                                </h3>
                                                <p className="text-sm text-gray-600 mb-1 font-medium">{step.description}</p>
                                                <p className="text-xs text-gray-500 leading-relaxed">{step.detail}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Clean Bottom Section */}
                <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center bg-femure-primary/10 rounded-full px-6 py-3 mb-6">
                            <Shield className="w-5 h-5 text-femure-primary mr-2" />
                            <span className="text-sm font-medium text-femure-primary">The Femure Promise</span>
                        </div>
                        <h3 className="font-headline text-2xl md:text-3xl text-gray-900 mb-4">
                            <span className="text-femure-primary">Homeopathy</span> Works Best With
                        </h3>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Discipline, community, and consistent care create the foundation for lasting healing
                        </p>
                    </div>

                    {/* Key Principles */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        <div className="text-center">
                            <div className="w-16 h-16 rounded-xl bg-femure-primary/10 flex items-center justify-center mb-4 mx-auto">
                                <Clock className="w-8 h-8 text-femure-primary" />
                            </div>
                            <h4 className="font-headline text-lg font-semibold text-gray-900 mb-3">Daily Discipline</h4>
                            <p className="text-gray-600 leading-relaxed">
                                Consistent medicine intake and lifestyle changes create the foundation for sustainable healing.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 rounded-xl bg-femure-primary/10 flex items-center justify-center mb-4 mx-auto">
                                <Shield className="w-8 h-8 text-femure-primary" />
                            </div>
                            <h4 className="font-headline text-lg font-semibold text-gray-900 mb-3">Continuous Care</h4>
                            <p className="text-gray-600 leading-relaxed">
                                Regular follow-ups and treatment adjustments ensure optimal healing progress.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 rounded-xl bg-femure-primary/10 flex items-center justify-center mb-4 mx-auto">
                                <Heart className="w-8 h-8 text-femure-primary" />
                            </div>
                            <h4 className="font-headline text-lg font-semibold text-gray-900 mb-3">Community Connection</h4>
                            <p className="text-gray-600 leading-relaxed">
                                Join wellness circles and find support from women on similar healing journeys.
                            </p>
                        </div>
                    </div>

                    {/* Community CTA */}
                    <div className="text-center">
                        <div className="inline-flex items-center bg-femure-primary hover:bg-femure-accent text-white rounded-full px-8 py-4 shadow-sm hover:shadow-md transition-all duration-300">
                            <Users className="w-5 h-5 mr-3" />
                            <span className="font-semibold">Join 5,000+ women in our wellness community</span>
                            <ArrowRight className="w-5 h-5 ml-3" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}