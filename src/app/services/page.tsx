import Link from 'next/link';

const Services = () => {
  const services = [
    { title: 'Building Automation Design', description: 'Description of Service 1', path: 'service1' },
    { title: 'Integrated System Design', description: 'Description of Service 2', path: 'service2' },
    { title: 'Mechanical Engineering Design', description: 'Description of Service 3', path: 'service3' },
    { title: 'Service 4', description: 'Description of Service 4', path: 'service4' },
    { title: 'Service 5', description: 'Description of Service 5', path: 'service5' },
    { title: 'Service 6', description: 'Description of Service 6', path: 'service6' },
  ];

  return (
    <div className="flex flex-wrap md:flex-nowrap p-8">
      <aside className="w-full md:w-1/4 bg-blue-100 p-8 rounded-2xl shadow-md mb-6 md:mb-0 md:mr-6  ">
        <h2 className="text-2xl font-bold mb-4">Services</h2>
        <ul>
          {services.map((service, index) => (
            <li key={index} className="mb-2 p-2">
              <Link href={`/services/${service.path}`} className="text-black-500 hover:bg-gray-300 rounded px-3 py-2">
                {service.title}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
      <main className="w-full md:w-3/4 p-6 rounded-lg shadow-md bg-white">
        <div className="container mx-auto p-8 rounded-lg shadow-md bg-blue-50">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="border rounded-lg p-6 shadow-lg bg-white hover:bg-gray-50 transition duration-200">
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Services;
