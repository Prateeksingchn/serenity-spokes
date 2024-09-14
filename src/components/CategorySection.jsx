import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const categories = [
  {
    name: "SHOP BIKES",
    image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    link: "/shop/bikes"
  },
  {
    name: "BY BRAND",
    image: "https://images.unsplash.com/photo-1511994298241-608e28f14fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    link: "/by-brand"
  },
  {
    name: "SHOP GEAR",
    image: "https://images.unsplash.com/photo-1471506480208-91b3a4cc78be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    link: "/shop/gear"
  },
  {
    name: "ACCESSORIES",
    image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    link: "/shop/accessories"
  },
  {
    name: "COMPONENTS",
    image: "https://images.unsplash.com/photo-1511994298241-608e28f14fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    link: "/shop/components"
  },
];

const CategorySection = () => {
  return (
    <section className="bg-[#f0f4f8] text-gray-800 py-24 overflow-hidden relative">
      {/* Animated background SVGs */}
      <motion.svg
        className="absolute top-0 left-0 w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
      >
        {/* Left side elements */}
        {/* Bicycle wheel */}
        <motion.circle
          cx="10%"
          cy="20%"
          r="60"
          fill="none"
          stroke="url(#gradient1)"
          strokeWidth="2"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        <motion.circle
          cx="10%"
          cy="20%"
          r="55"
          fill="none"
          stroke="url(#gradient1)"
          strokeWidth="1"
        />
        {/* Spokes */}
        {[...Array(8)].map((_, i) => (
          <motion.line
            key={i}
            x1="10%"
            y1="20%"
            x2={`${10 + 60 * Math.cos(i * Math.PI / 4)}%`}
            y2={`${20 + 60 * Math.sin(i * Math.PI / 4)}%`}
            stroke="url(#gradient1)"
            strokeWidth="1"
          />
        ))}

        {/* Bicycle chain */}
        <motion.path
          d="M 70 80 Q 120 20, 170 80 T 270 80"
          fill="none"
          stroke="url(#gradient2)"
          strokeWidth="2"
          strokeDasharray="10,10"
          initial={{ pathLength: 0, pathOffset: 0 }}
          animate={{ pathLength: 1, pathOffset: 1 }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        />

        {/* Bicycle frame */}
        <motion.path
          d="M 80 70 L 120 70 L 100 30 Z"
          fill="none"
          stroke="url(#gradient3)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1 }}
        />

        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4A5568" />
            <stop offset="100%" stopColor="#2D3748" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2D3748" />
            <stop offset="100%" stopColor="#4A5568" />
          </linearGradient>
          <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4A5568" />
            <stop offset="100%" stopColor="#2D3748" />
          </linearGradient>
        </defs>
      </motion.svg>

      {/* New light cycling-themed SVG in bottom-right corner */}
      <motion.svg
        className="absolute bottom-0 right-0 w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
      >
        {/* Bicycle wheel */}
        <motion.circle
          cx="90%"
          cy="80%"
          r="8%"
          fill="none"
          stroke="url(#gradient1)"
          strokeWidth="2"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        <motion.circle
          cx="90%"
          cy="80%"
          r="7.5%"
          fill="none"
          stroke="url(#gradient1)"
          strokeWidth="1"
        />
        {/* Spokes */}
        {[...Array(16)].map((_, i) => (
          <motion.line
            key={i}
            x1="90%"
            y1="80%"
            x2={`${90 + 8 * Math.cos(i * Math.PI / 8)}%`}
            y2={`${80 + 8 * Math.sin(i * Math.PI / 8)}%`}
            stroke="url(#gradient1)"
            strokeWidth="1"
          />
        ))}

        {/* Inner circles */}
        <motion.circle
          cx="90%"
          cy="80%"
          r="6%"
          fill="none"
          stroke="url(#gradient2)"
          strokeWidth="0.5"
        />
        <motion.circle
          cx="90%"
          cy="80%"
          r="4%"
          fill="none"
          stroke="url(#gradient2)"
          strokeWidth="0.5"
        />

        {/* Hub */}
        <motion.circle
          cx="90%"
          cy="80%"
          r="1%"
          fill="url(#gradient2)"
        />

        {/* Tire */}
        <motion.circle
          cx="90%"
          cy="80%"
          r="8.5%"
          fill="none"
          stroke="url(#gradient3)"
          strokeWidth="0.5"
          strokeDasharray="2,2"
        />

        {/* Moving dot on the wheel */}
        <motion.circle
          cx="98%"
          cy="80%"
          r="0.5%"
          fill="url(#gradient2)"
          animate={{
            cx: ["98%", "90%", "82%", "90%", "98%"],
            cy: ["80%", "72%", "80%", "88%", "80%"],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4A5568" />
            <stop offset="100%" stopColor="#2D3748" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2D3748" />
            <stop offset="100%" stopColor="#4A5568" />
          </linearGradient>
          <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4A5568" />
            <stop offset="100%" stopColor="#2D3748" />
          </linearGradient>
        </defs>
      </motion.svg>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-5xl font-bold mb-2 py-2 bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Explore Our Categories
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Discover our wide range of bikes and gear for every cycling enthusiast. From mountain trails to city streets, we've got you covered.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link to="/shop" className="inline-block bg-gradient-to-r from-gray-700 to-gray-900 text-white font-semibold py-3 px-8 rounded-full hover:from-gray-800 hover:to-black transition duration-300 transform hover:scale-105">
              Shop All
            </Link>
          </motion.div>
        </motion.div>
        
        <div className="flex justify-center">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              className="relative h-[400px] flex-shrink-0"
              initial={{ width: '200px' }}
              whileHover={{ width: '450px' }}
              transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
            >
              <Link to={category.link} className="block w-full h-full">
                <motion.div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${category.image})` }}
                />
                <motion.div 
                  className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-between p-6"
                  initial={{ opacity: 0.4 }}
                  whileHover={{ opacity: 0.7 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-white text-2xl font-bold leading-tight">
                    {category.name.split(' ').map((word, i) => (
                      <span key={i} className="block">{word}</span>
                    ))}
                  </h3>
                  <motion.div 
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;