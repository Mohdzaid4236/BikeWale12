import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedBikes from './components/FeaturedBikes';
import TrendingBikes from './components/TrendingBikes'; // New Page for Trending Bikes
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="font-sans">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <div className="container mx-auto px-4">
                <Hero />
                <h2 className="text-3xl font-bold text-center my-6">Featured Bikes</h2>
                <FeaturedBikes />
                {/* All Trending Bikes Link */}
                <div className="text-center mt-6">
                  <a 
                    href="/trending-bikes" 
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    All Trending Bikes →
                  </a>
                </div>
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