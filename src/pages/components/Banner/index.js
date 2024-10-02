/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { FaPlay } from "react-icons/fa";

const slides = [
  {
    title: "Mediterranean Salad",
    subtitle: "Summer Delight",
    description:
      "A fresh mix of cucumbers, tomatoes, olives, and feta cheese, drizzled with olive oil and lemon for a refreshing taste of the Mediterranean.",
    button: "Order Now",
    image: "/banner-2.png",
  },
  {
    title: "Classic Caesar Salad",
    subtitle: "with Grilled Shrimp",
    description:
      "Crisp romaine lettuce, parmesan cheese, and Caesar dressing topped with perfectly grilled shrimp for a delicious twist on the classic.",
    button: "Order Now",
    image: "/banner-1.png",
  },
  {
    title: "Tropical Chicken",
    subtitle: "Mango Salsa",
    description:
      "Tender chicken breast paired with a zesty mango salsa, blending sweet and savory flavors for a truly tropical experience.",
    button: "Order Now",
    image: "/banner-3.png",
  },
];

const CustomCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Automatically change slides every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000); // 3 seconds

    return () => clearInterval(interval); // Clear interval on unmount
  }, []);

  // Go to next slide
  const nextSlide = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      setIsAnimating(false);
    }, 300); // Match with animation duration
  };

  // Go to previous slide
  const prevSlide = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide(
        (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
      );
      setIsAnimating(false);
    }, 300);
  };

  // Go to a specific slide
  const goToSlide = (index) => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div className="relative w-full overflow-hidden max-w-[1500px] mx-auto bg-yellow-50">
      {/* Container with flexbox for responsive layout */}
      <div className="p-4 flex flex-col items-center md:flex-row">
        {/* Text Section */}
        <div className="flex-1 text-center md:text-left mb-6 md:mb-0">
          <p className="text-yellow-600 text-lg md:text-xl mb-2">
            Best In Cafeu
          </p>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
            {slides[currentSlide].title}{" "}
            <span className="text-red-500">
              {slides[currentSlide].subtitle}
            </span>
          </h1>
          <p className="mt-4 text-gray-500 text-sm md:text-base lg:text-lg">
            {slides[currentSlide].description}
          </p>
          <div className="mt-6 flex justify-center md:justify-start items-center space-x-4">
            <button className="bg-yellow-500 text-white py-2 px-4 text-sm md:text-base rounded hover:bg-yellow-600 transition">
              {slides[currentSlide].button}
            </button>
            <button className="flex items-center text-yellow-500 text-sm md:text-base">
              <FaPlay className="mr-2" />
              Watch Video
            </button>
          </div>
        </div>

        {/* Image Section - Apply responsive styles */}
        <div className="flex-1 mt-4 md:mt-0">
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* Dots for slide indication */}
      <div className="flex justify-center mt-4 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-yellow-500" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default CustomCarousel;
