import React from 'react';
import { ArrowRight, ShoppingCart } from 'lucide-react';

const products = [
  { name: "Carbon Frame", price: 1299, category: "Parts", image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" },
  { name: "Aero Handlebar", price: 295, category: "Parts", image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" },
  { name: "Wheelset", price: 895, category: "Parts", image: "https://images.unsplash.com/photo-1684342069404-04bb572e9611?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmljeWNsZSUyMHBhcnRzfGVufDB8fDB8fHww" },
  { name: "Cycling Computer", price: 425, category: "Accessories", image: "https://images.unsplash.com/photo-1619861312543-2464f524b382?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" },
  { name: "Water Bottle", price: 25, category: "Accessories", image: "https://images.unsplash.com/photo-1684342106552-6a9188e1755c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJpY3ljbGUlMjBwYXJ0c3xlbnwwfHwwfHx8MA%3D%3D" },
  { name: "Bike Saddle", price: 125, category: "Parts", image: "https://images.unsplash.com/photo-1496147539180-13929f8aa03a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGJpY3ljbGUlMjBwYXJ0c3xlbnwwfDB8MHx8fDA%3D" },
  { name: "Cycling Shoes", price: 280, category: "Accessories", image: "https://images.unsplash.com/photo-1605034313761-73ea4a0cfbf3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" },
  { name: "Power Meter", price: 425, category: "Accessories", image: "https://plus.unsplash.com/premium_photo-1663133527695-12b4983dbc61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmljeWNsZSUyMG1ldGVyJ3xlbnwwfDB8MHx8fDA%3D" },
  { name: "Bike Lights Set", price: 89, category: "Accessories", image: "https://images.unsplash.com/photo-1570106196361-2daac379ec3f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmljeWNsZSUyMGxpZ2h0fGVufDB8MHwwfHx8MA%3D%3D" },
  { name: "Cycling Jersey", price: 75, category: "Apparel", image: "https://images.unsplash.com/photo-1660820149211-886c72990f92?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJpY3ljbGUlMjBqZXJzZXl8ZW58MHwwfDB8fHww" },
  { name: "Bike Lock", price: 55, category: "Accessories", image: "https://images.unsplash.com/photo-1511994298241-608e28f14fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" },
];

const ProductCard = ({ product, className }) => (
  <div className={`group relative overflow-hidden ${className}`}>
    <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
    <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
      <h3 className="text-white text-xl font-bold mb-1">{product.name}</h3>
      <p className="text-white mb-2">${product.price}</p>
    </div>
    <div className="absolute top-2 right-2 bg-white text-black text-xs font-bold px-2 py-1 rounded-full">
      {product.category}
    </div>
  </div>
);

const FeaturedProducts = () => {
  return (
    <div className="bg-[#F5F4EF] p-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-4 gap-4 auto-rows-[200px]">
          <div className="col-span-2 row-span-2 bg-[#F5F4EF] p-6 flex flex-col justify-between">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-gray-800 tracking-tight">Serenity Spokes</h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Elevate your ride with our premium cycling gear. Innovative designs meet uncompromising performance.
              </p>
            </div>
            <div className="flex justify-between items-center">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors duration-300 text-sm font-semibold">
                Explore Collection
              </button>
              <button className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300">
                View all <ArrowRight className="ml-2 h-5 w-5" />
              </button>
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