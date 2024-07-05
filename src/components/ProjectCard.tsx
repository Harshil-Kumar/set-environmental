// ServiceCard.tsx
'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const ProjectCard: React.FC = () => {
  const router = useRouter();

  // Define your service data here
  const projects = [
    {
      title: 'Airports',
      imageUrl: '/images/airports.jpeg', // Replace with your actual image URL
      slug: 'project1', // Slug for the service page
    },
    {
      title: 'Hotels',
      imageUrl: '/images/hotels.jpeg', // Replace with your actual image URL
      slug: 'project2',
    },
    {
      title: 'Government Facilities',
      imageUrl: '/images/govtfacilities.jpeg', // Replace with your actual image URL
      slug: 'project3',
    },
    {
      title: 'Hospitals',
      imageUrl: '/images/hospitals.jpeg', // Replace with your actual image URL
      slug: 'project4',
    },
    {
      title: 'Telecom',
      imageUrl: '/images/telecom.jpeg', // Replace with your actual image URL
      slug: 'project5',
    },
    {
      title: 'Construction Management',
      imageUrl: '/images/const.management.jpeg', // Replace with your actual image URL
      slug: 'project6',
    },
    // Add more services as needed
  ];

  // Function to redirect to the service page
  const handleRedirect = (slug: string) => {
    console.log('Redirecting to:', `/projects/${slug}`);
    router.push(`/projects/${slug}`);
  };

  return (
    <section className="w-full py-12" style={{ position: 'relative' }}>
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/aaaa.webp" // Replace with your background image path
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-30" // Adjust opacity as needed
        />
      </div>
      <div className="container mx-auto relative z-10">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border rounded-xl p-6 pb-2 shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105 bg-gray-100 bg-opacity-60"
              onClick={() => handleRedirect(project.slug)}
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-40 object-cover rounded-xl mb-4 "
              />
              <h3 className="text-xl font-semibold mb-2 text-center">{project.title}</h3>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button
            onClick={() => router.push('/projects')}
            className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded transform transition-transform duration-300 hover:scale-105 focus:outline-none focus:shadow-outline"
          >
            Show More
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;
