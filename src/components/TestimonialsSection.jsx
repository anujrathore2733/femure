import { Star, ChevronLeft, ChevronRight } from 'react-feather';
import { useRef, useState, useEffect } from 'react';

const testimonials = [
    { name: 'Ritika', meta: '28, Mumbai', quote: '3 mahine baad... finally cycle set 🙏 call pe follow‑up ne confidence de diya.', rating: 5, image: '/img1.png' },
    { name: 'Aditi', meta: '35, Bengaluru', quote: 'doctor actually suna... cramps kam, neend better. simple tips, kaafi kaam ke.', rating: 5, image: '/img2.png' },
    { name: 'Meera', meta: '27, Delhi', quote: 'har month ka stress tha... ab smooth hai. mood bhi zyada stable ✨', rating: 4, image: '/img3.png' },
    { name: 'Sana', meta: '31, Pune', quote: 'pcos acne dheere dheere gaya... creams se better ye long‑term waali cheez lagi.', rating: 4, image: '/img4.png' },
    { name: 'Nisha', meta: '29, Jaipur', quote: 'first time feel hua ki kisi ne samjha. period pain ~60% kam.', rating: 5, image: '/img1.png' },
    { name: 'Ananya', meta: '24, Lucknow', quote: 'ghar ka khana tweak kiya bas... pms ka gussa control 😅', rating: 4, image: '/img2.png' },
    { name: 'Kavya', meta: '33, Hyderabad', quote: 'video consult smooth... meds time pe. slow n steady change.', rating: 4, image: '/img3.png' },
    { name: 'Priya', meta: '26, Indore', quote: 'spotting issue solve ✅ ab cycle predictable lagta.', rating: 5, image: '/img4.png' },
    { name: 'Simran', meta: '30, Chandigarh', quote: 'bloating + cramps dono control... check‑ins helpful the.', rating: 4, image: '/img1.png' },
    { name: 'Ishita', meta: '32, Gurgaon', quote: 'saalon baad painkillers nahi liye. relief!', rating: 5, image: '/img2.png' },
    { name: 'Tanya', meta: '25, Noida', quote: 'pehle delay... ab on time. skin bhi thodi better 😊', rating: 4, image: '/img3.png' },
    { name: 'Neha', meta: '34, Kolkata', quote: 'stress kam to sleep theek... overall calmer feel.', rating: 4, image: '/img4.png' },
    { name: 'Aisha', meta: '29, Ahmedabad', quote: 'remedies gentle... side effects zero. patience rakho... result aata hai.', rating: 5, image: '/img1.png' },
    { name: 'Pooja', meta: '27, Bhopal', quote: 'plan personalize kiya... 2 months mein clear difference.', rating: 5, image: '/img2.png' },
    { name: 'Shruti', meta: '31, Thane', quote: 'mood swings control mein.. partner bhi notice kar raha 😄', rating: 4, image: '/img3.png' },
    { name: 'Rhea', meta: '23, Surat', quote: 'irregular se stable. tension kam... life easy.', rating: 5, image: '/img4.png' },
    { name: 'Gayatri', meta: '36, Nagpur', quote: 'thyroid + period dono manageable ab. slow improvements but solid.', rating: 4, image: '/img1.png' },
    { name: 'Bhavana', meta: '28, Patna', quote: 'call notes clear... next steps simple. follow karna easy laga.', rating: 4, image: '/img2.png' },
    { name: 'Zoya', meta: '26, Kochi', quote: 'cravings aur pms headache... dono kam. thoda time laga... worth.', rating: 4, image: '/img3.png' },
    { name: 'Avni', meta: '30, Udaipur', quote: 'weight stable... period pehle jaisa heavy nahi. good.', rating: 3, image: '/img4.png' },
    { name: 'Mahima', meta: '33, Amritsar', quote: 'nutrition waali call useful... realistic changes bataye.', rating: 5, image: '/img1.png' },
    { name: 'Ira', meta: '22, Kanpur', quote: 'college schedule ke saath bhi manageable... nice.', rating: 4, image: '/img2.png' },
    { name: 'Yashika', meta: '29, Vadodara', quote: 'cycle set + skin glow... bonus mila 😌', rating: 5, image: '/img3.png' },
    { name: 'Srishti', meta: '27, Guwahati', quote: 'pehle doubt tha... ab believer. slow par steady.', rating: 4, image: '/img4.png' },
    { name: 'Anushka', meta: '26, Delhi', quote: '2 lines? nahi.. bas itna: works for me 👍', rating: 4, image: '/img1.png' },
    { name: 'Heena', meta: '35, Mumbai', quote: 'pehle cramps, mood, acne... sab ek saath trigger hota tha. ab cycle kaafi normal lagta, mind bhi shaant 🙂', rating: 5, image: '/img2.png' },
    { name: 'Rimsha', meta: '24, Jaipur', quote: 'nice. helpful team.', rating: 4, image: '/img3.png' }
];

