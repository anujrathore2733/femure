'use client';

import { Phone } from 'react-feather';

export default function FloatingCallButton() {
    const handleCall = () => {
        // You can replace this with your actual phone number
        window.open('tel:+91-9876543210', '_self');
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            {/* Text - Always visible on mobile, hover on desktop */}
            <div className="bg-femure-primary text-white px-2 py-1 rounded-md shadow-lg mb-2 text-xs font-medium whitespace-nowrap opacity-100 md:opacity-0 md:hover:opacity-100 transition-opacity duration-300">
                Talk to Expert
            </div>
            
            {/* Call Button */}
            <button
                onClick={handleCall}
                className="bg-femure-primary hover:bg-femure-accent text-white p-3 md:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 animate-pulse"
                aria-label="Call us now"
            >
                <Phone className="w-5 h-5 md:w-6 md:h-6" />
            </button>
        </div>
    );
}
