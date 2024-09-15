import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { FiMinus, FiPlus, FiTrash2 } from 'react-icons/fi';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const total = subtotal - discount;

  const handleApplyPromo = () => {
    // Placeholder promo code logic
    if (promoCode.toLowerCase() === 'discount10') {
      setDiscount(subtotal * 0.1);
    } else {
      setDiscount(0);
    }
  };

  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <h1 className="text-3xl font-light mb-12 text-center">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <div className="text-center">
          <p className="text-lg mb-6">Your cart is empty.</p>
          <Link to="/" className="text-blue-500 hover:text-blue-600 text-base transition duration-300">
            Continue shopping
          </Link>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="flex-grow">
            <ul className="divide-y divide-gray-200">
              {cartItems.map((item) => (
                <li key={item.id} className="py-6 flex items-center">
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md mr-6" />
                  <div className="flex-grow">
                    <h2 className="text-lg font-medium">{item.name}</h2>
                    <p className="text-gray-500 mt-1">${item.price.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center border border-gray-300 rounded-full">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-2 text-gray-500 hover:text-gray-700 transition duration-300"
                      >
                        <FiMinus size={14} />
                      </button>
                      <span className="px-3 py-1 font-medium">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-2 text-gray-500 hover:text-gray-700 transition duration-300"
                      >
                        <FiPlus size={14} />
                      </button>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-gray-400 hover:text-red-500 transition duration-300"
                    >
                      <FiTrash2 size={18} />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:w-96 space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-light mb-6">Order Summary</h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span>Free</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount</span>
                    <span>-${discount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-xl font-medium pt-4 border-t">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <input
                type="text"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                placeholder="Enter promo code"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleApplyPromo}
                className="w-full py-3 bg-gray-100 text-gray-800 rounded-lg font-medium hover:bg-gray-200 transition duration-300"
              >
                Apply Promo
              </button>
            </div>
            <button className="w-full py-4 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition duration-300">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;