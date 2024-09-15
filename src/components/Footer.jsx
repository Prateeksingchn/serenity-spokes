import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const footerSections = [
    {
      title: 'Shop',
      links: ['Bikes', 'Equipment', 'Accessories', 'Sale']
    },
    {
      title: 'Services',
      links: ['Bike Fitting', 'Repairs', 'Maintenance', 'Custom Builds']
    },
    {
      title: 'Company',
      links: ['About Us', 'Careers', 'Contact', 'Blog']
    },
    {
      title: 'Support',
      links: ['FAQ', 'Shipping', 'Returns', 'Track Order']
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-cyan-100 via-blue-200 to-blue-300 text-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <Link to="/" className="text-2xl font-light tracking-wider text-gray-900">
              SERENITY SPOKES
            </Link>
            <p className="mt-4 text-gray-600 text-sm">
              Elevating your cycling experience with premium bikes and equipment.
            </p>
            <div className="mt-6 flex space-x-4">
              {[faInstagram, faTwitter, faFacebook, faLinkedin].map((icon, index) => (
                <a key={index} href="#" className="text-gray-500 hover:text-gray-700 transition duration-300">
                  <FontAwesomeIcon icon={icon} size="lg" />
                </a>
              ))}
            </div>
          </div>
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link to="#" className="text-gray-600 hover:text-blue-600 text-sm transition duration-300">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-gray-300 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600">&copy; 2023 Serenity Spokes. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <Link to="#" className="text-sm text-gray-600 hover:text-blue-600 transition duration-300">Privacy Policy</Link>
            <Link to="#" className="text-sm text-gray-600 hover:text-blue-600 transition duration-300">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;