import Image from 'next/image';
import { Star } from 'react-feather';

const testimonials = [
    {
        name: 'Ritika, 28 — Mumbai',
        quote: 'After my Femure treatment, my PCOS symptoms improved and I feel more in control of my body.',
        rating: 5,
        image: '/img1.png',
    },
    {
        name: 'Aditi, 35 — Bangalore',
        quote: 'The consultation felt personal. I finally felt heard and understood.',
        rating: 5,
        image: '/img1.png',
    },
    {
        name: 'Meera, 27 — Delhi',
        quote: 'The follow-ups and lifestyle tips made healing sustainable.',
        rating: 5,
        image: '/img1.png',
    },
];

export default function TestimonialsSection() {
    return (
        <section className="py-16" style={{ background: 'linear-gradient(to right, #FFF8F8, #FFFFFF)' }}>
            <div className="container mx-auto px-6">
                <h2 className="font-headline text-3xl text-center mb-12">Stories of Healing</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 rounded-full bg-femure-secondary mr-4 overflow-hidden">
                                    <Image src={testimonial.image} alt={testimonial.name} width={48} height={48} className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h4 className="font-medium">{testimonial.name}</h4>
                                    <div className="flex text-yellow-400">
                                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-current" />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-600 italic">{`"${testimonial.quote}"`}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}