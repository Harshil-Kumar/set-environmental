'use client'

import React from 'react';
import { useRouter } from 'next/navigation';

const OurTeam: React.FC = () => {
  const router = useRouter();

  // Define your team member data here
  const teamMembers = [
    {
      name: 'Jim Zampetti',
      role: 'Founder, Head of Automation and Integrated Design',
      imageUrl: '/images/jim.jpeg', // Replace with your actual image URL
    },
    {
      name: 'John Godfrey',
      role: 'Chief Operating Officer',
      imageUrl: '/images/john.jpeg', // Replace with your actual image URL
    },
    {
      name: 'John Balpardo',
      role: 'Chief Financial Officer',
      imageUrl: '/images/john 2.jpeg', // Replace with your actual image URL
    },
    // Add more team members as needed
  ];

  const handleRedirect = () => {
    router.push('/team');
  };

  return (
    <section className="w-full py-12 ">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="border rounded-lg p-6 shadow-lg bg-gray-100 transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={member.imageUrl}
                alt={member.name}
                className="w-full h-64 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-bold mb-2 text-center">{member.name}</h3>
              <p className="text-center">{member.role}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button
            onClick={handleRedirect}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Know More
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
