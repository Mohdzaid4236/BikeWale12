import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import FeaturedBikes from "./components/FeaturedBikes";
import BikeBrands from "./components/BikeBrands";
import TrendingBikes from "./components/TrendingBikes";
import PopularBikes from "./components/PopularBikes";
import Footer from "./components/Footer";
import Login from "./components/Login";  
import Signup from "./components/Signup"; 
import OnRoadPrice from "./components/OnRoadPrice";  // ✅ Import On-Road Price component
import BikeTypes from "./components/BikeTypes";  // ✅ Import BikeTypes component
import CompareBikes from "./components/CompareBikes";
import ComparePage from "./components/ComparePage";
import Detail from "./components/detail";


function App() {
  return (
    <BrowserRouter>
      <div className="font-sans bg-gray-50 min-h-screen">
        <Header />
        <Routes>
          {/* Home Route */}
          <Route
            path="/"
            element={
              <div className="container mx-auto px-4 py-6">
                <Hero />

                {/* Featured Bikes Section */}
                <section className="max-w-4xl mx-auto text-center my-4">
                  <h2 className="text-2xl font-bold text-gray-800">Featured Bikes</h2>
                  <FeaturedBikes />
                </section>

                {/* "All Trending Bikes" Link */}
                <div className="max-w-4xl mx-auto text-left mt-3">
                  <Link 
                    to="/trending-bikes" 
                    className="text-blue-600 font-medium hover:underline text-lg"
                  >
                    All Trending Bikes →
                  </Link>
                </div>

                {/* Popular Bikes Section */}
                <section className="max-w-4xl mx-auto text-center my-4">
                  <PopularBikes />
                </section>

                {/* On-Road Price Section ✅ */}
                <section className="max-w-full mx-auto text-center my-6">
                  <OnRoadPrice />
                </section>

                {/* Bike Types Section ✅ */}
                <section className="max-w-4x1 mx-auto text-center my-4">
                  <BikeTypes />
                </section>

                {/* Bike Brands Section */}
                <section className="max-w-4xl mx-auto text-center my-4">
                  <BikeBrands />
                </section>

                {/* Compare Bikes Section */}
                <section className="max-w-4xl mx-auto text-center my-4">
                  <CompareBikes />
                </section>

              </div>
            }
          />

          {/* Trending Bikes Route */}
          <Route path="/trending-bikes" element={<TrendingBikes />} />

          {/* Login Page Route */}
          <Route path="/login" element={<Login />} />

          {/* Signup Page Route */}
          <Route path="/signup" element={<Signup />} />

          {/* Compare Bikes Route*/}
          <Route path="/" element={<CompareBikes />} />
          <Route path="/compare-bikes" element={<ComparePage />} />
          <Route path="/bike-detail" element={<Detail />} /> {/* Detail Page */}
          
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
