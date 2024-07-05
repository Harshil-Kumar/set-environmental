// ServiceCard.tsx
'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const ServiceCard: React.FC = () => {
  const router = useRouter();

  // Define your service data here
  const services = [
    {
      title: 'Building Automation Design',
      imageUrl: '/images/service11.png', // Replace with your actual image URL
      slug: 'service1', // Slug for the service page
    },
    {
      title: 'Integrated System Design',
      imageUrl: '/images/service22.png', // Replace with your actual image URL
      slug: 'service2',
    },
    {
      title: 'Mechanical Engineering Services',
      imageUrl: '/images/service33.png', // Replace with your actual image URL
      slug: 'service3',
    },
    {
      title: 'Project Management',
      imageUrl: '/images/service43.png', // Replace with your actual image URL
      slug: 'service4',
    },
    {
      title: 'Energy Audits',
      imageUrl: '/images/service5.webp', // Replace with your actual image URL
      slug: 'service5',
    },
    {
      title: 'Commissioning',
      imageUrl: '/images/service61.jpeg', // Replace with your actual image URL
      slug: 'service6',
    },
    // Add more services as needed
  ];

  // Function to redirect to the service page
  const handleRedirect = (slug: string) => {
    console.log('Redirecting to:', `/services/${slug}`);
    router.push(`/services/${slug}`);
  };

  return (
    <section className="w-full py-12" style={{ position: 'relative' }}>
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/factory.jpeg" // Replace with your background image path
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-50" // Adjust opacity as needed
        />
      </div>
      <div className="container mx-auto relative z-10">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="border rounded-xl p-6 pb-2 shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105 bg-gray-50 bg-opacity-60"
              onClick={() => handleRedirect(service.slug)}
            >
              <img
                src={service.imageUrl}
                alt={service.title}
                className="w-full h-40 object-cover rounded-xl mb-4 "
              />
              <h3 className="text-xl font-semibold mb-2 text-center">{service.title}</h3>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button
            onClick={() => router.push('/services')}
            className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded transform transition-transform duration-300 hover:scale-105 focus:outline-none focus:shadow-outline"
          >
            Show More
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServiceCard;
