'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <div className="relative w-auto h-auto">
              <Image
                src={process.env.NEXT_PUBLIC_LOGO_URL || '/logo.png'}
                alt={process.env.NEXT_PUBLIC_COMPANY_NAME || 'Your Company Name'}
                width={150}
                height={40}
                style={{ objectFit: 'contain' }}
                priority
                className="hover:opacity-90 transition-opacity"
              />
            </div>
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link 
              href="/" 
              className="text-primary hover:text-accent font-medium transition-colors text-lg"
            >
              Home
            </Link>
            <Link 
              href="#how-it-works" 
              className="text-primary hover:text-accent font-medium transition-colors text-lg"
            >
              How It Works
            </Link>
            <Link 
              href="#testimonials" 
              className="text-primary hover:text-accent font-medium transition-colors text-lg"
            >
              Testimonials
            </Link>
          </nav>
          <div className="flex items-center">
            <Link
              href="/#property-form"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-secondary hover:bg-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent transition-colors"
            >
              Get Your Offer
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
} 