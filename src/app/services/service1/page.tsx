'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Services1 = () => {
  const service1 = [
    {
      title: 'Service 1',
      imageUrl: '/images/service11.png', // Replace with your actual image URL
      description: 'Central Control and Monitoring System Design',
    },
    {
      title: 'Service 2',
      imageUrl: '/images/service12.jpeg', // Replace with your actual image URL
      description: 'Advanced Metering Infrastructures and Reporting System Design ', // Slug for the service page
    },
    {
      title: 'Service 3',
      imageUrl: '/images/service13.jpeg', // Replace with your actual image URL
      description: 'Legacy Systems Upgrade and Retrofit Design', // Slug for the service page
    },
  ];

  const services = [
    { title: 'Building Automation Design', description: 'Description of Service 1', path: 'service1' },
    { title: 'Integrated System Design', description: 'Description of Service 2', path: 'service2' },
    { title: 'Mechanical Engineering Design', description: 'Description of Service 3', path: 'service3' },
    { title: 'Project Management', description: 'Description of Service 4', path: 'service4' },
    { title: 'Energy Audits', description: 'Description of Service 5', path: 'service5' },
    { title: 'Leed Consulting', description: 'Description of Service 6', path: 'service6' },
    { title: 'Commissioning', description: 'Description of Service 7', path: 'service7' },
    { title: 'Grants and Finance', description: 'Description of Service 8', path: 'service8' },
  ];

  const pathname = usePathname();

  return (
    <div className="flex flex-wrap md:flex-nowrap p-8">
      <aside className="w-full md:w-1/4 bg-blue-100 p-8 rounded-2xl shadow-md mb-6 md:mb-0 md:mr-6">
        <h2 className="text-2xl font-bold mb-4 px-2 flex items-center justify-center">Services</h2>
        <ul>
          {services.map((service, index) => (
            <li key={index} className="mb-2 p-2 px-0">
              <Link href={`/services/${service.path}`} className={`text-black-500 hover:bg-gray-400 rounded px-3 py-2 ${pathname === `/services/${service.path}` ? 'bg-gray-400' : ''}`}>
                {service.title}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
      <main className="w-full md:w-3/4 p-6 rounded-2xl shadow-md bg-violet-50">
        <h2 className="text-3xl font-bold mb-6 text-center pt-0">What you get with SET!</h2>
        <div className="space-y-6">
          {service1.map((service, index) => (
            <div key={index} className="flex items-center bg-violet-50 p-4 rounded-xl shadow-md">
              <Image
                src={service.imageUrl}
                width={200}
                height={200}
                alt={service.title}
                className="mr-4"
              />
              <p className="text-left text-lg">{service.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Services1;
