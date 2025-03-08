import React from "react";

const CompareBikes = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-semibold">Compare Bikes</h1>
      <p className="text-gray-600 mt-2">
        Are you confused between multiple bikes to choose from? Not sure what features should you compare? Don't worry, bike comparison was never so easy.
        BikeWale brings you an amazing tool 'Compare Bikes' for bike comparison based on prices, mileage, power, performance, and 100s of other features.
        Compare your favorite bikes to choose the one that suits your needs. Compare multiple bikes at once to find the best one.
      </p>
      <div className="mt-6 bg-white p-4 rounded-lg shadow-md flex justify-between items-center">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-20 h-20 flex items-center justify-center border rounded-full shadow-md bg-gray-100">
              <img
                src="/bike-icon.png"
                alt="Bike Icon"
                className="w-12 h-12"
              />
            </div>
            <p className="text-blue-500 mt-2 cursor-pointer">Select Bike</p>
            {index < 3 && <span className="text-sm text-gray-500 font-bold">VS</span>}
          </div>
        ))}
      </div>
      <button className="mt-6 bg-red-500 text-white px-6 py-2 rounded-lg text-lg font-medium">
        Compare
      </button>
    </div>
  );
};

export default CompareBikes;
