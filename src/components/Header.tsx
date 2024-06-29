// navbar.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-800 text-white p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">SET Environmental</h1>
        <nav className="ml-auto space-x-1">
          <Link href="/" className={`px-3 py-2 hover:bg-gray-700 rounded ${pathname === '/' ? 'bg-gray-700' : ''}`}>Home</Link>
          <Link href="/about" className={`px-3 py-2 hover:bg-gray-700 rounded ${pathname === '/about' ? 'bg-gray-700' : ''}`}>About Us</Link>
          <Link href="/services" className={`px-3 py-2 hover:bg-gray-700 rounded ${pathname === '/services' ? 'bg-gray-700' : ''}`}>Services</Link>
          <Link href="/projects" className={`px-3 py-2 hover:bg-gray-700 rounded ${pathname === '/projects' ? 'bg-gray-700' : ''}`}>Projects</Link>
          <Link href="/carrers" className={`px-3 py-2 hover:bg-gray-700 rounded ${pathname === '/carrers' ? 'bg-gray-700' : ''}`}>Carrers</Link>
          <Link href="/contact" className={`px-3 py-2 hover:bg-gray-700 rounded ${pathname === '/contact' ? 'bg-gray-700' : ''}`}>Contact Us</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
