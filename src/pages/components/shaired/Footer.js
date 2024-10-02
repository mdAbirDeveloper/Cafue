/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'; // Importing social media icons

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-7xl mx-auto px-4">
        {/* Footer Logo */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold"><img src='logo.png' /></h1>
          <nav className="hidden md:flex space-x-6">
            <a href="#home" className="hover:text-yellow-500">Home</a>
            <a href="#about" className="hover:text-yellow-500">About</a>
            <a href="#services" className="hover:text-yellow-500">Services</a>
            <a href="#gallery" className="hover:text-yellow-500">Gallery</a>
            <a href="#contact" className="hover:text-yellow-500">Contact</a>
          </nav>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4 mb-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500">
            <FaLinkedinIn />
          </a>
        </div>

        {/* Copyright Information */}
        <div className="text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
