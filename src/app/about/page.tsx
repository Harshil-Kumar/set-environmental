import OurTeam from "@/components/OurTeam";

const About = () => {
  return (
    <main className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-6">About Us</h1>
      <p className="text-lg mb-4">
        SET Environmental is a leader in providing comprehensive environmental services.
        Our mission is to protect the environment and ensure the safety of our clients.
      </p>
      <p className="text-lg">
        We offer a wide range of services including hazardous waste management, emergency response,
        industrial cleaning, and more. Our team of experts is dedicated to delivering
        high-quality solutions tailored to meet your specific needs.
      </p>
      <OurTeam />
    </main>
  );
};

export default About;
