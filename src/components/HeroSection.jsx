import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { 
      title: "MOUNTAIN BIKES", 
      image: "https://images.unsplash.com/photo-1544191696-102dbdaeeaa0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      description: "Conquer any trail with our rugged mountain bikes"
    },
    { 
      title: "ROAD BIKES", 
      image: "https://images.unsplash.com/photo-1541625602330-2277a4c46182?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      description: "Experience speed and efficiency on the open road"
    },
    { 
      title: "ELECTRIC BIKES", 
      image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      description: "Effortless rides with cutting-edge e-bike technology"
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
      ))}
      
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-10">
        <h1 className="text-7xl font-extrabold mb-6 text-center transition-all duration-500 transform translate-y-0 opacity-100 animate-pulse">
          {slides[currentSlide].title}
        </h1>
        
        <p className="text-xl mb-8 max-w-2xl text-center transition-all duration-500 transform translate-y-0 opacity-100">
          {slides[currentSlide].description}
        </p>
        
        <div className="transition-all duration-500 transform translate-y-0 opacity-100">
          <Link 
            to="/shop" 
            className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition duration-300 inline-block animate-bounce"
          >
            SHOP NOW
          </Link>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white scale-125' : 'bg-gray-400'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
      
      
      <div className="absolute bottom-4 right-4 text-white z-20">
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-300 transition duration-300">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="hover:text-gray-300 transition duration-300">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="hover:text-gray-300 transition duration-300">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;