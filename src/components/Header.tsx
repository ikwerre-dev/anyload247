'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white z-50 py-6">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image 
            src={'/logo.png'} 
            alt='logo' 
            width={120} 
            height={35} 
            className="object-contain"
          />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          <Link href="/" className="text-xs font-medium hover:text-[#01A460]">HOME</Link>
          <Link href="/about" className="text-xs font-medium hover:text-[#01A460]">ABOUT US</Link>
          <Link href="/services" className="text-xs font-medium hover:text-[#01A460]">SERVICES</Link>
          <Link href="/contacts" className="text-xs font-medium hover:text-[#01A460]">CONTACTS</Link>
          <button className="bg-[#01A460] text-white text-xs font-medium px-6 py-2.5 rounded-md hover:bg-green-700">
            CLICK HERE TO BEGIN
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-[#01A460]" />
          ) : (
            <Menu className="h-6 w-6 text-[#01A460]" />
          )}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden">
            <nav className="flex flex-col py-4">
              <Link 
                href="/" 
                className="px-6 py-3 text-xs font-medium hover:bg-[#01A460] hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                HOME
              </Link>
              <Link 
                href="/about" 
                className="px-6 py-3 text-xs font-medium hover:bg-[#01A460] hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                ABOUT US
              </Link>
              <Link 
                href="/services" 
                className="px-6 py-3 text-xs font-medium hover:bg-[#01A460] hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                SERVICES
              </Link>
              <Link 
                href="/contacts" 
                className="px-6 py-3 text-xs font-medium hover:bg-[#01A460] hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                CONTACTS
              </Link>
              <button className="mx-6 mt-3 bg-[#01A460] text-white text-xs font-medium px-6 py-2.5 rounded-md hover:bg-green-700">
                CLICK HERE TO BEGIN
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;