'use client';

import { useState } from 'react';
import { User, Phone, Send, CheckCircle, AlertCircle } from 'react-feather';
import { submitToLeadSquared, validatePhoneNumber } from '@/lib/leadsquared';

export default function InquiryForm() {
    const [formData, setFormData] = useState({
        name: '',
        mobile: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submitError, setSubmitError] = useState('');

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
            const result = await submitToLeadSquared(formData, 'quick-inquiry');
            
            if (result.success) {
                setIsSubmitted(true);
                setFormData({ name: '', mobile: '' });
                console.log('Inquiry submitted successfully:', result);
            } else {
                throw new Error(result.message || 'Failed to submit inquiry');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitError('Failed to submit inquiry. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const resetForm = () => {
        setIsSubmitted(false);
        setFormData({ name: '', mobile: '' });
        setErrors({});
        setSubmitError('');
    };

    if (isSubmitted) {
        return (
            <section className="py-6 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="max-w-sm mx-auto text-center">
                        <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-3" />
                        <h3 className="text-sm font-medium text-gray-900 mb-2">Thank You!</h3>
                        <p className="text-xs text-gray-600 mb-3">We'll contact you soon.</p>
                        <button
                            onClick={resetForm}
                            className="bg-femure-primary hover:bg-femure-accent text-white py-1 px-3 rounded text-xs transition duration-200"
                        >
                            Send Another
                        </button>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="py-6 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="max-w-sm mx-auto">
                    <div className="text-center mb-4">
                        <h2 className="text-sm font-medium text-gray-900 mb-1">
                            Quick Inquiry
                        </h2>
                        <p className="text-xs text-gray-600">
                            We'll get back to you.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-3">
                        {/* Name Field */}
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <User className="h-4 w-4 text-gray-400" />
                            </div>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                                className={`block w-full pl-10 pr-3 py-2.5 bg-white border-0 rounded-full shadow-sm focus:ring-2 focus:ring-femure-primary focus:outline-none text-sm placeholder-gray-500 ${
                                    errors.name ? 'ring-2 ring-red-500' : ''
                                }`}
                                placeholder="Your name"
                            />
                            {errors.name && (
                                <p className="text-red-500 text-xs mt-1 flex items-center">
                                    <AlertCircle className="w-3 h-3 mr-1" />
                                    {errors.name}
                                </p>
                            )}
                        </div>

                        {/* Mobile Field */}
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Phone className="h-4 w-4 text-gray-400" />
                            </div>
                            <input
                                type="tel"
                                name="mobile"
                                value={formData.mobile}
                                onChange={handleInputChange}
                                required
                                maxLength="10"
                                className={`block w-full pl-10 pr-3 py-2.5 bg-white border-0 rounded-full shadow-sm focus:ring-2 focus:ring-femure-primary focus:outline-none text-sm placeholder-gray-500 ${
                                    errors.mobile ? 'ring-2 ring-red-500' : ''
                                }`}
                                placeholder="10-digit mobile number"
                            />
                            {errors.mobile && (
                                <p className="text-red-500 text-xs mt-1 flex items-center">
                                    <AlertCircle className="w-3 h-3 mr-1" />
                                    {errors.mobile}
                                </p>
                            )}
                        </div>

                        {submitError && (
                            <div className="bg-red-50 border border-red-200 rounded-lg p-2">
                                <p className="text-red-600 text-xs flex items-center">
                                    <AlertCircle className="w-3 h-3 mr-1" />
                                    {submitError}
                                </p>
                            </div>
                        )}

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-femure-primary hover:bg-femure-accent text-white py-2.5 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-sm font-semibold disabled:opacity-50 flex items-center justify-center"
                        >
                            {isSubmitting ? (
                                <>
                                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                                    Sending...
                                </>
                            ) : (
                                <>
                                    <Send className="w-4 h-4 mr-2" />
                                    Send Inquiry
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}