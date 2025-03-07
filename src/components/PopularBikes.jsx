import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; 

const popularBikes = [
  {
    name: "TVS Jupiter",
    price: "₹ 80,568 Onwards",
    image: "https://imgd.aeplcdn.com/642x361/n/cw/ec/129079/jupiter-right-front-three-quarter-2.jpeg",
  },
  {
    name: "TVS Ntorq 125",
    price: "₹ 94,322 Onwards",
    image: "https://www.google.com/imgres?q=125%20black%20tvs%20ntorq&imgurl=https%3A%2F%2Fimgd.aeplcdn.com%2F1280x720%2Fn%2Fhje0teb_1777505.jpg%3Fq%3D100&imgrefurl=https%3A%2F%2Fwww.bikewale.com%2Ftvs-bikes%2Fntorq-125%2Fcolours%2Fstealth-black%2F&docid=dHFz-4boXtfetM&tbnid=6X7hAepbs1VQcM&vet=12ahUKEwiDoJWb2veLAxWvna8BHSJVBSQQM3oECBgQAA..i&w=1280&h=720&hcb=2&ved=2ahUKEwiDoJWb2veLAxWvna8BHSJVBSQQM3oECBgQAA",
  },
  {
    name: "TVS Raider 125",
    price: "₹ 89,366 Onwards",
    image: "https://imgd.aeplcdn.com/642x361/n/cw/ec/129357/raider-right-front-three-quarter-2.jpeg",
  },
  {
    name: "OLA S1 X Gen 2",
    price: "₹ 92,225 Onwards",
    image: "https://imgd.aeplcdn.com/642x361/n/cw/ec/149361/s1-x-gen-2-right-front-three-quarter.jpeg",
  },
  {
    name: "Honda Activa 6G",
    price: "₹ 78,920 Onwards",
    image: "https://imgd.aeplcdn.com/642x361/n/cw/ec/39024/activa-6g-right-front-three-quarter-2.jpeg",
  }
];

const PopularBikes = () => {
  const [index, setIndex] = useState(0);
  const itemsPerPage = 3; 

  const nextSlide = () => {
    if (index + itemsPerPage < popularBikes.length) {
      setIndex(index + 1);
    }
  };

  const prevSlide = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Get Offers on Popular Bikes</h2>

      {/* Bike Cards with Arrows */}
      <div className="flex items-center gap-4">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition disabled:opacity-50"
          disabled={index === 0}
        >
          <FaArrowLeft size={20} />
        </button>

        {/* Bike Cards */}
        <div className="grid grid-cols-3 gap-4">
          {popularBikes.slice(index, index + itemsPerPage).map((bike, idx) => (
            <div
              key={idx}
              className="w-60 bg-white rounded-lg shadow-md p-3 hover:shadow-lg transition"
            >
              <img className="w-full h-28 object-cover rounded-md" src={bike.image} alt={bike.name} />
              <h3 className="text-sm font-medium mt-2">{bike.name}</h3>
              <p className="text-gray-600 text-xs">{bike.price}</p>
              <a
                href="#"
                className="block text-center mt-2 bg-blue-600 text-white py-1 rounded-md hover:bg-blue-700 transition text-sm"
              >
                Get Best Offer
              </a>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition disabled:opacity-50"
          disabled={index + itemsPerPage >= popularBikes.length}
        >
          <FaArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default PopularBikes;
