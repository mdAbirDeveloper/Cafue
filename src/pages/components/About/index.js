/* eslint-disable @next/next/no-img-element */
import React from 'react';

const AboutUsSection = () => {
  return (
    <div className=" py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-20">
        {/* Image Section */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <img 
            src="/3-about.png" 
            alt="Delicious Burger" 
            className="w-full h-auto object-contain mx-auto"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <p className="text-yellow-600 text-xl font-semibold mb-2">About Us</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            We Serve the Best Gourmet Burgers
          </h2>
          <p className="text-gray-600 mb-6">
            At our restaurant, we pride ourselves on offering mouth-watering, gourmet burgers made from the freshest ingredients. Whether you are looking for a classic burger or something with a unique twist, our menu has something to satisfy every palate.
          </p>

          <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8 mb-6">
            {/* First Feature */}
            <div className="flex items-start space-x-4">
              <img 
                src="/3-7.png" 
                alt="Rating Star" 
                className="w-8 h-8 mt-5"
              />
              <div>
                <h3 className="font-semibold text-gray-800">Top-rated Quality</h3>
                <p className="text-gray-600">Our customers consistently rate us as the best burger joint in town.</p>
              </div>
            </div>

            {/* Second Feature */}
            <div className="flex items-start space-x-4">
              <img 
                src="/3-8.png" 
                alt="Free Delivery" 
                className="w-8 h-8 mt-2"
              />
              <div>
                <h3 className="font-semibold text-gray-800">Fresh Ingredients</h3>
                <p className="text-gray-600">We use locally sourced, fresh ingredients to make your meals healthier and tastier.</p>
              </div>
            </div>
          </div>

          <button className="bg-yellow-500 text-white py-3 px-6 rounded-md hover:bg-yellow-600 transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
