import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from './HeroSection';
import FeaturedProducts from './FeaturedProducts';
import CategorySection from './CategorySection';
import WhyCycle from './WhyCycle';

function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <HeroSection />
      <FeaturedProducts />
      <CategorySection />
      <WhyCycle />
    </div>
  );
}

export default Home;