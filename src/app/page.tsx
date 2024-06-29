import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutUs from '../components/AboutUs';
import ContactUs from '../components/ContactUs';
import ServiceCard from '../components/ServiceCard'; // Import ServiceCard component
import CustomerReviews from '@/components/CustomerReviews';


const Home: React.FC = () => {
  return (
      <div>
        <HeroSection />
        <AboutUs />
        <CustomerReviews />
        <ServiceCard />
        <ContactUs />
      </div>
  );
};

export default Home;
