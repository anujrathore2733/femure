'use client';

import { useState, useEffect } from 'react';
import { Share2, Check } from 'react-feather';

interface ShareButtonProps {
    title: string;
    excerpt: string;
}

export default function ShareButton({ title, excerpt }: ShareButtonProps) {
    const [copied, setCopied] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Check if device is mobile
        const checkMobile = () => {
            setIsMobile(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
        };
        checkMobile();
    }, []);

    const handleShare = async () => {
        const url = window.location.href;
        
        if (isMobile && navigator.share) {
            try {
                await navigator.share({
                    title: title || 'Femure Blog Post',
                    text: excerpt || 'Check out this article from Femure',
                    url: url
                });
            } catch {
                // If sharing fails, fall back to copy
                copyToClipboard(url);
            }
        } else {
            copyToClipboard(url);
        }
    };

    const copyToClipboard = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (error) {
            console.error('Failed to copy: ', error);
        }
    };

    return (
        <button 
            onClick={handleShare}
            className="flex items-center gap-2 text-gray-600 hover:text-femure-primary transition-colors relative"
        >
            {copied ? (
                <>
                    <Check className="w-4 h-4" />
                    Copied!
                </>
            ) : (
                <>
                    <Share2 className="w-4 h-4" />
                    Share
                </>
            )}
            {copied && (
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded">
                    Link copied!
                </div>
            )}
        </button>
    );
}
