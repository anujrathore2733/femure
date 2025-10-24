import { Star, ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from 'react-feather';
import { useRef, useState, useEffect } from 'react';

const testimonials = [
    { 
        name: 'Priya Sharma', 
        meta: '28, Mumbai', 
        quote: 'I was struggling with irregular periods for 2 years. Every month I would worry about when it would come, when it wouldn\'t. The homeopathic medicine the doctor gave me is actually working. Now my cycle is regular and cramps have reduced significantly. The best part is there are no side effects. My mom is also happy that I finally found a natural solution.', 
        rating: 5, 
        image: '/img1.png' 
    },
    { 
        name: 'Ananya Singh', 
        meta: '25, Delhi', 
        quote: 'PCOS ke karan weight gain aur acne dono problems thi. Main bahut frustrated thi kyunki koi bhi treatment kaam nahi kar raha tha. Yahan jo personalized approach hai, woh actually different hai. Nutritionist ne jo diet plan diya aur doctor ne jo medicines di, dono milake 4 months mein maine 8 kg weight loss kiya hai. Acne bhi clear ho raha hai gradually. Ab confidence aa raha hai.', 
        rating: 5, 
        image: '/img2.png' 
    },
    { 
        name: 'Kavya Reddy', 
        meta: '32, Bangalore', 
        quote: 'I started experiencing menopause symptoms and was completely confused. Hot flashes, mood swings, sleep issues - everything at once. The approach the doctor took is very gentle and effective. Now I\'m sleeping better and mood swings are under control. My family can also see that I\'m calmer than before. I\'m thankful that I got help in a natural way.', 
        rating: 4, 
        image: '/img3.png' 
    },
    { 
        name: 'Meera Patel', 
        meta: '30, Ahmedabad', 
        quote: 'Pregnancy ke baad weight gain aur hormonal imbalance dono issues the. Main bahut tired feel karti thi aur energy level zero tha. Jo treatment plan diya gaya, woh step by step follow kiya. 6 months mein maine apna energy level wapas paaya hai. Weight bhi gradually kam ho raha hai aur skin bhi glow aa raha hai. Husband bhi notice kar raha hai ki main pehle se zyada active hun.', 
        rating: 5, 
        image: '/img4.png' 
    },
    { 
        name: 'Ritika Agarwal', 
        meta: '26, Pune', 
        quote: 'I had irregular periods since college. Due to stress and unhealthy lifestyle, the condition got worse. The holistic approach here actually works. Lifestyle changes, proper nutrition and homeopathic medicines combined, I started seeing improvement in 3 months. Now my cycle is regular and PMS symptoms are also reduced. My friends also ask what I did.', 
        rating: 4, 
        image: '/img1.png' 
    },
    { 
        name: 'Shruti Joshi', 
        meta: '29, Hyderabad', 
        quote: 'Thyroid ki problem thi aur periods bhi irregular the. Main bahut worried thi kyunki future mein pregnancy ke liye ye sab issues ho sakte the. Doctor ne jo treatment diya, woh bahut comprehensive hai. Thyroid levels improve ho rahe hain aur periods bhi regular hone lage hain. Ab main confident feel karti hun ki future mein koi problem nahi hogi. Family bhi supportive hai aur sab khush hain.', 
        rating: 5, 
        image: '/img2.png' 
    },
    { 
        name: 'Neha Gupta', 
        meta: '34, Kolkata', 
        quote: 'Due to work stress and personal life pressure, I developed hormonal imbalance. Mood swings, anxiety, and sleep issues - everything together. The counseling and treatment I received is actually helpful. Now I\'m better at managing stress and sleep quality has also improved. My performance at office is also better because my mind is clear. Colleagues are also noticing the positive change.', 
        rating: 4, 
        image: '/img3.png' 
    },
    { 
        name: 'Pooja Singh', 
        meta: '27, Jaipur', 
        quote: 'Shaadi ke baad weight gain aur PCOS dono problems develop ho gayi thi. Main bahut conscious thi aur confidence level low tha. Jo personalized plan diya gaya, woh actually realistic aur achievable hai. 5 months mein maine significant improvement dekha hai. Weight loss ho raha hai, skin better ho raha hai, aur periods bhi regular hain. Husband bhi supportive hai aur sab khush hain.', 
        rating: 5, 
        image: '/img4.png' 
    },
    { 
        name: 'Aisha Khan', 
        meta: '31, Lucknow', 
        quote: 'I had postpartum depression and hormonal changes. I was feeling very overwhelmed and had problems with baby care too. The support system I got here is actually helpful. Counseling sessions and homeopathic treatment combined, I improved my mental health in 4 months. Now I\'m becoming a better mother and family life is also smooth.', 
        rating: 4, 
        image: '/img1.png' 
    },
    { 
        name: 'Sana Sheikh', 
        meta: '28, Mumbai', 
        quote: 'Endometriosis ki problem thi aur period pain unbearable tha. Har month 3-4 din bed rest karna padta tha. Jo treatment approach hai, woh actually effective hai. Pain level significantly kam ho gaya hai aur quality of life improve ho gayi hai. Ab main normal routine follow kar sakti hun aur work life bhi better hai. Family bhi relieved hai ki finally koi solution mil gaya.', 
        rating: 5, 
        image: '/img2.png' 
    }
];

export default function TestimonialsSection() {
    const scrollRef = useRef(null);
    const [active, setActive] = useState(0);
    const [expandedCards, setExpandedCards] = useState(new Set());
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

    const toggleExpanded = (index) => {
        const newExpanded = new Set(expandedCards);
        if (newExpanded.has(index)) {
            newExpanded.delete(index);
        } else {
            newExpanded.add(index);
        }
        setExpandedCards(newExpanded);
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
                            const isExpanded = expandedCards.has(i);
                            const shouldTruncate = t.quote.length > 150;
                            const displayText = isExpanded || !shouldTruncate ? t.quote : t.quote.substring(0, 150) + '...';
                            
                            return (
                                <div key={i} className="min-w-full md:min-w-[50%] lg:min-w-[33.3333%] pr-3 md:pr-4 snap-start mb-4">
                                    <div className="bg-white p-3 md:p-6 rounded-2xl shadow-sm h-full">
                                        <div className="flex items-center mb-2 md:mb-3">
                                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full mr-2 md:mr-3 flex items-center justify-center text-white font-semibold bg-femure-primary ring-1 ring-white/60 shadow-sm">
                                                <span className="text-xs md:text-sm">{getInitials(t.name)}</span>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900 text-xs md:text-sm">{t.name}</h4>
                                                <p className="text-[9px] md:text-[10px] text-gray-500">{t.meta}</p>
                                                <div className="flex text-yellow-400 mt-0.5">
                                                    {Array.from({ length: t.rating }).map((_, j) => (
                                                        <Star key={j} className="w-3 h-3 md:w-3.5 md:h-3.5 fill-current" />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-gray-700 leading-relaxed text-xs md:text-sm mb-2">{`"${displayText}"`}</p>
                                        {shouldTruncate && (
                                            <button
                                                onClick={() => toggleExpanded(i)}
                                                className="flex items-center text-femure-primary text-[10px] font-medium hover:text-femure-accent transition-colors"
                                            >
                                                {isExpanded ? (
                                                    <>
                                                        <span>See less</span>
                                                        <ChevronUp className="w-2.5 h-2.5 ml-1" />
                                                    </>
                                                ) : (
                                                    <>
                                                        <span>See more</span>
                                                        <ChevronDown className="w-2.5 h-2.5 ml-1" />
                                                    </>
                                                )}
                                            </button>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Minimal progress tracker */}
                    <div className="flex justify-center mt-6">
                        <div className="relative w-20 h-1.5 bg-gray-200 rounded-full" aria-hidden="true">
                            <div
                                className="absolute top-0 h-full bg-femure-primary rounded-full transition-all duration-300"
                                style={{
                                    width: `${100 / testimonials.length}%`,
                                    left: `${(active / Math.max(testimonials.length - 1, 1)) * 100}%`
                                }}
                            />
                        </div>
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