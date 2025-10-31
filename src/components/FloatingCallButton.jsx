'use client';

import { useState, useEffect, useRef } from 'react';
import { Phone } from 'react-feather';

export default function FloatingCallButton() {
    const [isTooltipVisible, setIsTooltipVisible] = useState(true);
    const timeoutsRef = useRef([]);

    useEffect(() => {
        const clearAllTimeouts = () => {
            timeoutsRef.current.forEach(timeout => clearTimeout(timeout));
            timeoutsRef.current = [];
        };

        const showAndHide = () => {
            // Show tooltip
            setIsTooltipVisible(true);
            
            // Hide after 3 seconds
            const hideTimeout = setTimeout(() => {
                setIsTooltipVisible(false);
                
                // Show again after 5 seconds (total 8 second cycle)
                const showTimeout = setTimeout(() => {
                    showAndHide();
                }, 5000);
                
                timeoutsRef.current.push(showTimeout);
            }, 3000);
            
            timeoutsRef.current.push(hideTimeout);
        };

        // Start the cycle
        showAndHide();

        // Cleanup on unmount
        return () => {
            clearAllTimeouts();
        };
    }, []);

    const handleCall = () => {
        // You can replace this with your actual phone number
        window.open('tel:+91-9876543210', '_self');
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            {/* Speech Bubble Tooltip - Shows/hides with smooth zoom animation */}
            <div className={`speech-bubble mb-2 transition-all duration-1000 ease-in-out ${
                isTooltipVisible 
                    ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto' 
                    : 'opacity-0 scale-75 translate-y-4 pointer-events-none'
            }`}>
                <div className="bg-femure-primary text-white px-3 py-1.5 rounded-lg shadow-lg text-xs font-medium whitespace-nowrap">
                    Free discovery call
                </div>
            </div>
            
            {/* Call Button - Always visible */}
            <button
                onClick={handleCall}
                className="bg-femure-primary hover:brightness-90 text-white p-3 md:p-4 rounded-full shadow-lg hover:shadow-xl hover:shadow-femure-primary/40 transition-all duration-300 transform hover:scale-110 animate-pulse-glow"
                aria-label="Call us now"
            >
                <Phone className="w-5 h-5 md:w-6 md:h-6" />
            </button>
        </div>
    );
}
