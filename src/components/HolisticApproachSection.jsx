'use client';

import { useEffect, useState } from 'react';

export default function HolisticApproachSection() {
    const messages = [
        'PCOS and hormonal imbalance',
        'Painful or irregular periods (PMS, cramps)',
        'Acne, hair fall and skin concerns',
        'Fertility and preconception readiness',
        'Thyroid, energy and metabolism support',
        'Mood, sleep and stress balance'
    ];

    const [index, setIndex] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            // fade out, then switch text, then fade in
            setVisible(false);
            setTimeout(() => {
                setIndex((prev) => (prev + 1) % messages.length);
                setVisible(true);
            }, 250);
        }, 2200);
        return () => clearInterval(interval);
    }, [messages.length]);

    return (
        <section className="py-10 md:py-16 bg-gradient-to-b from-white to-rose-50/60">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="font-headline text-2xl md:text-3xl text-gray-900">
                        What We Solve — Holistically
                    </h2>
                    <p className="text-gray-600 mt-3 md:mt-4">
                        We don’t mask symptoms. We heal patterns — body, mind and lifestyle.
                    </p>

                    <div className="relative mt-6 md:mt-8 h-10 md:h-12 overflow-hidden">
                        <div
                            className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ease-out ${
                                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                            }`}
                            key={index}
                        >
                            <span className="text-lg md:text-2xl font-medium text-femure-primary">
                                {messages[index]}
                            </span>
                        </div>
                    </div>

                    <p className="text-gray-700 mt-6 md:mt-8 text-sm md:text-base">
                        Gentle homeopathy + smart nutrition + consistent follow‑ups = lasting change.
                    </p>
                </div>
            </div>
        </section>
    );
}


