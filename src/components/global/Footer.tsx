import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full sm:w-auto mb-4 sm:mb-0">
            <a
              href="/"
              className="text-2xl font-bold text-white hover:text-gray-400"
            >
              Jurisdictio
            </a>
          </div>
          <div className="flex space-x-6">
            <a href="/" className="text-white hover:text-gray-400">
              Home
            </a>
            <a href="/about" className="text-white hover:text-gray-400">
              About
            </a>
            <a href="/services" className="text-white hover:text-gray-400">
              Services
            </a>
            <a href="/contact" className="text-white hover:text-gray-400">
              Contact
            </a>
          </div>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
            >
              <FaTwitter className="w-6 h-6" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
            >
              <FaFacebook className="w-6 h-6" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
            >
              <FaInstagram className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p>&copy; 2024 Jurisdictio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
