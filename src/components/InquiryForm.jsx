'use client';

import { useState } from 'react';
import { User, Phone, Send } from 'react-feather';

export default function InquiryForm() {
    const [formData, setFormData] = useState({
        name: '',
        mobile: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            console.log('Inquiry form submitted:', formData);
            await new Promise(resolve => setTimeout(resolve, 500));
            setIsSubmitted(true);
            setFormData({ name: '', mobile: '' });
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Error submitting. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const resetForm = () => {
        setIsSubmitted(false);
    };

    if (isSubmitted) {
        return (
            <section className="py-6 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="max-w-sm mx-auto text-center">
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
                                className="block w-full pl-10 pr-3 py-2.5 bg-white border-0 rounded-full shadow-sm focus:ring-2 focus:ring-femure-primary focus:outline-none text-sm placeholder-gray-500"
                                placeholder="Your name"
                            />
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
                                className="block w-full pl-10 pr-3 py-2.5 bg-white border-0 rounded-full shadow-sm focus:ring-2 focus:ring-femure-primary focus:outline-none text-sm placeholder-gray-500"
                                placeholder="Mobile number"
                            />
                        </div>

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