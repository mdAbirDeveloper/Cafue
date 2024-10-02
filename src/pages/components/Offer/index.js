/* eslint-disable @next/next/no-img-element */
import React from "react";

const SpecialOffers = () => {
  return (
    <div>
      <div className="bg-yellow-100 text-center py-12 px-4 text-black">
        <h2 className="text-3xl font-bold mb-4">
          Stay Informed About Special Offers
        </h2>
        <p className="text-lg mb-6">For Exclusive Deals, Coupons, News, and More</p>
        <div className="flex justify-center">
          <input
            type="email"
            className="border rounded px-4 py-2 mr-4"
            placeholder="Enter Your Email"
          ></input>
          <button className="bg-white text-black rounded px-4 py-2" type="submit">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffers;
