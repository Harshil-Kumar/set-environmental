'use client';

import Link from 'next/link';
import Image from 'next/image'

import { usePathname } from 'next/navigation';


const Services = () => {
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
      <aside className="w-full md:w-1/4 bg-blue-100 p-8 rounded-2xl shadow-md mb-6 md:mb-0 md:mr-6  ">
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
          <div >
          <Image
      src="/images/services.jpeg"
      width={300}
      height={300}
      alt="Picture at the services page"
      style={{
        margin: "auto",
        paddingBottom: '20px',
      }}

    />
            <p className = "mb-4">SET stands for SUSTAINABLE ENERGY TECHNOLOGIES in both name and practice!
              SET strategically advantages our clients through intense understanding of desired outcomes and goals and the application of industry leading, best in class tools and process.  
              We only succeed if our clients do!
              Our services reduce our client's energy consumption by quantifying, designing and executing energy conservation measures in buildings.  We do the study, report our findings in financial terms, provide fundable recommendations, facilitate the financing, design the systems and solutions then manage the project. 
              Our recommendations are comprehensive and designed to complement the position and strategy of your businesses.  
              </p>
              <p>We help our clients receive grants, rebates, instinctive programs and low interest loans.  Our products and services help our clients reduce energy expenses by as much as 30%. 
              We identify energy savings opportunity projects and then we get them done, on time, in budget.
              Our construction management team ensure that our clients projects are completed on time and on budget.  Our reports are simple, effective and provide transparancy of information that allows our clients and partners to view and update critical information in real time.  
              We use industry standard plattforms that enable our clients to take an active role in the progress and success of thier projects.
            </p>
          </div>
      </main>
    </div>
  );
};

export default Services;