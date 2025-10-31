import Image from 'next/image';

export default function FemureFrameworkSection() {
    const frameworkPillars = [
        {
            iconSrc: '/femureFramework/Hormonal Healing.svg',
            title: "Hormonal Healing",
            description: "Bringing your body's rhythm back in balance",
        },
        {
            iconSrc: '/femureFramework/Metabolic Reset.svg',
            title: "Metabolic Reset",
            description: "Restoring natural energy and healthy weight",
        },
        {
            iconSrc: '/femureFramework/Emotional Wellness.svg',
            title: "Emotional Wellness",
            description: "Calming the mind and healing from within",
        },
        {
            iconSrc: '/femureFramework/Nutritional Nourishment.svg',
            title: "Nutritional Nourishment",
            description: "Giving your body the right food to thrive",
        },
        {
            iconSrc: '/femureFramework/Lifestyle Alignment.svg',
            title: "Lifestyle Alignment",
            description: "Living in harmony with your body's natural flow",
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
                        const { iconSrc } = pillar;
                        const isLastOdd = index === frameworkPillars.length - 1 && frameworkPillars.length % 2 === 1;
                        return (
                            <div 
                                key={index}
                                className={`group text-center flex flex-col items-center ${isLastOdd ? 'col-span-2 sm:col-span-1 justify-self-center' : ''}`}
                            >
                                {/* Icon (uses intrinsic outer circle from asset) */}
                                <div className="mx-auto mb-3 sm:mb-4">
                                    <Image src={iconSrc} alt={pillar.title} width={80} height={80} className="block w-16 h-16 md:w-20 md:h-20 object-contain" />
                                </div>

                                {/* Content */}
                                <h3 className="font-semibold text-femure-primary text-sm sm:text-base md:text-lg mb-0.5 sm:mb-1">
                                    {pillar.title}
                                </h3>
                                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed max-w-[16rem]">
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

                    {/* Compact Comparison Inside Framework Box */}
                    <div className="mt-8 pt-8 border-t border-femure-primary/10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto mb-3">
                            {/* Traditional Medicine */}
                            <div className="group relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-gray-100/50 to-gray-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl scale-105"></div>
                                <div className="relative bg-white border border-gray-200/60 rounded-2xl p-4 md:p-5 hover:border-gray-300/80 hover:shadow-xl transition-all duration-300 h-full flex flex-col backdrop-blur-sm shadow-sm">
                                    <div className="text-center mb-4">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-50 via-orange-50 to-red-50 border border-red-200/60 flex items-center justify-center mb-2 mx-auto shadow-sm">
                                            <svg className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </div>
                                        <h5 className="font-headline text-base text-gray-900 mb-1 tracking-tight">Traditional Medicine</h5>
                                        <p className="text-xs text-gray-500/80 font-medium tracking-wide uppercase">Symptom Management</p>
                                    </div>
                                    <ul className="space-y-2 flex-grow px-1">
                                        <li className="flex items-center gap-2.5">
                                            <svg className="w-4 h-4 text-red-400/80 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-gray-700 text-xs leading-relaxed">Masks symptoms temporarily</span>
                                        </li>
                                        <li className="flex items-center gap-2.5">
                                            <svg className="w-4 h-4 text-red-400/80 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-gray-700 text-xs leading-relaxed">One-size-fits-all approach</span>
                                        </li>
                                        <li className="flex items-center gap-2.5">
                                            <svg className="w-4 h-4 text-red-400/80 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-gray-700 text-xs leading-relaxed">Lifelong pill dependency</span>
                                        </li>
                                        <li className="flex items-center gap-2.5">
                                            <svg className="w-4 h-4 text-red-400/80 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-gray-700 text-xs leading-relaxed">Symptoms return when you stop</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Femure Homeopathy */}
                            <div className="group relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-femure-primary/25 via-femure-secondary/15 to-femure-primary/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl scale-105"></div>
                                <div className="relative bg-gradient-to-br from-white via-femure-primary/3 to-femure-primary/6 border border-femure-primary/30 rounded-2xl p-4 md:p-5 hover:border-femure-primary/50 hover:shadow-2xl hover:shadow-femure-primary/10 transition-all duration-300 h-full flex flex-col shadow-lg shadow-femure-primary/5 backdrop-blur-sm">
                                    <div className="absolute -top-2.5 right-3 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold shadow-lg shadow-yellow-400/40 border border-yellow-300/50 badge-pulse-glow">
                                        ⭐ RECOMMENDED
                                    </div>
                                    <div className="text-center mb-4 pt-1">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-femure-primary via-femure-primary/90 to-femure-secondary flex items-center justify-center mb-2 mx-auto shadow-lg shadow-femure-primary/30 ring-2 ring-femure-primary/20">
                                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <h5 className="femure-logo font-headline text-base text-femure-primary mb-1 tracking-tight">Femure Homeopathy</h5>
                                        <p className="text-xs text-femure-primary/70 font-medium tracking-wide uppercase">Root Cause Healing</p>
                                    </div>
                                    <ul className="space-y-2 flex-grow px-1">
                                        <li className="flex items-center gap-2.5">
                                            <svg className="w-4 h-4 text-green-500/90 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-gray-700 text-xs leading-relaxed">Activates your <span className="font-semibold text-femure-primary">body's natural healing</span></span>
                                        </li>
                                        <li className="flex items-center gap-2.5">
                                            <svg className="w-4 h-4 text-green-500/90 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-gray-700 text-xs leading-relaxed"><span className="font-semibold text-femure-primary">Personalized</span>, not standardized</span>
                                        </li>
                                        <li className="flex items-center gap-2.5">
                                            <svg className="w-4 h-4 text-green-500/90 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-gray-700 text-xs leading-relaxed">Your body <span className="font-semibold text-femure-primary">learns to heal itself</span></span>
                                        </li>
                                        <li className="flex items-center gap-2.5">
                                            <svg className="w-4 h-4 text-green-500/90 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-gray-700 text-xs leading-relaxed"><span className="font-semibold text-femure-primary">Root healing</span>, not symptom masking</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="text-center bg-gradient-to-r from-femure-primary/5 via-transparent to-femure-primary/5 rounded-lg p-2.5 border border-femure-primary/20 mt-3">
                            <p className="text-gray-700 text-xs font-semibold leading-tight">
                                🎯 <span className="femure-logo text-femure-primary">Femure</span> heals the foundation, not just symptoms.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
