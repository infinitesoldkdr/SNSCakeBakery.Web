// MenuPage.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom"; 
// NOTE: All styles are now referenced from index.css

const menuData = {
  cakes: [
    { id: 1, name: "Signature Vanilla Bean", price: 65.0, description: "Classic vanilla cake with Swiss meringue buttercream." },
    { id: 2, name: "Lemon Raspberry Dream", price: 70.0, description: "Zesty lemon layers with fresh raspberry filling." },
    { id: 3, name: "Dark Chocolate Espresso", price: 75.0, description: "Rich dark chocolate cake with espresso ganache." },
  ],
  cupcakes: [
    { id: 4, name: "Red Velvet Swirl", price: 3.5, description: "Moist red velvet with cream cheese frosting." },
    { id: 5, name: "Pistachio Rose", price: 4.0, description: "Subtle pistachio flavor topped with rosewater buttercream." },
  ],
  Cookies: [
    { id: 6, name: "Salted Caramel Tart", price: 8.0, description: "Flaky crust filled with decadent salted caramel." },
    { id: 7, name: "Artisan Macaron Box (6 pcs)", price: 18.0, description: "Assorted seasonal flavors." },
  ],
};

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('cakes');

  const renderProductCard = (product) => (
    <div key={product.id} className="product-card menu-product-card">
      <div className="product-image-placeholder menu-image-placeholder">
        [Image: {product.name}]
      </div>
      <h4 className="product-name">{product.name}</h4>
      <p className="product-description">{product.description}</p>
      <p className="product-price menu-price">${product.price.toFixed(2)}</p>
      <button className="action-button gallery-btn add-to-cart-btn">
        Add to Cart
      </button>
    </div>
  );

  return (
    // Uses global page wrapper
    <div className="page-wrapper">
        <div className="content-box">
          
          <h2 className="page-title">OUR FULL MENU</h2>
          <p className="page-description">
            Explore our ready-to-order cakes, cupcakes, and desserts. For custom requests, please visit the custom order page.
          </p>
          
          {/* --- Category Tabs --- */}
          <div className="menu-tabs">
            {Object.keys(menuData).map(category => (
              <button
                key={category}
                className={`menu-tab-button ${activeCategory === category ? 'active-tab' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category.toUpperCase()}
              </button>
            ))}
            <Link to="/create-order" className="menu-tab-button custom-order-tab">
                CUSTOM ORDERS
            </Link>
          </div>
          
          {/* --- Product Grid --- */}
          <div className="menu-product-grid">
            {menuData[activeCategory].map(renderProductCard)}
          </div>

        </div>
      
      {/* Footer component (using global classes) */}
      <div className="footer-container">
        <p className="footer-text">© 2025 SNS Cakebakery. All Rights Reserved.</p>
      </div>
    </div>
  );
}