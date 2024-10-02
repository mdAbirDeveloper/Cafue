/* eslint-disable @next/next/no-img-element */
import React from 'react';

const newsData = [
  {
    id: 1,
    title: "New Restaurant Town Our Pie Award Contract",
    description: "Drive your business and manage risks with a global industry leader.",
    date: "Aug 1, 2023",
    comments: "Comments",
    image: "/17.png",
  },
  {
    id: 2,
    title: "Greek yogurt breakfast bowls Pie Award Contract",
    description: "Drive your business and manage risks with a global industry leader.",
    date: "Jun 14, 2023",
    comments: "Comments",
    image: "/18.png",
  },
  {
    id: 3,
    title: "Make Authentic Italian Margherita Pizza at Home",
    description: "Drive your business and manage risks with a global industry leader.",
    date: "Sep 5, 2023",
    comments: "Comments",
    image: "/19.png",
  },
];

const NewsSection = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="text-center mb-8">
        <h3 className="text-yellow-500 text-lg font-semibold">News & Blog</h3>
        <h2 className="text-3xl font-bold text-gray-800">Latest News</h2>
      </div>

      {/* News Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {newsData.map((news) => (
          <div
            key={news.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{news.title}</h3>
              <p className="text-gray-600 mb-4">{news.description}</p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <p>{news.date} - {news.comments}</p>
                <a href="#" className="text-yellow-500 hover:underline">Read More</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsSection;
