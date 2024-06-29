'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const AboutUs: React.FC = () => {
  const router = useRouter();

  const handleContactUsClick = () => {
    router.push('/about');
  };

  return (
    <section className="w-full bg-pink-50 py-16">
      <div className="container mx-auto p-12 rounded-lg shadow-md bg-blue-50 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-2/5 flex justify-center md:justify-start mb-4 md:mb-0">
          <img 
            src="/images/1.webp" 
            alt="About Us" 
            className="ml-12 w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-lg" 
          />
        </div>
        <div className="w-full md:w-3/5">
          <h2 className="text-3xl font-bold mb-6 text-center md:text-left">About Us</h2>
          <p className="text-lg mb-6">
            SET Environmental collaborates with facility stakeholders to enhance productivity, profitability, and project efficiency while minimizing energy consumption. 
            Their engineers analyze energy use, develop strategies for upgrades, and design optimized systems. 
          </p>
          <p className="text-lg mb-6">
            Integrated system designs measure utility use and costs, report economic and environmental impacts, and enable seamless control via advanced web-based tools. 
            Their team of professional engineers, certified energy managers, and LEED accredited professionals bring over two centuries of combined experience, continually advancing their expertise.          
          </p>
          <div className="text-center flex justify-center mt-8">
            <button
              onClick={handleContactUsClick}
              className="bg-cyan-500 hover:bg-cyan-700 text-white py-2 px-4 rounded"
            >
              Learn More
            </button>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
