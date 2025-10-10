import { Poppins, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar';
import Footer from '@/components/Footer';
import React from 'react';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-poppins',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-playfair',
});

export const metadata = {
  title: 'Femure | Personalized Homeopathy for Women',
  description: 'Personalized homeopathy and wellness for women.',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${playfairDisplay.variable} font-body text-femure-primary bg-femure-background`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}