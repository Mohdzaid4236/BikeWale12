import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = "http://127.0.0.1:8000/api/brands/";
const CATEGORY_API_URL = "http://127.0.0.1:8000/api/categories/";

const categories = ["BRAND", "BUDGET", "DISPLACEMENT", "BODY STYLE"];

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

const BikeBrands = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("BRAND");
  const [brands, setBrands] = useState([]);
  const [bodyStyles, setBodyStyles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch brands
  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Failed to fetch brands");

        const data = await response.json();
        console.log("Brands API Response:", data); // Debugging API response

        const brandsArray = data.results ?? []; // Ensure we have an array
        setBrands(Array.isArray(brandsArray) ? brandsArray : []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchBrands();
  }, []);

  // Fetch body styles (categories API)
  useEffect(() => {
    const fetchBodyStyles = async () => {
      try {
        const response = await fetch(CATEGORY_API_URL);
        if (!response.ok) throw new Error("Failed to fetch body styles");

        const data = await response.json();
        console.log("Categories API Response:", data); // Debugging API response

        const categoriesArray = data.results ?? []; // Ensure we have an array
        setBodyStyles(Array.isArray(categoriesArray) ? categoriesArray : []);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchBodyStyles();
  }, []);

  const handleClick = (category, slug) => navigate(`/bikes/${category}/${slug}`);

  const categoryMap = {
    BRAND: brands.map((brand) => (
      <div
        key={brand?.slug || Math.random()} // Ensure key is valid
        className="border p-3 rounded-lg flex flex-col items-center cursor-pointer hover:shadow-lg transition bg-white shadow-md h-40"
        onClick={() => handleClick("brand", brand?.slug || "unknown")}
      >
        {brand?.image && (
          <img src={brand.image} alt={brand.name || "Unknown"} className="w-24 h-16 object-contain" />
        )}
        <p className="text-lg font-medium mt-2 text-center">{brand?.name || "Unknown"}</p>
      </div>
    )),
    BUDGET: budgetOptions.map((budget) => (
      <button
        key={budget.slug}
        className="border px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-200 transition shadow-md bg-white"
        onClick={() => handleClick("budget", budget.slug)}
      >
        {budget.label}
      </button>
    )),
    DISPLACEMENT: displacementOptions.map((displacement) => (
      <button
        key={displacement.slug}
        className="border px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-200 transition shadow-md bg-white"
        onClick={() => handleClick("displacement", displacement.slug)}
      >
        {displacement.label}
      </button>
    )),
    "BODY STYLE": bodyStyles.map((bodyStyle) => (
      <button
        key={bodyStyle?.slug || Math.random()} // Ensure key is valid
        className="border px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-200 transition shadow-md bg-white"
        onClick={() => handleClick("body-style", bodyStyle?.slug || "unknown")}
      >
        {bodyStyle?.name || "Unknown"}
      </button>
    )),
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Browse Bikes By</h2>

      {/* Category Selection */}
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

      {/* Display Options */}
      {loading ? (
        <p>Loading brands...</p>
      ) : error ? (
        <p className="text-red-500">Error: {error}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categoryMap[activeCategory]}
        </div>
      )}
    </div>
  );
};

export default BikeBrands;

