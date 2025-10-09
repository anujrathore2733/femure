'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, Phone, User, MessageCircle } from 'react-feather';

const conditions = [
    'PCOS and Hormonal Imbalances',
    'Menstrual Pain and Irregular Periods',
    'Menopausal Symptoms',
    'Infertility Concerns',
    'Premenstrual Syndrome (PMS)',
    'Leucorrhea',
    'Breast Complaints',
    'General feminine health issues'
];

export default function ConsultationModal({ isOpen, onClose, selectedDoctor = null }) {
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        condition: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the data to your backend
        console.log('Consultation request:', {
            doctor: selectedDoctor,
            patient: formData
        });
        
        // Show success message
        alert('Consultation request submitted successfully! We will contact you soon.');
        handleClose();
    };

    const handleClose = () => {
        setFormData({ name: '', mobile: '', condition: '' });
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
                {/* Modal Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                    <div className="flex items-center space-x-4">
                        {selectedDoctor ? (
                            <>
                                <Image 
                                    src={selectedDoctor.image} 
                                    alt={selectedDoctor.name} 
                                    width={60} 
                                    height={60} 
                                    className="w-15 h-15 rounded-full object-cover border-2 border-femure-secondary" 
                                />
                                <div>
                                    <h3 className="font-headline text-xl text-femure-primary">{selectedDoctor.name}</h3>
                                    <p className="text-femure-accent text-sm">{selectedDoctor.specialty}</p>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="w-15 h-15 rounded-full bg-femure-primary flex items-center justify-center">
                                    <User className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-headline text-xl text-femure-primary">Book Consultation</h3>
                                    <p className="text-femure-accent text-sm">Get expert advice</p>
                                </div>
                            </>
                        )}
                    </div>
                    <button 
                        onClick={handleClose}
                        className="text-gray-400 hover:text-gray-600 transition duration-300"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Modal Body */}
                <div className="p-6">
                    <h4 className="font-headline text-lg mb-4 text-femure-primary">
                        {selectedDoctor ? 'Book Your Consultation' : 'Get Expert Consultation'}
                    </h4>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                Full Name *
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-femure-primary focus:border-transparent transition duration-300"
                                placeholder="Enter your full name"
                            />
                        </div>

                        <div>
                            <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-2">
                                Mobile Number *
                            </label>
                            <input
                                type="tel"
                                id="mobile"
                                name="mobile"
                                value={formData.mobile}
                                onChange={handleInputChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-femure-primary focus:border-transparent transition duration-300"
                                placeholder="Enter your mobile number"
                            />
                        </div>

                        {selectedDoctor && (
                            <div>
                                <label htmlFor="condition" className="block text-sm font-medium text-gray-700 mb-2">
                                    Condition/Concern *
                                </label>
                                <select
                                    id="condition"
                                    name="condition"
                                    value={formData.condition}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-femure-primary focus:border-transparent transition duration-300"
                                >
                                    <option value="">Select your condition</option>
                                    {conditions.map((condition, index) => (
                                        <option key={index} value={condition}>
                                            {condition}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        )}

                        <div className="flex space-x-3 pt-4">
                            <button
                                type="button"
                                onClick={handleClose}
                                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition duration-300"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="flex-1 px-4 py-2 bg-femure-primary text-white rounded-lg hover:bg-femure-accent transition duration-300"
                            >
                                {selectedDoctor ? 'Book Now' : 'Get Consultation'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
