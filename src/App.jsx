import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedBikes from './components/FeaturedBikes';
import BikeBrands from './components/BikeBrands'; 
import TrendingBikes from './components/TrendingBikes';
import PopularBikes from './components/PopularBikes';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="font-sans bg-gray-50 min-h-screen">
        <Header />
        <Routes>
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

                {/* Bike Brands Section */}
                <section className="max-w-4xl mx-auto text-center my-4">
                  <h2 className="text-2xl font-bold text-gray-800">Browse by Brand</h2>
                  <BikeBrands />
                </section>
              </div>
            }
          />
          <Route path="/trending-bikes" element={<TrendingBikes />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
