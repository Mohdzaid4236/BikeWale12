import React, { useState } from "react";

const specifications = [
  {
    title: "Power & Performance",
    items: [
      { label: "Displacement", value: "349.34 cc" },
      { label: "Max Power", value: "20.2 bhp @ 6100 rpm" },
      { label: "Max Torque", value: "27 Nm @ 4000 rpm" },
      { label: "Top Speed", value: "130 kmph" },
    ],
  },
  {
    title: "Brakes and Wheels",
    items: [
      { label: "Braking System", value: "Single Channel ABS" },
      { label: "Front Brake Type", value: "Disc" },
      { label: "Front Brake Size", value: "300 mm" },
      { label: "Caliper - Front", value: "2 Piston" },
    ],
  },
  {
    title: "Suspensions and Chassis",
    items: [
      { label: "Front Suspension", value: "Telescopic, 41mm forks, 130mm travel" },
      { label: "Rear Suspension", value: "Twin tube emulsion shock absorbers with 6-step adjustable preload" },
      { label: "Front Suspension Preload Adjuster", value: "No" },
      { label: "Rear Suspension Preload Adjuster", value: "Yes" },
    ],
  },
  {
    title: "Dimensions",
    items: [
      { label: "Kerb Weight", value: "177 kg" },
      { label: "Seat Height", value: "800 mm" },
      { label: "Ground Clearance", value: "150 mm" },
      { label: "Fuel Tank Capacity", value: "13 litres" },
    ],
  },
  {
    title: "Manufacturer Warranty",
    items: [
      { label: "Standard Warranty", value: "3 year" },
      { label: "Standard Warranty", value: "30000 km" },
    ],
  },
  {
    title: "Service & Maintenance Schedule",
    items: [
      { label: "1st Service", value: "500 Kms/45 Days" },
      { label: "2nd Service", value: "5000 Kms/180 Days" },
      { label: "3rd Service", value: "10000 Kms/365 Days" },
      { label: "4th Service", value: "15000 Kms" },
    ],
  },
];

const SpecificationSection = () => {
  const [search, setSearch] = useState("");

  // Filter specifications based on search
  const filteredSpecs = specifications
    .map((section) => ({
      ...section,
      items: section.items.filter((item) =>
        item.label.toLowerCase().includes(search.toLowerCase())
      ),
    }))
    .filter((section) => section.items.length > 0);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md w-full max-w-6xl mx-auto">
      {/* Title */}
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Specifications</h2>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Type a spec or feature e.g. Tyre Type"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md mb-6"
      />

      {/* Display Filtered Specifications */}
      {filteredSpecs.map((section, idx) => (
        <div key={idx} className="mb-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">{section.title}</h3>
          <div className="divide-y divide-gray-200">
            {section.items.map((item, index) => (
              <div key={index} className="flex justify-between py-2">
                <span className="text-gray-600">{item.label}</span>
                <span className="text-gray-800 font-medium">{item.value}</span>
              </div>
            ))}
          </div>
          <button className="mt-2 text-blue-600 hover:underline">View More</button>
        </div>
      ))}

      {/* If no results */}
      {filteredSpecs.length === 0 && (
        <div className="text-gray-500 text-center">No specifications found!</div>
      )}
    </div>
  );
};

export default SpecificationSection;
