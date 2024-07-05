// header.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

const Header = () => {
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const services = [
    { title: 'Building Automation Design', path: 'service1' },
    { title: 'Integrated System Design', path: 'service2' },
    { title: 'Mechanical Engineering Design', path: 'service3' },
    { title: 'Project Management', path: 'service4' },
    { title: 'Energy Audits', path: 'service5' },
    { title: 'Leed Consulting', path: 'service6' },
    { title: 'Commissioning', path: 'service7' },
    { title: 'Grants and Finance', path: 'service8' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-800 text-white p-2 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">SET Environmental</h1>
        <nav className="ml-auto space-x-1 relative">
          <Link href="/" className={`px-3 py-2 hover:bg-gray-700 rounded ${pathname === '/' ? 'bg-gray-700' : ''}`}>Home</Link>
          <Link href="/about" className={`px-3 py-2 hover:bg-gray-700 rounded ${pathname === '/about' ? 'bg-gray-700' : ''}`}>About Us</Link>
          <div
            className="relative inline-block text-left"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <Link href="/services" className={`px-3 py-2 hover:bg-gray-700 rounded ${pathname === '/services' ? 'bg-gray-700' : ''} flex items-center`}>
              Services
              <ChevronDownIcon className="w-4 h-4 ml-1" />
            </Link>
            {dropdownOpen && (
              <div 
                className="origin-top-right absolute right-0 w-56 rounded shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
                style={{ marginTop: '2px' }}
              >
                <div className="py-1">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      href={`/services/${service.path}`}
                      className="block px-4 py-2 text-sm text-black hover:bg-gray-300 rounded"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <Link href="/projects" className={`px-3 py-2 hover:bg-gray-700 rounded ${pathname === '/projects' ? 'bg-gray-700' : ''}`}>Projects</Link>
          <Link href="/carrers" className={`px-3 py-2 hover:bg-gray-700 rounded ${pathname === '/carrers' ? 'bg-gray-700' : ''}`}>Carrers</Link>
          <Link href="/contact" className={`px-3 py-2 hover:bg-gray-700 rounded ${pathname === '/contact' ? 'bg-gray-700' : ''}`}>Contact Us</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
