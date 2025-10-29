import { Heart, Zap, Activity, Coffee, Sun } from 'react-feather';

export default function FemureFrameworkSection() {
    const frameworkPillars = [
        {
            icon: Heart,
            title: "Hormonal Healing",
            description: "Bringing your body's rhythm back in balance",
            color: "from-rose-50 to-pink-50",
            iconColor: "text-rose-500",
            bgColor: "bg-rose-50"
        },
        {
            icon: Zap,
            title: "Metabolic Reset",
            description: "Restoring natural energy and healthy weight",
            color: "from-amber-50 to-orange-50",
            iconColor: "text-amber-500",
            bgColor: "bg-amber-50"
        },
        {
            icon: Activity,
            title: "Emotional Wellness",
            description: "Calming the mind and healing from within",
            color: "from-blue-50 to-indigo-50",
            iconColor: "text-blue-500",
            bgColor: "bg-blue-50"
        },
        {
            icon: Coffee,
            title: "Nutritional Nourishment",
            description: "Giving your body the right food to thrive",
            color: "from-green-50 to-emerald-50",
            iconColor: "text-green-500",
            bgColor: "bg-green-50"
        },
        {
            icon: Sun,
            title: "Lifestyle Alignment",
            description: "Living in harmony with your body's natural flow",
            color: "from-yellow-50 to-amber-50",
            iconColor: "text-yellow-500",
            bgColor: "bg-yellow-50"
        }
    ];

    return (
        <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center bg-femure-primary/10 rounded-full px-6 py-3 mb-6">
                        <Heart className="w-5 h-5 text-femure-primary mr-2" />
                        <span className="text-sm font-medium text-femure-primary">The Femure Framework</span>
                    </div>
                    <h2 className="font-headline text-4xl md:text-5xl text-gray-900 mb-6 leading-tight">
                        How We <span className="femure-logo text-femure-primary">Heal</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Five interconnected pillars that restore your body's natural wisdom and healing power
                    </p>
                </div>

                {/* Framework Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {frameworkPillars.map((pillar, index) => {
                        const IconComponent = pillar.icon;
                        return (
                            <div 
                                key={index}
                                className={`group relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${pillar.bgColor}`}
                            >
                                {/* Icon */}
                                <div className={`w-16 h-16 rounded-2xl ${pillar.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <IconComponent className={`w-8 h-8 ${pillar.iconColor}`} />
                                </div>

                                {/* Content */}
                                <h3 className="font-headline text-xl text-gray-900 mb-3 group-hover:text-femure-primary transition-colors duration-300">
                                    {pillar.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {pillar.description}
                                </p>

                                {/* Decorative element */}
                                <div className={`absolute top-0 right-0 w-20 h-20 rounded-full ${pillar.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom Quote Section */}
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 relative overflow-hidden">
                    {/* Background decoration */}
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-femure-primary to-femure-secondary"></div>
                    <div className="absolute top-8 right-8 w-32 h-32 bg-gradient-to-br from-femure-primary/5 to-femure-secondary/10 rounded-full"></div>
                    <div className="absolute bottom-8 left-8 w-24 h-24 bg-gradient-to-tr from-femure-accent/10 to-femure-primary/5 rounded-full"></div>

                    <div className="relative z-10 text-center max-w-4xl mx-auto">
                        <div className="mb-6">
                            <Heart className="w-8 h-8 text-femure-primary mx-auto mb-4" />
                        </div>
                        <blockquote className="text-2xl md:text-3xl text-gray-900 leading-relaxed mb-6 font-medium">
                            "Your body remembers how to heal — it just needs the right support."
                        </blockquote>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Healing with <span className="femure-logo text-femure-primary">Femure</span> isn't about chasing quick fixes. 
                            It's about rediscovering trust in your body — learning how to listen, nurture, and align with its wisdom. 
                            Because when you restore your rhythm, everything — your skin, your sleep, your emotions, your energy — starts to glow again.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
