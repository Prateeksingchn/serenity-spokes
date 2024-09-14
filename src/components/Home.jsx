import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from './HeroSection';
import FeaturedProducts from './FeaturedProducts';
import CategorySection from './CategorySection';

function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <HeroSection />
      <FeaturedProducts />
      <CategorySection />
    </div>
  );
}

export default Home;