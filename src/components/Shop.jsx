import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSort } from '@fortawesome/free-solid-svg-icons';

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
  { id: 12, name: "Bike Lock", price: 55, category: "Accessories", image: "https://images.unsplash.com/photo-1511994298241-608e28f14fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" },
  { id: 13, name: "Bike Lock", price: 55, category: "Accessories", image: "https://images.unsplash.com/photo-1511994298241-608e28f14fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" },
  { id: 14, name: "Bike Lock", price: 55, category: "Accessories", image: "https://images.unsplash.com/photo-1511994298241-608e28f14fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" },
  // Add more products here if needed
];

const Shop = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortOrder, setSortOrder] = useState('asc');

  const categories = ['All', ...new Set(products.map(product => product.category))];

  useEffect(() => {
    let result = products;
    if (searchTerm) {
      result = result.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (selectedCategory !== 'All') {
      result = result.filter(product => product.category === selectedCategory);
    }
    result.sort((a, b) => 
      sortOrder === 'asc' ? a.price - b.price : b.price - a.price
    );
    setFilteredProducts(result);
  }, [searchTerm, selectedCategory, sortOrder]);

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold mb-8 text-center text-gray-800">Shop</h1>
        
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0">
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FontAwesomeIcon icon={faSearch} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          
          <div className="flex items-center space-x-4">
            <select
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
            
            <button
              className="flex items-center space-x-2 border border-gray-300 rounded-md px-4 py-2 hover:bg-gray-100 transition duration-300"
              onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
            >
              <span>Price</span>
              <FontAwesomeIcon icon={faSort} className={`transform ${sortOrder === 'asc' ? 'rotate-0' : 'rotate-180'}`} />
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white border border-gray-200 rounded-md overflow-hidden shadow-sm hover:shadow-md transition duration-300">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-lg font-medium mb-2 text-gray-800">{product.name}</h2>
                <p className="text-sm text-gray-600 mb-2">{product.category}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-gray-800">${product.price}</span>
                  <Link 
                    to={`/product/${product.id}`} 
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
                  >
                    View
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;