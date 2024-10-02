/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

// Sample menu data
const menuData = {
  All: [
    { id: 1, name: "Perch Fish", image: "/17.png", rating: 5 },
    { id: 2, name: "Lobster", image: "/18.png", rating: 5 },
    { id: 3, name: "Shrimps", image: "/20.png", rating: 5 },
    { id: 4, name: "Red Crab", image: "/21.png", rating: 5 },
    { id: 5, name: "Greek Salad", image: "/22.png", rating: 5 },
    { id: 6, name: "Pork Chop", image: "/23.png", rating: 5 },
    { id: 7, name: "Sushi Platter", image: "/24.png", rating: 5 },
  ],
  Fish: [
    { id: 1, name: "Perch Fish", image: "/17.png", rating: 5 },
  ],
  Shellfish: [
    { id: 2, name: "Lobster", image: "/18.png", rating: 5 },
    { id: 3, name: "Shrimps", image: "/19.png", rating: 5 },
    { id: 4, name: "Red Crab", image: "/20.png", rating: 5 },
  ],
  Shrimps: [
    { id: 2, name: "Lobster", image: "/21.png", rating: 5 },
    { id: 3, name: "Shrimps", image: "/22.png", rating: 5 },
    { id: 4, name: "Red Crab", image: "/23.png", rating: 5 },
  ],
  RedCrab: [
    { id: 2, name: "Lobster", image: "/17.png", rating: 5 },
    { id: 3, name: "Shrimps", image: "/24.png", rating: 5 },
    { id: 4, name: "Red Crab", image: "/18.png", rating: 5 },
  ],
};

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const categories = Object.keys(menuData);
  const itemsToShow = showAll ? menuData[selectedCategory] : menuData[selectedCategory].slice(0, 6);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setShowAll(false); // Reset showAll when switching categories
  };

  return (
    <div className="bg-gray-100 py-12">
      <div className="text-center mb-8">
        <h3 className="text-yellow-500 text-lg font-semibold">Our Menu</h3>
        <h2 className="text-3xl font-bold text-gray-800">Delicious Choices</h2>
      </div>

      {/* Category Menu */}
      <div className="flex justify-center space-x-6 mb-10 text-gray-600 text-lg">
        {categories.map((category) => (
          <button
            key={category}
            className={`${
              selectedCategory === category
                ? "text-yellow-500 font-bold underline"
                : "hover:text-yellow-500"
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Menu Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {itemsToShow.map((item) => (
          <div
            key={item.id}
            className="relative bg-white border rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
            <div className="flex items-center mb-2">
              {/* Display 5-star rating */}
              {Array.from({ length: item.rating }, (_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-3.14 1.65L8.1 12.35 5 9.65h4.09L10 15zm0 2.68L8.65 18h2.7L10 17.68zM2.5 2h5.67L10 4.38 10.83 2h5.67L12 7l1.15 6.23L10 11.9 7.85 13.23 8 10 2.5 2z" />
                </svg>
              ))}
            </div>
            <div className="flex justify-between">
              <button className="text-blue-500 hover:text-blue-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </button>
              <button className="text-blue-500 text-xl hover:text-blue-700">
                <FaShoppingCart />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Show More / Show Less Button */}
      {menuData[selectedCategory].length > 6 && (
        <div className="text-center mt-6">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Menu;
