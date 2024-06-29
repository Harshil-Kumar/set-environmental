import { useRouter } from 'next/navigation';

const serviceData = {
  service1: { title: 'Service 1', description: 'Detailed information about Service 1.' },
  service2: { title: 'Service 2', description: 'Detailed information about Service 2.' },
  service3: { title: 'Service 3', description: 'Detailed information about Service 3.' },
  service4: { title: 'Service 4', description: 'Detailed information about Service 4.' },
  service5: { title: 'Service 5', description: 'Detailed information about Service 5.' },
  service6: { title: 'Service 6', description: 'Detailed information about Service 6.' },
};

const ServicePage = ({ params }: { params: { service: string } }) => {
  const { service } = params;

  const serviceInfo = serviceData[service as keyof typeof serviceData];

  if (!serviceInfo) {
    return <p>Service not found</p>;
  }

  return (
    <div className="container mx-auto p-8 rounded-lg shadow-md bg-blue-50">
      <h2 className="text-3xl font-bold mb-6 text-center">{serviceInfo.title}</h2>
      <p className="text-lg">{serviceInfo.description}</p>
    </div>
  );
};

export default ServicePage;
