import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const bikes = [
  {
    brand: "Royal Enfield",
    model: "Hunter 350",
    price: "₹1,49,900",
    image: "https://imgd.aeplcdn.com/227x128/n/cw/ec/124013/hunter-350-right-side-view-5.png?isig=0&q=80",
    vs: "TVS Ronin",
    vsPrice: "₹1,35,064",
    vsImage: "https://imgd.aeplcdn.com/227x128/n/cw/ec/124775/ronin-right-side-view-7.jpeg?isig=0&q=80",
  },
  {
    brand: "Royal Enfield",
    model: "Classic 350",
    price: "₹1,93,080",
    image: "https://imgd.aeplcdn.com/227x128/n/cw/ec/183389/classic-350-right-side-view-62.jpeg?isig=0&q=80",
    vs: "Honda CB350",
    vsPrice: "₹2,00,165",
    vsImage: "https://imgd.aeplcdn.com/227x128/n/cw/ec/164985/cb350-right-side-view-6.png?isig=0&q=80",
  },
  {
    brand: "Yamaha",
    model: "MT 15 V2",
    price: "₹1,70,086",
    image: "https://imgd.aeplcdn.com/227x128/n/cw/ec/164985/cb350-right-side-view-6.png?isig=0&q=80",
    vs: "Yamaha R15 V4",
    vsPrice: "₹1,84,459",
    vsImage: "https://imgd.aeplcdn.com/227x128/n/cw/ec/164985/cb350-right-side-view-6.png?isig=0&q=80",
  },
];

const CompareBikes = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1 < bikes.length ? prev + 1 : 0));
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 >= 0 ? prev - 1 : bikes.length - 1));
  };

  return (
    <div className="relative max-w-6xl mx-auto p-6 compare-bikes">
      <h2 className="text-2xl font-bold mb-4 text-center">Compare Bikes</h2>

      <div className="relative flex items-center justify-center overflow-hidden">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-2 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-200"
        >
          <ChevronLeft size={30} />
        </button>

        {/* Bike Cards Carousel */}
        <motion.div
          className="flex transition-transform duration-500 "
          animate={{ x: `-${index * 100}%` }}
          style={{ width: `${bikes.length * 100}%` }}
        >
          {bikes.map((bike, idx) => (
            <div
              key={idx}
              className="min-w-[300px] flex-shrink-0 border rounded-lg p-4 shadow-md bg-white w-40 mx-auto"
            >
              <div className="flex items-center space-x-2">
                <img src={bike.image} alt={bike.model} className="w-24 h-16 object-contain" />
                <div>
                  <h3 className="font-semibold">{bike.brand} {bike.model}</h3>
                  <p className="text-gray-600">{bike.price} Onwards</p>
                </div>
              </div>
              <p className="text-center text-sm mt-2 font-semibold">VS</p>
              <div className="flex items-center space-x-2 mt-2">
                <img src={bike.vsImage} alt={bike.vs} className="w-24 h-16 object-contain" />
                <div>
                  <h3 className="font-semibold">{bike.vs}</h3>
                  <p className="text-gray-600">{bike.vsPrice} Onwards</p>
                </div>
              </div>
              {/* Link to Comparison Page */}
              <Link
                to={`/compare?bike1=${encodeURIComponent(bike.model)}&bike2=${encodeURIComponent(bike.vs)}`}
                className="mt-3 w-full block border rounded-lg py-2 text-center text-blue-600 hover:bg-blue-50 font-semibold"
              >
                {bike.model} vs {bike.vs}
              </Link>
            </div>
          ))}
        </motion.div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-2 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-200"
        >
          <ChevronRight size={30} />
        </button>
      </div>

      {/* Compare Bikes Link */}
      <Link to="/compare-bikes" className="mt-6 block text-left text-blue-700 font-bold hover:underline compare-link">
        Compare Bikes of Your Choice
      </Link>
    </div>
  );
};

export default CompareBikes;
