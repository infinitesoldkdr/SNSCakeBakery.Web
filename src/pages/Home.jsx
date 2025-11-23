// HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

// --- SIMULATED FEATURED PRODUCTS ---
const featuredProducts = [
  { id: 1, name: "Blush Rose Mini Cake", price: 55, link: "/menu" },
  { id: 2, name: "Seasonal Tart Trio", price: 40, link: "/menu" },
  { id: 3, name: "Signature Lavender Macarons", price: 28, link: "/menu" },
];

export default function Home() {
  return (
    <div className="page-wrapper">
      
      {/* 1. HERO SECTION */}
      <section className="hero-section">
        <div className="hero-overlay">
          <h1 className="hero-title">Elegance is Sweetly Served.</h1>
          <p className="hero-subtitle">Handcrafted custom cakes and bespoke desserts for life's beautiful moments.</p>
          <div className="hero-actions">
            <Link to="/menu" className="hero-button menu-btn">
              VIEW MENU
            </Link>
            <Link to="/create-order" className="hero-button order-btn">
              CREATE CUSTOM ORDER
            </Link>
          </div>
        </div>
      </section>

      {/* 2. FEATURED PRODUCTS SECTION */}
      <section className="featured-section">
        <div className="content-box">
          <h2 className="section-title feature-title">Featured Creations</h2>
          
          <div className="product-grid">
            {featuredProducts.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-image-placeholder">
                  [Image: {product.name}]
                </div>
                <h4 className="product-name">{product.name}</h4>
                <p className="product-price">${product.price.toFixed(2)}</p>
                <Link to={product.link} className="action-button gallery-btn add-to-cart-btn">
                  View Details
                </Link>
              </div>
            ))}
          </div>
          
          <div className="cta-all-menu">
            <Link to="/menu" className="action-button login-button">
              See All Desserts
            </Link>
          </div>
        </div>
      </section>

      {/* 3. CUSTOM ORDER CALL-TO-ACTION */}
      <section className="custom-cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Your Vision, Our Artistry.</h2>
          <p className="cta-text">
            Ready for a truly unique cake? We specialize in designs that tell your story.
          </p>
          <Link to="/create-order" className="checkout-btn cta-button">
            REQUEST A QUOTE
          </Link>
        </div>
      </section>
      
      {/* Footer component (using global classes) */}
      <div className="footer-container">
        <div className="social-icons">
          <Link to="#"><span className="social-icon">IG</span></Link>
          <Link to="#"><span className="social-icon">FB</span></Link>
          <Link to="#"><span className="social-icon">TW</span></Link>
          <Link to="#"><span className="social-icon">PT</span></Link>
        </div>
        <p className="footer-text">© 2025 SNS Cakebakery. All Rights Reserved.</p>
      </div>
    </div>
  );
}