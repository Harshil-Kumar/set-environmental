'use client';

import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const HeroSection = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background images with scrolling effect */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('/images/office3.jpeg')` }}></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      {/* <div className="container mx-auto flex flex-col justify-center h-full relative z-10">
        <h1 className="text-6xl font-bold mb-4 text-center text-white">Welcome to SET Environmental</h1>
        <p className="text-2xl text-center text-white">Your trusted partner in environmental services</p>
      </div> */}
      <div className="container mx-auto flex flex-col justify-center h-full relative z-10">
        <h1 className="text-6xl font-bold mb-4 text-center text-black">
          <Typewriter
            words={['Welcome to SET Environmental']}
            loop={false}
            cursor
            cursorStyle='_'
            typeSpeed={70}
          />
        </h1>
        <p className="text-2xl text-center text-red-700">
          <Typewriter
            words={['Your trusted partner in the services']}
            loop={false}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            delaySpeed={5000} // 3 seconds delay to start after h1
          />
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
