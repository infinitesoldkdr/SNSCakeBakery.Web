import React, { useState, useEffect, useMemo } from "react";
import { apiClient } from "../services/apiClient";
// Ensure this path matches where you saved the 'Delicious Cake' image
import cakeFallback from "../assets/cake-placeholder.png"; 

export default function MenuPage() {
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchMenu = async () => {
      try {
        setLoading(true);
        // Using the functional call style that matches Login.js
        const response = await apiClient("/products", { method: "GET" });
        
        // Normalize response data from custom wrapper
        const data = response.data || (typeof response.json === 'function' ? await response.json() : response);

        if (isMounted) {
          const normalizedData = Array.isArray(data) ? data : [];
          // OVERWRITE state (don't append) to prevent duplication
          setProducts(normalizedData);
          
          if (normalizedData.length > 0 && !activeCategory) {
            const firstCat = normalizedData[0].productTypeName || normalizedData[0].PRODUCTTYPENAME;
            setActiveCategory(firstCat);
          }
        }
      } catch (err) {
        if (isMounted) {
          console.error("API Error on Port 5050:", err);
          setError("Failed to load products. Check backend connection.");
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchMenu();
    return () => { isMounted = false; };
  }, [activeCategory]); // Dependency included to satisfy ESLint

  // Memoize categories to prevent recalculating on every render
  const categories = useMemo(() => {
    return [...new Set(products.map(p => p.productTypeName || p.PRODUCTTYPENAME))];
  }, [products]);

  // Memoize filtered list to prevent "ghost" duplicates during transitions
  const filteredProducts = useMemo(() => {
    return products.filter(p => 
      (p.productTypeName || p.PRODUCTTYPENAME) === activeCategory
    );
  }, [products, activeCategory]);

  if (loading) return <div className="page-wrapper"><h3>Baking the menu...</h3></div>;
  if (error) return <div className="page-wrapper text-danger"><h3>{error}</h3></div>;

  return (
    <div className="page-wrapper">
      <div className="content-box">
        <h2 className="page-title">OUR FULL MENU</h2>
        
        <div className="menu-tabs">
          {categories.map(cat => (
            <button
              key={`tab-${cat}`} 
              className={`menu-tab-button ${activeCategory === cat ? 'active-tab' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {(cat || "UNNAMED").toUpperCase()}
            </button>
          ))}
        </div>

        <div className="menu-product-grid">
          {filteredProducts.map((product, index) => {
            const name = product.name || product.NAME;
            const price = product.basePrice || product.BASEPRICE;
            const img = product.mainImageUrl || product.MAINIMAGEURL;
            const id = product.productId || product.PRODUCTID;
            const category = product.productTypeName || product.PRODUCTTYPENAME;

            // Principal Fix: Guaranteed unique key to resolve "Key 16" console error
            const uniqueKey = `${id}-${category}-${index}`;

            return (
              <div key={uniqueKey} className="product-card menu-product-card">
                <div className="menu-image-container">
                  <img 
                    src={img || cakeFallback} 
                    alt={name} 
                    className="menu-product-image"
                    loading="lazy"
                    onError={(e) => { e.target.src = cakeFallback; }}
                  />
                </div>
                <h4 className="product-name">{name}</h4>
                <p className="product-price">${Number(price || 0).toFixed(2)}</p>
                <button className="action-button gallery-btn add-to-cart-btn">
                  Add to Cart
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}