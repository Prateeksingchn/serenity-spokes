import React from 'react';
import { Link } from 'react-router-dom';

function WhyCycleBottomSection() {
  return (
    <div className="w-full bg-gradient-to-b from-[#EBE8E5] to-[#F8F8F8]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Why Cycling is Good section */}
        <div className="rounded-lg py-4 mb-10">
          <h2 className="text-3xl font-bold mb-10 text-center text-[#0C292E]">
            Why Cycling is Good for You
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Physical Health",
                description:
                  "Cycling is a low-impact exercise that improves cardiovascular fitness, builds muscle strength, and enhances overall endurance.",
                icon: "🚴‍♂️",
              },
              {
                title: "Mental Wellbeing",
                description:
                  "Regular cycling can reduce stress, anxiety, and depression while boosting mood and cognitive function.",
                icon: "🧠",
              },
              {
                title: "Environmental Impact",
                description:
                  "Choosing a bike over a car reduces carbon emissions, contributing to a cleaner and healthier environment.",
                icon: "🌿",
              },
              {
                title: "Social Connections",
                description:
                  "Cycling can be a social activity, allowing you to join clubs, participate in events, and make new friends.",
                icon: "👥",
              },
              {
                title: "Cost-Effective",
                description:
                  "Compared to owning and maintaining a car, cycling is a more affordable mode of transportation.",
                icon: "💰",
              },
              {
                title: "Exploration",
                description:
                  "Cycling opens up new ways to explore your surroundings, discover hidden gems, and experience nature.",
                icon: "🗺️",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-start">
                <div className="text-4xl mr-4">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[#0C292E]">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Elevate Your Ride section */}
        <div className="pb-10">
          <h2 className="text-3xl font-semibold mb-12 text-center text-[#0C292E] leading-tight">
            Elevate Your Ride: Where Passion Meets Performance
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#0C292E] text-white p-8 rounded-3xl flex flex-col justify-between transform transition duration-300 hover:shadow-xl">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Premium Bikes</h3>
                <p className="mb-6">Discover our curated selection of top-tier bicycles, engineered for peak performance and unmatched style.</p>
                <ul className="list-disc list-inside mb-8">
                  <li>Carbon fiber frames</li>
                  <li>Electronic shifting systems</li>
                  <li>Aerodynamic designs</li>
                  <li>Custom color options</li>
                </ul>
              </div>
              <div className="relative inline-block group">
                <span className="absolute inset-0 bg-white rounded-full transition-all duration-300 ease-out transform group-hover:scale-105 group-hover:bg-opacity-80"></span>
                <Link 
                  to="/shop" 
                  className="relative inline-block px-6 py-3 text-[#0C292E] font-semibold transition-colors duration-300 rounded-full group-hover:text-[#1A4A4F]"
                >
                  Explore Our Collection
                </Link>
              </div>
            </div>

            <div className="relative h-80 md:h-auto overflow-hidden rounded-3xl transform transition duration-300 hover:shadow-xl group">
              <img 
                src="https://images.unsplash.com/photo-1499438182938-87d87862e154?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJpa2V8ZW58MHx8MHx8fDA%3D" 
                alt="Premium Bike" 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-300"></div>
              <p className="absolute bottom-4 left-4 text-white text-lg font-semibold group-hover:bottom-6 transition-all duration-300">Featured: Carbon Aero Pro</p>
            </div>

            <div className="relative h-80 md:h-auto overflow-hidden rounded-3xl transform transition duration-300 hover:shadow-xl group">
              <img 
                src="https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Pro Accessories" 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-300"></div>
              <p className="absolute bottom-4 left-4 text-white text-lg font-semibold group-hover:bottom-6 transition-all duration-300">High-Performance Gear</p>
            </div>

            <div className="bg-[#0C292E] text-white p-8 rounded-3xl flex flex-col justify-between transform transition duration-300 hover:shadow-xl">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Expert Fitting & Pro Accessories</h3>
                <p className="mb-6">Experience our personalized fitting service and elevate your cycling with top-tier accessories.</p>
                <ul className="list-disc list-inside mb-8">
                  <li>3D body scanning technology</li>
                  <li>Customized bike adjustments</li>
                  <li>Pro-level components</li>
                  <li>Performance-enhancing gear</li>
                </ul>
              </div>
              <div className="relative inline-block group">
                <span className="absolute inset-0 bg-white rounded-full transition-all duration-300 ease-out transform group-hover:scale-105 group-hover:bg-opacity-80"></span>
                <Link 
                  to="/booking" 
                  className="relative inline-block px-6 py-3 text-[#0C292E] font-semibold transition-colors duration-300 rounded-full group-hover:text-[#1A4A4F]"
                >
                  Book a Fitting Session
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyCycleBottomSection;