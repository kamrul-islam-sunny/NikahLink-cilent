import React from 'react';

const Banner = () => {
    return (
        <div className="relative bg-gradient-to-r from-pink-500 via-red-500 to-rose-400 text-white overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black/30 z-0"></div>
  
        {/* Banner Content */}
        <div className="container mx-auto px-6 py-20 lg:py-28 relative z-10 flex flex-col items-center text-center">
          <h1 className="text-4xl lg:text-6xl font-extrabold mb-4 animate-fade-in">
            Find Your Perfect Match
          </h1>
          <p className="text-lg lg:text-2xl mb-6 animate-fade-in text-gray-200">
            Join our matrimony platform to discover meaningful connections and start your journey of love today.
          </p>
          <div className="flex gap-4 animate-slide-up">
            <button className="px-6 py-3 bg-pink-600 hover:bg-pink-700 rounded-full text-lg font-semibold shadow-lg transition duration-300">
              Get Started
            </button>
            <button className="px-6 py-3 bg-white text-pink-600 hover:text-pink-700 border border-white rounded-full text-lg font-semibold shadow-lg transition duration-300">
              Learn More
            </button>
          </div>
        </div>
  
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-yellow-300 rounded-full mix-blend-multiply opacity-40 animate-bounce"></div>
        <div className="absolute bottom-10 right-0 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply opacity-40 animate-bounce delay-200"></div>
        <div className="absolute top-10 right-10 w-20 h-20 bg-red-300 rounded-full mix-blend-multiply opacity-40 animate-bounce delay-400"></div>
      </div>
    );
};

export default Banner;