// ServiceCard.tsx
'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

const ServiceCard: React.FC = () => {
  const router = useRouter();

  // Define your service data here
  const services = [
    {
      title: 'Service 1',
      imageUrl: '/images/1.webp', // Replace with your actual image URL
      slug: 'service1', // Slug for the service page
    },
    {
      title: 'Service 2',
      imageUrl: '/images/2.webp', // Replace with your actual image URL
      slug: 'service2',
    },
    {
      title: 'Service 50',
      imageUrl: '/images/3.webp', // Replace with your actual image URL
      slug: 'service3',
    },
    {
      title: 'Service 4',
      imageUrl: '/images/4.webp', // Replace with your actual image URL
      slug: 'service4',
    },
    {
      title: 'Service 5',
      imageUrl: '/images/3.webp', // Replace with your actual image URL
      slug: 'service5',
    },
    {
      title: 'Service 6',
      imageUrl: '/images/2.webp', // Replace with your actual image URL
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
    <section className="w-full py-12 bg-amber-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="border rounded-lg p-6 shadow-lg bg-gray-100 cursor-pointer transform transition-transform duration-300 hover:scale-105"
              onClick={() => handleRedirect(service.slug)}
            >
              <img
                src={service.imageUrl}
                alt={service.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-bold mb-2 text-center">{service.title}</h3>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button
            onClick={() => router.push('/services')}
            className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Show More
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServiceCard;
