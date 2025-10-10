'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { X, Phone, User, MessageCircle, Video, CheckCircle, AlertCircle } from 'react-feather';
import { submitToLeadSquared, validatePhoneNumber, getFormType } from '@/lib/leadsquared';

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

export default function ConsultationModal({ isOpen, onClose, selectedDoctor = null, selectedCondition = null }) {
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        condition: '',
        consultationType: 'video'
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submitError, setSubmitError] = useState('');

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    useEffect(() => {
        if (selectedCondition) {
            setFormData(prev => ({
                ...prev,
                condition: selectedCondition.title
            }));
        }
    }, [selectedCondition]);

    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };
        
        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
        }
        
        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, [isOpen, onClose]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }
        
        if (!formData.mobile.trim()) {
            newErrors.mobile = 'Mobile number is required';
        } else if (!validatePhoneNumber(formData.mobile)) {
            newErrors.mobile = 'Please enter a valid 10-digit mobile number';
        }
        
        if (selectedDoctor && !formData.condition) {
            newErrors.condition = 'Please select a condition';
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }
        
        setIsSubmitting(true);
        setSubmitError('');
        
        try {
            const formType = getFormType(selectedDoctor, selectedCondition);
            const additionalData = {
                mx_SelectedDoctor: selectedDoctor ? selectedDoctor.name : '',
                mx_SelectedCondition: selectedCondition ? selectedCondition.title : '',
                mx_DoctorSpecialty: selectedDoctor ? selectedDoctor.specialty : '',
                mx_ConditionTagline: selectedCondition ? selectedCondition.tagline : '',
            };
            
            const result = await submitToLeadSquared(formData, formType, additionalData);
            
            if (result.success) {
                setIsSubmitted(true);
                console.log('Lead submitted successfully:', result);
            } else {
                throw new Error(result.message || 'Failed to submit consultation request');
            }
            
        } catch (error) {
            console.error('Consultation submission error:', error);
            setSubmitError('Failed to submit consultation request. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleClose = () => {
        setFormData({ name: '', mobile: '', condition: '', consultationType: 'video' });
        setErrors({});
        setSubmitError('');
        setIsSubmitted(false);
        setIsSubmitting(false);
        onClose();
    };

    const handleNewConsultation = () => {
        setIsSubmitted(false);
        setFormData({ name: '', mobile: '', condition: '', consultationType: 'video' });
        setErrors({});
        setSubmitError('');
    };

    if (!isOpen) return null;

    // Success state
    if (isSubmitted) {
        return (
            <div 
                className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center p-4"
                onClick={handleClose}
                style={{ 
                    position: 'fixed', 
                    top: 0, 
                    left: 0, 
                    right: 0, 
                    bottom: 0,
                    zIndex: 9999
                }}
            >
                <div 
                    className="bg-white rounded-xl shadow-2xl max-w-md w-full p-8 text-center"
                    onClick={(e) => e.stopPropagation()}
                >
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                    <p className="text-gray-600 mb-6">
                        Your consultation request has been submitted successfully. 
                        Our team will contact you within 24 hours.
                    </p>
                    <div className="flex space-x-3">
                        <button
                            onClick={handleClose}
                            className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition duration-300"
                        >
                            Close
                        </button>
                        <button
                            onClick={handleNewConsultation}
                            className="flex-1 px-4 py-2 bg-femure-primary text-white rounded-lg hover:bg-femure-accent transition duration-300"
                        >
                            Book Another
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center p-4"
            onClick={handleClose}
            style={{ 
                position: 'fixed', 
                top: 0, 
                left: 0, 
                right: 0, 
                bottom: 0,
                zIndex: 9999
            }}
        >
            <div 
                className="bg-white rounded-xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
            >
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
                        ) : selectedCondition ? (
                            <>
                                <div className="w-15 h-15 rounded-full bg-femure-primary/10 flex items-center justify-center">
                                    <MessageCircle className="w-8 h-8 text-femure-primary" />
                                </div>
                                <div>
                                    <h3 className="font-headline text-xl text-femure-primary">Consultation for {selectedCondition.title}</h3>
                                    <p className="text-femure-accent text-sm">{selectedCondition.tagline}</p>
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
                        {selectedDoctor ? 'Book Your Consultation' : selectedCondition ? `Get Expert Help for ${selectedCondition.title}` : 'Get Expert Consultation'}
                    </h4>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Consultation Type Selector */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-3">
                                Consultation Type *
                            </label>
                            <div className="grid grid-cols-2 gap-3">
                                <button
                                    type="button"
                                    onClick={() => setFormData(prev => ({ ...prev, consultationType: 'video' }))}
                                    className={`flex items-center justify-center space-x-2 px-4 py-3 rounded-lg border-2 transition-all duration-300 ${
                                        formData.consultationType === 'video'
                                            ? 'border-femure-primary bg-femure-primary/5 text-femure-primary'
                                            : 'border-gray-300 text-gray-600 hover:border-femure-primary/50'
                                    }`}
                                >
                                    <Video className="w-5 h-5" />
                                    <span className="font-medium">Video</span>
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setFormData(prev => ({ ...prev, consultationType: 'audio' }))}
                                    className={`flex items-center justify-center space-x-2 px-4 py-3 rounded-lg border-2 transition-all duration-300 ${
                                        formData.consultationType === 'audio'
                                            ? 'border-femure-primary bg-femure-primary/5 text-femure-primary'
                                            : 'border-gray-300 text-gray-600 hover:border-femure-primary/50'
                                    }`}
                                >
                                    <Phone className="w-5 h-5" />
                                    <span className="font-medium">Audio</span>
                                </button>
                            </div>
                        </div>

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
                                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-femure-primary focus:border-transparent transition duration-300 ${
                                    errors.name ? 'border-red-500' : 'border-gray-300'
                                }`}
                                placeholder="Enter your full name"
                            />
                            {errors.name && (
                                <p className="text-red-500 text-sm mt-1 flex items-center">
                                    <AlertCircle className="w-4 h-4 mr-1" />
                                    {errors.name}
                                </p>
                            )}
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
                                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-femure-primary focus:border-transparent transition duration-300 ${
                                    errors.mobile ? 'border-red-500' : 'border-gray-300'
                                }`}
                                placeholder="Enter your 10-digit mobile number"
                                maxLength="10"
                            />
                            {errors.mobile && (
                                <p className="text-red-500 text-sm mt-1 flex items-center">
                                    <AlertCircle className="w-4 h-4 mr-1" />
                                    {errors.mobile}
                                </p>
                            )}
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
                                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-femure-primary focus:border-transparent transition duration-300 ${
                                        errors.condition ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                >
                                    <option value="">Select your condition</option>
                                    {conditions.map((condition, index) => (
                                        <option key={index} value={condition}>
                                            {condition}
                                        </option>
                                    ))}
                                </select>
                                {errors.condition && (
                                    <p className="text-red-500 text-sm mt-1 flex items-center">
                                        <AlertCircle className="w-4 h-4 mr-1" />
                                        {errors.condition}
                                    </p>
                                )}
                            </div>
                        )}

                        {submitError && (
                            <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                                <p className="text-red-600 text-sm flex items-center">
                                    <AlertCircle className="w-4 h-4 mr-2" />
                                    {submitError}
                                </p>
                            </div>
                        )}

                        <div className="flex space-x-3 pt-4">
                            <button
                                type="button"
                                onClick={handleClose}
                                disabled={isSubmitting}
                                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition duration-300 disabled:opacity-50"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="flex-1 px-4 py-2 bg-femure-primary text-white rounded-lg hover:bg-femure-accent transition duration-300 disabled:opacity-50 flex items-center justify-center"
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                                        Submitting...
                                    </>
                                ) : (
                                    selectedDoctor ? 'Book Now' : 'Get Consultation'
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
