'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Star, MapPin, Clock, Users, Award, ArrowRight } from 'react-feather';
import { getAllDoctors } from '@/data/doctors';

export default function DoctorsPage() {
    const [selectedSpecialty, setSelectedSpecialty] = useState('all');
    const doctors = getAllDoctors();

    const specialties = [
        'all',
        "Women's Health",
        'Hormone Expert',
        'Fertility & Wellness'
    ];

    const filteredDoctors = selectedSpecialty === 'all' 
        ? doctors 
        : doctors.filter(doctor => 
            doctor.specialty.toLowerCase().includes(selectedSpecialty.toLowerCase())
        );

    return (
        <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50">
            {/* Header Section */}
            <section className="py-16 bg-gradient-to-r from-femure-primary to-femure-accent text-white">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="font-headline text-4xl md:text-5xl mb-6">
                        Meet Our Expert Doctors
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
                        Experienced homeopathic specialists dedicated to your health and wellness journey
                    </p>
                </div>
            </section>

            {/* Filter Section */}
            <section className="py-8 bg-white border-b">
                <div className="container mx-auto px-6">
                    <div className="flex flex-wrap justify-center gap-4">
                        {specialties.map((specialty) => (
                            <button
                                key={specialty}
                                onClick={() => setSelectedSpecialty(specialty)}
                                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                                    selectedSpecialty === specialty
                                        ? 'bg-femure-primary text-white shadow-lg'
                                        : 'bg-gray-100 text-gray-700 hover:bg-femure-primary/10'
                                }`}
                            >
                                {specialty === 'all' ? 'All Doctors' : specialty}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Doctors Grid */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredDoctors.map((doctor) => (
                            <div key={doctor.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                                {/* Doctor Image */}
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={doctor.image}
                                        alt={doctor.name}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                    <div className="absolute bottom-4 left-4 text-white">
                                        <div className="flex items-center mb-2">
                                            <Star className="w-5 h-5 fill-current text-yellow-400 mr-1" />
                                            <span className="font-semibold">{doctor.rating}★</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Doctor Info */}
                                <div className="p-6">
                                    <h3 className="font-headline text-2xl text-gray-900 mb-2">{doctor.name}</h3>
                                    <p className="text-femure-primary font-semibold mb-4">{doctor.specialty}</p>
                                    
                                    {/* Key Stats */}
                                    <div className="grid grid-cols-2 gap-4 mb-6">
                                        <div className="flex items-center text-sm text-gray-600">
                                            <Users className="w-4 h-4 mr-2 text-femure-primary" />
                                            <span>{doctor.patients} patients</span>
                                        </div>
                                        <div className="flex items-center text-sm text-gray-600">
                                            <Award className="w-4 h-4 mr-2 text-femure-primary" />
                                            <span>{doctor.experience}</span>
                                        </div>
                                        <div className="flex items-center text-sm text-gray-600">
                                            <MapPin className="w-4 h-4 mr-2 text-femure-primary" />
                                            <span>{doctor.location}</span>
                                        </div>
                                        <div className="flex items-center text-sm text-gray-600">
                                            <Clock className="w-4 h-4 mr-2 text-femure-primary" />
                                            <span>{doctor.consultationFee}</span>
                                        </div>
                                    </div>

                                    {/* Quote */}
                                    <blockquote className="text-gray-600 italic mb-6 border-l-4 border-femure-primary pl-4">
                                        &ldquo;{doctor.quote}&rdquo;
                                    </blockquote>

                                    {/* Specializations */}
                                    <div className="mb-6">
                                        <h4 className="font-semibold text-gray-900 mb-2">Specializations:</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {doctor.specializations.slice(0, 3).map((spec, index) => (
                                                <span key={index} className="bg-femure-primary/10 text-femure-primary px-3 py-1 rounded-full text-sm">
                                                    {spec}
                                                </span>
                                            ))}
                                            {doctor.specializations.length > 3 && (
                                                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                                                    +{doctor.specializations.length - 3} more
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    {/* View Profile Button */}
                                    <Link
                                        href={`/doctors/${doctor.id}`}
                                        className="w-full bg-femure-primary hover:bg-femure-accent text-white py-3 px-6 rounded-full font-semibold transition-all duration-300 flex items-center justify-center group"
                                    >
                                        View Full Profile
                                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-femure-primary/10 to-femure-secondary/10">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="font-headline text-3xl md:text-4xl text-gray-900 mb-6">
                        Ready to Start Your Healing Journey?
                    </h2>
                    <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                        Book a consultation with our expert doctors and take the first step towards personalized, natural healing.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/"
                            className="bg-femure-primary hover:bg-femure-accent text-white py-4 px-8 rounded-full font-semibold transition-all duration-300"
                        >
                            Book Consultation
                        </Link>
                        <Link
                            href="/"
                            className="border-2 border-femure-primary text-femure-primary hover:bg-femure-primary hover:text-white py-4 px-8 rounded-full font-semibold transition-all duration-300"
                        >
                            Back to Home
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
