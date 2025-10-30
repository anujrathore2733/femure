import { Heart, Activity, RefreshCw, Droplet, Sun } from 'react-feather';

export default function FemureFrameworkSection() {
    const frameworkPillars = [
        {
            icon: Activity,
            title: "Hormonal Healing",
            description: "Bringing your body's rhythm back in balance",
            color: "from-femure-primary/10 to-femure-secondary/10",
            iconColor: "text-femure-primary",
            bgColor: "bg-white"
        },
        {
            icon: RefreshCw,
            title: "Metabolic Reset",
            description: "Restoring natural energy and healthy weight",
            color: "from-femure-primary/10 to-femure-secondary/10",
            iconColor: "text-femure-primary",
            bgColor: "bg-white"
        },
        {
            icon: Heart,
            title: "Emotional Wellness",
            description: "Calming the mind and healing from within",
            color: "from-femure-primary/10 to-femure-secondary/10",
            iconColor: "text-femure-primary",
            bgColor: "bg-white"
        },
        {
            icon: Droplet,
            title: "Nutritional Nourishment",
            description: "Giving your body the right food to thrive",
            color: "from-femure-primary/10 to-femure-secondary/10",
            iconColor: "text-femure-primary",
            bgColor: "bg-white"
        },
        {
            icon: Sun,
            title: "Lifestyle Alignment",
            description: "Living in harmony with your body's natural flow",
            color: "from-femure-primary/10 to-femure-secondary/10",
            iconColor: "text-femure-primary",
            bgColor: "bg-white"
        }
    ];

    return (
        <section className="py-16 md:py-20 bg-[#FFF4F6]">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-10 md:mb-14">
                    <h2 className="femure-logo text-4xl md:text-5xl text-femure-primary mb-4 leading-tight">
                        How Femure Heals?
                    </h2>
                    <p className="text-lg md:text-xl text-femure-primary/80 max-w-2xl mx-auto">
                        Healing with <span className="femure-logo">Femure</span> goes deeper than quick fixes.
                    </p>
                </div>

                {/* Framework Card with pill title */}
                <div className="relative rounded-3xl border border-femure-primary/30 bg-white/60 p-6 md:p-8 mb-12">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-femure-primary text-white px-5 py-2 rounded-full text-sm font-semibold shadow-sm">
                        Femure Framework
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
                    {frameworkPillars.map((pillar, index) => {
                        const IconComponent = pillar.icon;
                        const isLastOdd = index === frameworkPillars.length - 1 && frameworkPillars.length % 2 === 1;
                        return (
                            <div 
                                key={index}
                                className={`group text-center ${isLastOdd ? 'col-span-2 sm:col-span-1 justify-self-center' : ''}`}
                            >
                                {/* Icon */}
                                <div className="mx-auto mb-3 sm:mb-4 w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-femure-primary/40 bg-white flex items-center justify-center group-hover:border-femure-primary transition-colors duration-300">
                                    <IconComponent className="w-7 h-7 md:w-9 md:h-9 text-femure-primary" />
                                </div>

                                {/* Content */}
                                <h3 className="font-semibold text-femure-primary text-sm sm:text-base md:text-lg mb-0.5 sm:mb-1">
                                    {pillar.title}
                                </h3>
                                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                                    {pillar.description}
                                </p>
                            </div>
                        );
                    })}
                    </div>

                    {/* Supporting Paragraph inside framework area */}
                    <div className="mt-8 md:mt-10 text-center max-w-4xl mx-auto">
                        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                            Healing with <span className="femure-logo text-femure-primary">Femure</span> isn't about chasing quick fixes. It's about rediscovering trust in your body — learning how to listen, nurture, and align with its wisdom. Because when you restore your rhythm, everything — your skin, your sleep, your emotions, your energy — starts to glow again.
                        </p>
                    </div>
                </div>
                {/* Removed quote block per request */}
            </div>
        </section>
    );
}
