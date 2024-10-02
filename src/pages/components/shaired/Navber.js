/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Link from "next/link";
import React, { useState } from "react";
import { FaShoppingCart, FaUser, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu when a link is clicked
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div className="max-w-[1500px] mx-auto">
        <nav className="bg-white shadow-md w-full">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            {/* Logo */}
            <div className="text-2xl font-bold text-gray-800">
              <img src="logo.png" />
            </div>

            {/* Hamburger Menu for Mobile */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-800 text-2xl focus:outline-none"
              >
                {isOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>

            {/* Menu */}
            <div
              className={`hidden md:flex items-center space-x-8 font-medium text-gray-700 text-lg`}
            >
              <Link href="/" className="hover:text-gray-900">
                Home
              </Link>
              <Link href="/components/About" className="hover:text-gray-900">
                About
              </Link>
              <Link href="/components/Menu" className="hover:text-gray-900">
                Menu
              </Link>
              <Link href="/components/Blog" className="hover:text-gray-900">
                Blog
              </Link>
              <Link href="/components/Contact-us" className="hover:text-gray-900">
                Contact
              </Link>
            </div>

            {/* Cart and User Icons */}
            <div className="hidden md:flex items-center space-x-6">
              <a href="#cart" className="text-gray-800 hover:text-gray-900">
                <FaShoppingCart className="text-2xl" />
              </a>
              <a href="#login" className="text-gray-800 hover:text-gray-900">
                <FaUser className="text-2xl" />
              </a>
            </div>
          </div>

          {/* Mobile Dropdown Menu */}
          {isOpen && (
            <div className="md:hidden bg-white shadow-md py-4 w-full top-full left-0">
              <Link
                href="/"
                className="block px-4 py-2 text-center border mt-1 font-serif font-bold text-xl bg-yellow-500 hover:bg-gray-200"
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link
                href="/components/About"
                className="block px-4 py-2 text-center border mt-1 font-serif font-bold text-xl bg-yellow-500 hover:bg-gray-200"
                onClick={closeMenu}
              >
                About
              </Link>
              <Link
                href="/components/Menu"
                className="block px-4 py-2 text-center border mt-1 font-serif font-bold text-xl bg-yellow-500 hover:bg-gray-200"
                onClick={closeMenu}
              >
                Menu
              </Link>
              <Link
                href="/components/Blog"
                className="block px-4 py-2 text-center border mt-1 font-serif font-bold text-xl bg-yellow-500 hover:bg-gray-200"
                onClick={closeMenu}
              >
                Blog
              </Link>
              <Link
                href="/components/Contact-us"
                className="block px-4 py-2 text-center border mt-1 font-serif font-bold text-xl bg-yellow-500 hover:bg-gray-200"
                onClick={closeMenu}
              >
                Contact
              </Link>

              {/* Cart and User Icons in Mobile */}
              <div className="flex justify-around mt-4">
                <a
                  href=""
                  className="text-gray-800 hover:text-gray-900"
                  onClick={closeMenu}
                >
                  <FaShoppingCart className="text-2xl" />
                </a>
                <a
                  href=""
                  className="text-gray-800 hover:text-gray-900"
                  onClick={closeMenu}
                >
                  <FaUser className="text-2xl" />
                </a>
              </div>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
