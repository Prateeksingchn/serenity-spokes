import React from 'react';
import { ArrowRight, ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const products = [
  { id: 1, name: "Carbon Frame", price: 1299, category: "Parts", image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" },
  { id: 2, name: "Aero Handlebar", price: 295, category: "Parts", image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" },
  { id: 3, name: "Wheelset", price: 895, category: "Parts", image: "https://images.unsplash.com/photo-1684342069404-04bb572e9611?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmljeWNsZSUyMHBhcnRzfGVufDB8fDB8fHww" },
  { id: 4, name: "Cycling Computer", price: 425, category: "Accessories", image: "https://images.unsplash.com/photo-1619861312543-2464f524b382?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" },
  { id: 5, name: "Water Bottle", price: 25, category: "Accessories", image: "https://images.unsplash.com/photo-1684342106552-6a9188e1755c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJpY3ljbGUlMjBwYXJ0c3xlbnwwfHwwfHx8MA%3D%3D" },
  { id: 6, name: "Bike Saddle", price: 125, category: "Parts", image: "https://images.unsplash.com/photo-1496147539180-13929f8aa03a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGJpY3ljbGUlMjBwYXJ0c3xlbnwwfDB8MHx8fDA%3D" },
  { id: 7, name: "Cycling Shoes", price: 280, category: "Accessories", image: "https://images.unsplash.com/photo-1605034313761-73ea4a0cfbf3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" },
  { id: 8, name: "Power Meter", price: 425, category: "Accessories", image: "https://plus.unsplash.com/premium_photo-1663133527695-12b4983dbc61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmljeWNsZSUyMG1ldGVyJ3xlbnwwfDB8MHx8fDA%3D" },
  { id: 9, name: "Bike Lights Set", price: 89, category: "Accessories", image: "https://images.unsplash.com/photo-1570106196361-2daac379ec3f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmljeWNsZSUyMGxpZ2h0fGVufDB8MHwwfHx8MA%3D%3D" },
  { id: 10, name: "Cycling Jersey", price: 75, category: "Apparel", image: "https://images.unsplash.com/photo-1660820149211-886c72990f92?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJpY3ljbGUlMjBqZXJzZXl8ZW58MHwwfDB8fHww" },
  { id: 11, name: "Bike Lock", price: 55, category: "Accessories", image: "https://images.unsplash.com/photo-1511994298241-608e28f14fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" },
];

const ProductCard = ({ product, className }) => (
  <Link to={`/product/${product.id}`} className={`group relative overflow-hidden ${className}`}>
    <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
    <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
      <h3 className="text-white text-lg font-bold mb-1">{product.name}</h3>
      <p className="text-white text-md mb-2">${product.price}</p>
    </div>
  </Link>
);

const FeaturedProducts = () => {
  return (
    <div className="bg-[#e6eaf0] p-8 font-sans relative overflow-hidden">
      {/* Animated Circles */}
      <motion.div
        className="absolute top-0 left-4 w-72 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
        animate={{
          scale: [1, 1.1, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute -bottom-2 right-0 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -30, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <div className="max-w-7xl px-8 mx-auto relative z-10">
        <div className="grid grid-cols-4 gap-4 auto-rows-[200px]">
          <div className="col-span-2 row-span-2  bg-transparent p-6 flex flex-col justify-between backdrop-filter backdrop-blur-lg bg-opacity-80">
            <div className="space-y-4">
              <h1 className="text-6xl font-bold text-gray-800 tracking-tight">Serenity Spokes</h1>
              <p className="text-lg text-gray-600 leading-relaxed pr-24">
                Elevate your ride with our premium cycling gear. Innovative designs meet uncompromising performance.
              </p>
              <p className="text-md text-gray-700 font-semibold">
                Our top-selling products:
              </p>
            </div>
            <div className="flex justify-between items-center">
              <Link to="/shop">
                <motion.button 
                  className="bg-blue-600 text-white px-6 py-3 flex rounded-full hover:bg-blue-700 transition-colors duration-300 text-sm font-semibold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View all <ArrowRight className="ml-2 h-5 w-5" />
                </motion.button>
              </Link>
             
            </div>
          </div>
          <ProductCard product={products[0]} className="col-span-2 row-span-2" />
          <ProductCard product={products[1]} className="col-span-1 row-span-1" />
          <ProductCard product={products[2]} className="col-span-1 row-span-1" />
          <ProductCard product={products[3]} className="col-span-1 row-span-2" />
          <ProductCard product={products[4]} className="col-span-1 row-span-1" />
          <ProductCard product={products[5]} className="col-span-2 row-span-1" />
          <ProductCard product={products[6]} className="col-span-1 row-span-1" />
          <ProductCard product={products[7]} className="col-span-1 row-span-1" />
          <ProductCard product={products[8]} className="col-span-1 row-span-1" />
          <ProductCard product={products[9]} className="col-span-1 row-span-1" />
          <ProductCard product={products[10]} className="col-span-1 row-span-1" />
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;

export { products };