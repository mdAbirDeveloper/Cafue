/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';

const foodGallery = {
  All: [
    { id: 1, category: "Pizza", image: "/17.png" },
    { id: 2, category: "Asian", image: "/18.png" },
    { id: 3, category: "Burger", image: "/19.png" },
    { id: 4, category: "Salad", image: "/20.png" },
    { id: 5, category: "Bakery", image: "/21.png" },
    { id: 6, category: "Drink", image: "/22.png" },
    { id: 7, category: "Asian", image: "/23.png" },
    { id: 8, category: "Burger", image: "/24.png" }
  ],
  Pizza: [
    { id: 1, category: "Pizza", image: "/17.png" },
  ],
  Asian: [
    { id: 2, category: "Asian", image: "/18.png" },
    { id: 7, category: "Asian", image: "/23.png" }
  ],
  Burger: [
    { id: 3, category: "Burger", image: "/19.png" },
    { id: 8, category: "Burger", image: "/24.png" }
  ],
  Salad: [
    { id: 4, category: "Salad", image: "/20.png" }
  ],
  Bakery: [
    { id: 5, category: "Bakery", image: "/21.png" }
  ],
  Drink: [
    { id: 6, category: "Drink", image: "/22.png" }
  ]
};

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = Object.keys(foodGallery);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="bg-gray-100 py-12">
      <div className="text-center mb-8">
        <h3 className="text-yellow-500 text-lg font-semibold">Our Gallery</h3>
        <h2 className="text-3xl font-bold text-gray-800">Organize Food Gallery</h2>
      </div>

      {/* Category Menu */}
      <div className="flex justify-center flex-wrap space-x-6 mb-10 text-gray-600 text-lg">
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

      {/* Gallery Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 px-4">
        {foodGallery[selectedCategory].map((item) => (
          <div key={item.id} className="relative overflow-hidden rounded-lg shadow-lg">
            <img
              src={item.image}
              alt={item.category}
              className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300 ease-in-out"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
