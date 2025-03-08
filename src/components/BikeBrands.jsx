import { useState } from "react";
import { useNavigate } from "react-router-dom";

const categories = ["BRAND", "BUDGET", "DISPLACEMENT", "BODY STYLE"];

const brands = [
  { name: "Royal Enfield", slug: "royal-enfield", image: "https://imgd.aeplcdn.com/0X0/bw/makes/royal-enfield20200508193112.jpg?q=80" },
  { name: "Bajaj", slug: "bajaj",image: "https://imgd.aeplcdn.com/0X0/bw/makes/bajaj20200508192534.jpg?q=80" },
  { name: "Honda", slug: "honda" ,image: "https://imgd.aeplcdn.com/0X0/bw/makes/honda20200511152343.jpg?q=80"},
  { name: "TVS", slug: "tvs" ,image: "https://imgd.aeplcdn.com/0X0/bw/makes/tvs20200508193203.jpg?q=80"},
  { name: "Hero", slug: "hero" ,iamge: "https://imgd.aeplcdn.com/0X0/bw/makes/hero20200508192826.jpg?q=80"},
  { name: "KTM", slug: "ktm",image:"https://imgd.aeplcdn.com/0X0/bw/makes/ktm20200518163508.jpg?q=80" },
  { name: "Kawasaki", slug: "kawasaki",image:"https://imgd.aeplcdn.com/0X0/n/cw/ec/17/brands/logos/kawasaki1656405887432.jpg?v=1656405887528&q=80" },
  { name: "Suzuki", slug: "suzuki",image:"https://imgd.aeplcdn.com/0X0/bw/makes/suzuki20200508193118.jpg?q=80" },
  { name: "Yamaha", slug: "yamaha" ,image:"https://imgd.aeplcdn.com/0X0/bw/makes/suzuki20200508193118.jpg?q=80"},
  { name: "Triumph", slug: "triumph",image:"https://imgd.aeplcdn.com/0X0/bw/makes/triumph20200508193154.jpg?q=80" },
];

const budgetOptions = [
  { label: "Under ₹50,000", slug: "under-50000" },
  { label: "Under ₹60,000", slug: "under-60000" },
  { label: "Under ₹70,000", slug: "under-70000" },
  { label: "Under ₹80,000", slug: "under-80000" },
  { label: "Under ₹1 lakh", slug: "under-100000" },
  { label: "Under ₹1.5 lakh", slug: "under-150000" },
  { label: "Under ₹2 lakh", slug: "under-200000" },
  { label: "Above ₹2 lakh", slug: "above-200000" },
];

const displacementOptions = [
  { label: "100cc", slug: "100cc" },
  { label: "150cc", slug: "150cc" },
  { label: "200cc", slug: "200cc" },
  { label: "250cc", slug: "250cc" },
  { label: "300cc", slug: "300cc" },
  { label: "400cc", slug: "400cc" },
  { label: "500cc & Above", slug: "500cc-above" },
];

const bodyStyleOptions = [
  { label: "Cruiser", slug: "cruiser" },
  { label: "Sports Bike", slug: "sports-bike" },
  { label: "Adventure", slug: "adventure" },
  { label: "Tourer", slug: "tourer" },
  { label: "Scooter", slug: "scooter" },
  { label: "Commuter", slug: "commuter" },
];

const BikeBrands = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("BRAND");

  const handleClick = (category, slug) => {
    navigate(`/bikes/${category}/${slug}`);
  };

  const renderOptions = () => {
    switch (activeCategory) {
      case "BRAND":
        return (
          <div className="grid grid-cols-5  mb-6">
            {brands.map((brand) => (
              <div
                key={brand.slug}
                className="border p-2 rounded-lg flex flex-col items-center cursor-pointer hover:shadow-lg transition h-32 w-full"
                onClick={() => handleClick("brand", brand.slug)}
              >
                {brand.image && (
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="w-24 h-16 object-contain"
                  />
                )}
                <p className="text-lg font-medium mt-2">{brand.name}</p>
              </div>
            ))}
          </div>
        );
      case "BUDGET":
        return (
          <div className="grid grid-cols-4 gap-4 mb-6">
            {budgetOptions.map((budget) => (
              <button
                key={budget.slug}
                className="border px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-200 transition"
                onClick={() => handleClick("budget", budget.slug)}
              >
                {budget.label}
              </button>
            ))}
          </div>
        );
      case "DISPLACEMENT":
        return (
          <div className="grid grid-cols-4 gap-4 mb-6">
            {displacementOptions.map((displacement) => (
              <button
                key={displacement.slug}
                className="border px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-200 transition"
                onClick={() => handleClick("displacement", displacement.slug)}
              >
                {displacement.label}
              </button>
            ))}
          </div>
        );
      case "BODY STYLE":
        return (
          <div className="grid grid-cols-3 gap-4">
            {bodyStyleOptions.map((bodyStyle) => (
              <button
                key={bodyStyle.slug}
                className="border px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-200 transition"
                onClick={() => handleClick("body-style", bodyStyle.slug)}
              >
                {bodyStyle.label}
              </button>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Browse Bikes By</h2>

      {/* Navigation Tabs */}
      <div className="flex space-x-6 border-b mb-4 text-lg">
        {categories.map((category) => (
          <button
            key={category}
            className={`pb-2 ${
              activeCategory === category
                ? "border-b-2 border-green-500 font-semibold text-black"
                : "text-gray-600 hover:text-black"
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Dynamic Content */}
      {renderOptions()}
    </div>
  );
};

export default BikeBrands;
