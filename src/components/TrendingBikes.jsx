import { Link } from "react-router-dom";

const bikeBrands = [
  { name: "Royal Enfield", image: "https://imgd.aeplcdn.com/310x174/n/cw/ec/124013/hunter-350-right-side-view-5.png?isig=0&q=80" },
  { name: "Bajaj" },
  { name: "Honda" },
  { name: "TVS" },
  { name: "Yamaha" },
  { name: "Hero" },
  { name: "KTM" },
  { name: "Kawasaki" },
  { name: "Suzuki" },
  { name: "Triumph" }
];

const TrendingBikes = () => {
  return (
    <div className="p-6">
      <header className="flex justify-between items-center py-4 border-b">
        <h1 className="text-2xl font-bold">New Bikes in India</h1>
        <Link to="/" className="text-blue-500">Home</Link>
      </header>

      <p className="mt-2 text-gray-600">
        Finding the right bike can be a complicated process. Explore all new bike models with their prices in India.
      </p>

      <h2 className="mt-6 text-xl font-semibold">Browse Bikes By</h2>
      <div className="flex space-x-4 border-b mt-2">
        <span className="pb-2 border-b-2 border-green-600 font-semibold">Brand</span>
        <span className="text-gray-500">Budget</span>
        <span className="text-gray-500">Displacement</span>
        <span className="text-gray-500">Body Style</span>
      </div>

      {/* Bike Brand Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mt-6">
        {bikeBrands.map((brand, index) => (
          <div key={index} className="p-4 border rounded-lg flex flex-col items-center">
            {brand.image ? (
              <img src={brand.image} alt={brand.name} className="w-20 h-20 object-contain" />
            ) : (
              <div className="w-20 h-20 flex items-center justify-center bg-gray-200 text-gray-600">
                No Image
              </div>
            )}
            <p className="mt-2 font-semibold">{brand.name}</p>
          </div>
        ))}
      </div>

      <button className="mt-4 text-blue-500">View More Brands</button>
    </div>
  );
};

export default TrendingBikes;
