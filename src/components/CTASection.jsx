import React from 'react';

function CTASection() {
  return (
    <div className="bg-[#0C292E] text-white rounded-lg p-12 relative overflow-hidden">
      <div className="relative z-10">
        <h3 className="text-3xl font-semibold mb-6">Join Our Cycling Community</h3>
        <p className="mb-8 max-w-2xl">
          Be part of a passionate group of cyclists. Get exclusive access to events, tips from pros, and special offers tailored just for you.
        </p>
        <form className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-grow px-4 py-3 rounded-full text-black focus:outline-none focus:ring-2 focus:ring-[#0C292E]"
          />
          <button className="bg-white text-[#0C292E] px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors duration-300">
            Subscribe
          </button>
        </form>
      </div>
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#FFFFFF"
            d="M39.9,-65.7C54.1,-60.5,69.3,-53.4,79.9,-41.7C90.5,-30,96.4,-15,93.9,-1.4C91.4,12.1,80.4,24.3,71.1,37.1C61.8,50,54.1,63.7,42.5,71.5C30.9,79.4,15.4,81.5,1.2,79.6C-13.1,77.7,-26.2,71.8,-36.5,63.5C-46.8,55.2,-54.3,44.5,-63.3,33.3C-72.3,22.1,-82.8,11,-85.6,-1.6C-88.4,-14.3,-83.5,-28.5,-74.3,-39C-65.1,-49.5,-51.7,-56.2,-38.8,-62.1C-25.9,-68,-13,-73.1,0.5,-74C13.9,-74.8,27.8,-71.4,39.9,-65.7Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
    </div>
  );
}

export default CTASection;