'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
    Star, 
    MapPin, 
    Clock, 
    Award, 
    ArrowLeft, 
    MessageCircle,
    CheckCircle,
    Book,
    Heart,
    BookOpen
} from 'react-feather';
import ConsultationModal from '@/components/ConsultationModal';

interface Doctor {
    id: string;
    name: string;
    firstName: string;
    lastName: string;
    specialty: string;
    rating: number;
    experience: string;
    patients: string;
    languages: string[];
    quote: string;
    image: string;
    education: Array<{
        degree: string;
        institution: string;
        year: string;
    }>;
    specializations: string[];
    achievements: Array<{
        title: string;
        organization?: string;
        description?: string;
        year: string;
    }>;
    approach: string;
    consultationFee: string;
    availability: string;
    location: string;
    bio: string;
    testimonials: Array<{
        name: string;
        condition: string;
        rating: number;
        text: string;
        date: string;
    }>;
    socialMedia?: {
        linkedin?: string;
        twitter?: string;
        instagram?: string;
        facebook?: string;
    };
    certifications?: string[];
    awards?: string[];
}

interface DoctorDetailClientProps {
    doctor: Doctor;
}

export default function DoctorDetailClient({ doctor }: DoctorDetailClientProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50">
            {/* Back Button */}
            <div className="container mx-auto px-6 pt-6">
                <Link
                    href="/doctors"
                    className="inline-flex items-center text-femure-primary hover:text-femure-accent transition-colors duration-300"
                >
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    Back to All Doctors
                </Link>
            </div>

            {/* Doctor Header */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Doctor Image & Basic Info */}
                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                                <div className="relative h-80">
                                    <Image
                                        src={doctor.image}
                                        alt={doctor.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h1 className="font-headline text-3xl text-gray-900 mb-2">{doctor.name}</h1>
                                    <p className="text-femure-primary font-semibold text-lg mb-4">{doctor.specialty}</p>
                                    
                                    <div className="flex items-center mb-4">
                                        <Star className="w-6 h-6 fill-current text-yellow-400 mr-2" />
                                        <span className="text-2xl font-bold">{doctor.rating}★</span>
                                        <span className="text-gray-600 ml-2">({doctor.patients} patients)</span>
                                    </div>

                                    <blockquote className="text-gray-600 italic border-l-4 border-femure-primary pl-4 mb-6">
                                        &ldquo;{doctor.quote}&rdquo;
                                    </blockquote>

                                    <button
                                        onClick={openModal}
                                        className="w-full bg-femure-primary hover:bg-femure-accent text-white py-4 px-6 rounded-full font-semibold transition-all duration-300 mb-4"
                                    >
                                        Book Consultation - {doctor.consultationFee}
                                    </button>

                                    <div className="space-y-3 text-sm">
                                        <div className="flex items-center text-gray-600">
                                            <Clock className="w-4 h-4 mr-3 text-femure-primary" />
                                            <span>{doctor.availability}</span>
                                        </div>
                                        <div className="flex items-center text-gray-600">
                                            <MapPin className="w-4 h-4 mr-3 text-femure-primary" />
                                            <span>{doctor.location}</span>
                                        </div>
                                        <div className="flex items-center text-gray-600">
                                            <MessageCircle className="w-4 h-4 mr-3 text-femure-primary" />
                                            <span>{doctor.languages.join(', ')}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Doctor Details */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* About */}
                            <div className="bg-white rounded-2xl shadow-lg p-8">
                                <h2 className="font-headline text-2xl text-gray-900 mb-4 flex items-center">
                                    <Heart className="w-6 h-6 mr-3 text-femure-primary" />
                                    About Dr. {doctor.name.split(' ')[1]}
                                </h2>
                                <p className="text-gray-700 leading-relaxed mb-6">{doctor.bio}</p>
                                <p className="text-gray-700 leading-relaxed">{doctor.approach}</p>
                            </div>

                            {/* Education */}
                            <div className="bg-white rounded-2xl shadow-lg p-8">
                                <h2 className="font-headline text-2xl text-gray-900 mb-6 flex items-center">
                                    <Book className="w-6 h-6 mr-3 text-femure-primary" />
                                    Education & Qualifications
                                </h2>
                                <ul className="space-y-4">
                                    {doctor.education.map((edu, index) => (
                                        <li key={index} className="flex items-start">
                                            <CheckCircle className="w-5 h-5 text-femure-primary mr-3 mt-1 flex-shrink-0" />
                                            <div className="text-gray-700">
                                                <div className="font-semibold">{edu.degree}</div>
                                                <div className="text-sm text-gray-600">{edu.institution}</div>
                                                <div className="text-sm text-femure-primary">({edu.year})</div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Specializations */}
                            <div className="bg-white rounded-2xl shadow-lg p-8">
                                <h2 className="font-headline text-2xl text-gray-900 mb-6 flex items-center">
                                    <BookOpen className="w-6 h-6 mr-3 text-femure-primary" />
                                    Specializations
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {doctor.specializations.map((spec, index) => (
                                        <div key={index} className="flex items-center">
                                            <CheckCircle className="w-5 h-5 text-femure-primary mr-3 flex-shrink-0" />
                                            <span className="text-gray-700">{spec}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Achievements */}
                            <div className="bg-white rounded-2xl shadow-lg p-8">
                                <h2 className="font-headline text-2xl text-gray-900 mb-6 flex items-center">
                                    <Award className="w-6 h-6 mr-3 text-femure-primary" />
                                    Achievements & Recognition
                                </h2>
                                <ul className="space-y-4">
                                    {doctor.achievements.map((achievement, index) => (
                                        <li key={index} className="flex items-start">
                                            <Award className="w-5 h-5 text-femure-primary mr-3 mt-1 flex-shrink-0" />
                                            <div className="text-gray-700">
                                                <div className="font-semibold">{achievement.title}</div>
                                                {achievement.organization && (
                                                    <div className="text-sm text-gray-600">{achievement.organization}</div>
                                                )}
                                                {achievement.description && (
                                                    <div className="text-sm text-gray-600">{achievement.description}</div>
                                                )}
                                                <div className="text-sm text-femure-primary">({achievement.year})</div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Patient Testimonials */}
                            <div className="bg-white rounded-2xl shadow-lg p-8">
                                <h2 className="font-headline text-2xl text-gray-900 mb-6 flex items-center">
                                    <Star className="w-6 h-6 mr-3 text-femure-primary" />
                                    Patient Testimonials
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {doctor.testimonials.map((testimonial, index) => (
                                        <div key={index} className="bg-gray-50 rounded-xl p-6">
                                            <div className="flex items-center mb-3">
                                                {[...Array(testimonial.rating)].map((_, i) => (
                                                    <Star key={i} className="w-4 h-4 fill-current text-yellow-400" />
                                                ))}
                                            </div>
                                            <p className="text-gray-700 mb-3 italic">&ldquo;{testimonial.text}&rdquo;</p>
                                            <div className="text-sm text-gray-600">
                                                <span className="font-semibold">{testimonial.name}</span>
                                                <span className="text-femure-primary"> • {testimonial.condition}</span>
                                                <div className="text-xs text-gray-500 mt-1">{testimonial.date}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-femure-primary/10 to-femure-secondary/10">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="font-headline text-3xl md:text-4xl text-gray-900 mb-6">
                        Ready to Start Your Healing Journey with Dr. {doctor.name.split(' ')[1]}?
                    </h2>
                    <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                        Book your consultation today and take the first step towards personalized, natural healing.
                    </p>
                    <button
                        onClick={openModal}
                        className="bg-femure-primary hover:bg-femure-accent text-white py-4 px-10 rounded-full font-semibold transition-all duration-300 text-lg"
                    >
                        Book Consultation Now - {doctor.consultationFee}
                    </button>
                </div>
            </section>

            {/* Consultation Modal */}
            <ConsultationModal 
                isOpen={isModalOpen}
                onClose={closeModal}
            />
        </div>
    );
}
