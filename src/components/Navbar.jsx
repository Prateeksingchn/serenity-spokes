import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const location = useLocation();
  const { cartItems } = useCart();
  const navItems = ['Home', 'Bikes', 'Equipment', 'Services', 'Shop'];
  const [scrolled, setScrolled] = useState(false);

  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-300 ${
      scrolled ? 'bg-black bg-opacity-80' : 'bg-black'
    }`}>
      <div className="container mx-auto px-4 py-5 flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-light tracking-wider">
          SERENITY SPOKES
        </Link>
        <div className="flex items-center">
          <ul className="flex space-x-8 mr-6">
            {navItems.map((item) => (
              <li key={item}>
                <Link
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className={`text-white text-sm uppercase tracking-wider transition duration-300 relative group`}
                >
                  {item}
                  <span className={`absolute left-0 right-0 bottom-0 h-0.5 bg-white transform origin-left transition-transform duration-300 ${
                    location.pathname === (item === 'Home' ? '/' : `/${item.toLowerCase()}`) ? 'scale-x-100' : 'scale-x-0'
                  } group-hover:scale-x-100`}></span>
                </Link>
              </li>
            ))}
          </ul>
          <Link to="/cart" className="text-white text-xl relative">
            <FontAwesomeIcon icon={faShoppingCart} />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;