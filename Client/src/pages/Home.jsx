import React, { useState, useEffect } from 'react'; // useState for product list, useEffect for fetching data
import './Home.css'; // Styling for the homepage
import ProductCard from '../components/ProductCard'; // Component for displaying a single product

// Home page component – displays banner and list of products
const Home = () => {
  const [products, setProducts] = useState([]); // State to store fetched products

  useEffect(() => {
    // Fetch products from backend when component mounts
    const fetchProducts = async () => {
      try {
        const res = await fetch('/products'); // GET request to backend
        const data = await res.json(); // Parse response as JSON
        setProducts(data); // Save products to state
      } catch (err) {
        console.error('שגיאה בטעינת מוצרים:', err); // Log error if fetch fails
      }
    };

    fetchProducts();
  }, []); // Run once on mount

  return (
    <div className="home-container"> {/* Main page wrapper */}

      {/* Hero banner with image and slogan */}
      <div className="hero-image-wrapper">
        <img
          src="https://images.pexels.com/photos/7256102/pexels-photo-7256102.jpeg"
          alt="Cosmetics Hero"
          className="hero-banner-image"
        />
        <div className="hero-banner-text">
          <h1>ברוכים הבאים לחנות שלנו</h1>
          <p>כל מה שאת צריכה – במקום אחד</p>
        </div>
      </div>

      {/* Grid of product cards */}
      <div className="products-grid">
        {products.map(product => (
          <ProductCard key={product._id} product={product} /> // Render product as card
        ))}
      </div>
    </div>
  );
};

export default Home; // Export the home component