export default function TestimonialsSection() {
    const scrollRef = useRef(null);
    const [active, setActive] = useState(0);
    const getInitials = (name) => {
        if (!name) return '';
        const parts = name.trim().split(/\s+/);
        const first = parts[0]?.[0] || '';
        const second = parts[1]?.[0] || '';
        return (first + second).toUpperCase();
    };

    useEffect(() => {
        const container = scrollRef.current;
        if (!container) return;
        const onScroll = () => {
            const width = container.clientWidth;
            const idx = Math.round(container.scrollLeft / width);
            setActive(idx);
        };
        container.addEventListener('scroll', onScroll, { passive: true });
        return () => container.removeEventListener('scroll', onScroll);
    }, []);

    const scrollBySlides = (delta) => {
        const container = scrollRef.current;
        if (!container) return;
        const width = container.clientWidth;
        container.scrollTo({ left: (active + delta) * width, behavior: 'smooth' });
    };

    return (
        <section className="py-10 md:py-16 bg-gradient-to-r from-[#FFF8F8] to-white">
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between mb-5 md:mb-8">
                    <h2 className="font-headline text-xl md:text-3xl">Stories of Healing</h2>
                    <div className="hidden md:flex items-center gap-2">
                        <button aria-label="Previous" onClick={() => scrollBySlides(-1)} className="p-2 rounded-full border text-gray-600 hover:text-femure-primary hover:border-femure-primary transition">
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button aria-label="Next" onClick={() => scrollBySlides(1)} className="p-2 rounded-full border text-gray-600 hover:text-femure-primary hover:border-femure-primary transition">
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Carousel */}
                <div className="relative">
                    <div
                        ref={scrollRef}
                        className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar"
                        style={{ scrollBehavior: 'smooth' }}
                    >
                        {testimonials.map((t, i) => {
                            const clampClass = i % 3 === 0 ? '' : i % 3 === 1 ? 'line-clamp-3' : 'line-clamp-2';
                            return (
                                <div key={i} className="min-w-full md:min-w-[50%] lg:min-w-[33.3333%] pr-3 md:pr-4 snap-start">
                                    <div className="bg-white p-4 md:p-8 rounded-2xl shadow-sm h-full">
                                        <div className="flex items-center mb-3 md:mb-4">
                                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full mr-3 md:mr-4 flex items-center justify-center text-white font-semibold bg-gradient-to-br from-femure-primary to-femure-secondary">
                                                <span>{getInitials(t.name)}</span>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900 text-sm md:text-base">{t.name}</h4>
                                                <p className="text-[10px] md:text-xs text-gray-500">{t.meta}</p>
                                                <div className="flex text-yellow-400 mt-0.5 md:mt-1">
                                                    {Array.from({ length: t.rating }).map((_, j) => (
                                                        <Star key={j} className="w-3.5 h-3.5 md:w-4 md:h-4 fill-current" />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <p className={`text-gray-700 leading-relaxed text-sm md:text-base ${clampClass}`}>{`"${t.quote}"`}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Dots */}
                    <div className="flex justify-center gap-2 mt-6">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                aria-label={`Go to slide ${i + 1}`}
                                onClick={() => {
                                    const container = scrollRef.current;
                                    if (!container) return;
                                    container.scrollTo({ left: i * container.clientWidth, behavior: 'smooth' });
                                }}
                                className={`w-2.5 h-2.5 rounded-full transition-all ${i === active ? 'bg-femure-primary scale-110' : 'bg-gray-300 hover:bg-gray-400'}`}
                            />
                        ))}
                    </div>

                    {/* Mobile arrows */}
                    <div className="flex md:hidden justify-center gap-4 mt-4">
                        <button aria-label="Previous" onClick={() => scrollBySlides(-1)} className="px-3 py-2 rounded-full border text-gray-600 hover:text-femure-primary hover:border-femure-primary transition">
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button aria-label="Next" onClick={() => scrollBySlides(1)} className="px-3 py-2 rounded-full border text-gray-600 hover:text-femure-primary hover:border-femure-primary transition">
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}