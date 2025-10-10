import { Calendar, User, Package, Users, Heart, Clock, Shield, Zap } from 'react-feather';

export default function JourneySection() {
    return (
        <section className="py-8 md:py-12 bg-gradient-to-br from-white via-rose-50 to-pink-50">
            <div className="container mx-auto px-6">
                {/* Compact Header */}
                <div className="text-center mb-8">
                    <h2 className="font-headline text-2xl md:text-3xl text-gray-900 mb-2">
                        Your <span className="text-femure-primary">Femure Journey</span>
                    </h2>
                    <p className="text-sm md:text-base text-gray-600">From consultation to community — your path to wellness</p>
                </div>

                {/* Journey Steps - Mobile: 2x2, Desktop: 4 columns */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
                    {/* Step 1: Consultation */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 md:p-6 text-center shadow-sm border border-rose-100 hover:shadow-md transition-all duration-300">
                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-femure-primary to-femure-accent flex items-center justify-center mb-3 mx-auto relative">
                            <Calendar className="w-6 h-6 md:w-7 md:h-7 text-white" />
                            <div className="absolute -top-1 -right-1 w-5 h-5 bg-femure-accent rounded-full flex items-center justify-center">
                                <span className="text-xs font-bold text-white">1</span>
                            </div>
                        </div>
                        <h3 className="font-semibold text-sm md:text-base text-gray-900 mb-1">Book Consultation</h3>
                        <p className="text-xs md:text-sm text-gray-600 leading-tight">Connect with certified doctors</p>
                    </div>

                    {/* Step 2: Personalized Care */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 md:p-6 text-center shadow-sm border border-rose-100 hover:shadow-md transition-all duration-300">
                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-femure-primary to-femure-accent flex items-center justify-center mb-3 mx-auto relative">
                            <User className="w-6 h-6 md:w-7 md:h-7 text-white" />
                            <div className="absolute -top-1 -right-1 w-5 h-5 bg-femure-accent rounded-full flex items-center justify-center">
                                <span className="text-xs font-bold text-white">2</span>
                            </div>
                        </div>
                        <h3 className="font-semibold text-sm md:text-base text-gray-900 mb-1">Personalized Care</h3>
                        <p className="text-xs md:text-sm text-gray-600 leading-tight">Custom medicine for you</p>
                    </div>

                    {/* Step 3: Discipline & Routine */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 md:p-6 text-center shadow-sm border border-rose-100 hover:shadow-md transition-all duration-300">
                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-femure-primary to-femure-accent flex items-center justify-center mb-3 mx-auto relative">
                            <Clock className="w-6 h-6 md:w-7 md:h-7 text-white" />
                            <div className="absolute -top-1 -right-1 w-5 h-5 bg-femure-accent rounded-full flex items-center justify-center">
                                <span className="text-xs font-bold text-white">3</span>
                            </div>
                        </div>
                        <h3 className="font-semibold text-sm md:text-base text-gray-900 mb-1">Discipline & Routine</h3>
                        <p className="text-xs md:text-sm text-gray-600 leading-tight">Consistent healing journey</p>
                    </div>

                    {/* Step 4: Community Support */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 md:p-6 text-center shadow-sm border border-rose-100 hover:shadow-md transition-all duration-300">
                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-femure-primary to-femure-accent flex items-center justify-center mb-3 mx-auto relative">
                            <Users className="w-6 h-6 md:w-7 md:h-7 text-white" />
                            <div className="absolute -top-1 -right-1 w-5 h-5 bg-femure-accent rounded-full flex items-center justify-center">
                                <span className="text-xs font-bold text-white">4</span>
                            </div>
                        </div>
                        <h3 className="font-semibold text-sm md:text-base text-gray-900 mb-1">Community Support</h3>
                        <p className="text-xs md:text-sm text-gray-600 leading-tight">Wellness circles & guidance</p>
                    </div>
                </div>

                {/* Community & Discipline Focus Section */}
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg border border-rose-200">
                    <div className="text-center mb-6">
                        <h3 className="font-headline text-xl md:text-2xl text-gray-900 mb-2">
                            <span className="text-femure-primary">Homeopathy</span> Works Best With
                        </h3>
                        <p className="text-sm md:text-base text-gray-600">Discipline, community, and consistent care</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                        {/* Discipline */}
                        <div className="text-center">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-femure-primary/20 to-femure-accent/20 flex items-center justify-center mb-3 mx-auto">
                                <Zap className="w-8 h-8 text-femure-primary" />
                            </div>
                            <h4 className="font-semibold text-gray-900 mb-2">Daily Discipline</h4>
                            <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                                Regular medicine intake, lifestyle changes, and mindful living create the foundation for healing.
                            </p>
                        </div>

                        {/* Community */}
                        <div className="text-center">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-femure-primary/20 to-femure-accent/20 flex items-center justify-center mb-3 mx-auto">
                                <Heart className="w-8 h-8 text-femure-primary" />
                            </div>
                            <h4 className="font-semibold text-gray-900 mb-2">Community Connection</h4>
                            <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                                Join wellness circles, share experiences, and find support from women on similar healing journeys.
                            </p>
                        </div>

                        {/* Follow-ups */}
                        <div className="text-center">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-femure-primary/20 to-femure-accent/20 flex items-center justify-center mb-3 mx-auto">
                                <Shield className="w-8 h-8 text-femure-primary" />
                            </div>
                            <h4 className="font-semibold text-gray-900 mb-2">Continuous Care</h4>
                            <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                                Regular follow-ups, progress tracking, and treatment adjustments ensure optimal healing.
                            </p>
                        </div>
                    </div>

                    {/* Community CTA */}
                    <div className="text-center mt-6">
                        <div className="inline-flex items-center bg-gradient-to-r from-femure-primary/10 to-femure-accent/10 rounded-full px-6 py-3 border border-femure-primary/20">
                            <Users className="w-5 h-5 text-femure-primary mr-2" />
                            <span className="text-sm font-medium text-gray-700">Join 5,000+ women in our wellness community</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}