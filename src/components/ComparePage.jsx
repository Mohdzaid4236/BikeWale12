import React, { useState, useEffect } from "react";

const CompareBikes = () => {
  const [bikes, setBikes] = useState([]);
  const [comparisonData, setComparisonData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/comparisons/")
      .then((response) => response.json())
      .then((data) => setComparisonData(data))
      .catch((err) => setError("Failed to load comparisons"));
  }, []);

  const handleSelectBike = (index) => {
    const selectedBike = prompt("Enter bike name or ID:");
    if (selectedBike) {
      const newBikes = [...bikes];
      newBikes[index] = selectedBike;
      setBikes(newBikes);
    }
  };

  const handleCompare = async () => {
    if (bikes.length < 2) {
      setError("Please select at least two bikes to compare.");
      return;
    }
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("http://127.0.0.1:8000/api/compare/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ bikes }),
      });
      const data = await response.json();
      setComparisonData(data);
    } catch (err) {
      setError("Error fetching comparison results.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-semibold">Compare Bikes</h1>
      <p className="text-gray-600 mt-2">
        Compare bikes based on price, mileage, performance, and more.
      </p>
      {error && <p className="text-red-500">{error}</p>}
      <div className="mt-6 bg-white p-4 rounded-lg shadow-md flex justify-between items-center">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="flex flex-col items-center">
            <div
              className="w-20 h-20 flex items-center justify-center border rounded-full shadow-md bg-gray-100 cursor-pointer"
              onClick={() => handleSelectBike(index)}
            >
              {bikes[index] ? (
                <span className="text-center text-sm">{bikes[index]}</span>
              ) : (
                <img src="/bike-icon.png" alt="Bike Icon" className="w-12 h-12" />
              )}
            </div>
            <p className="text-blue-500 mt-2 cursor-pointer" onClick={() => handleSelectBike(index)}>
              {bikes[index] ? "Change Bike" : "Select Bike"}
            </p>
            {index < 3 && <span className="text-sm text-gray-500 font-bold">VS</span>}
          </div>
        ))}
      </div>
      <button
        className="mt-6 bg-red-500 text-white px-6 py-2 rounded-lg text-lg font-medium"
        onClick={handleCompare}
        disabled={loading}
      >
        {loading ? "Comparing..." : "Compare"}
      </button>
      {comparisonData && (
        <div className="mt-6 p-4 bg-gray-100 rounded-md">
          <h2 className="text-lg font-semibold">Comparison Results</h2>
          <pre className="text-sm text-gray-700 mt-2">{JSON.stringify(comparisonData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default CompareBikes;