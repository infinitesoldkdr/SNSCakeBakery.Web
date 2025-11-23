// GalleryPage.jsx
import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation/buttons

// Placeholder data for gallery images
const galleryImages = [
  { id: 1, src: "gallery_cake_1.jpg", alt: "Elegant Multi-Tier Blush Cake" },
  { id: 2, src: "gallery_cake_2.jpg", alt: "Floral Decorated White Cake" },
  { id: 3, src: "gallery_cake_3.jpg", alt: "Modern Geometric Cake Design" },
  { id: 4, src: "gallery_cake_4.jpg", alt: "Vintage Inspired Lace Cake" },
  { id: 5, src: "gallery_cake_5.jpg", alt: "Macaron Tower with Small Cake" },
  { id: 6, src: "gallery_cake_6.jpg", alt: "Dessert Table Assortment" },
  { id: 7, src: "gallery_cake_7.jpg", alt: "Wedding Cake with Fresh Flowers" },
  { id: 8, src: "gallery_cake_8.jpg", alt: "Birthday Cake with Gold Accents" },
  { id: 9, src: "gallery_cake_9.jpg", alt: "Baby Shower Animal Theme Cake" },
];

const GalleryPage = () => {
  return (
    // Uses the global page wrapper class
    <div className="page-wrapper">
      
      {/* Wrapper to hold the content centered below the Navbar */}
      <div className="page-wrapper"> 
        
        {/* Header/Logo section using auth header classes for consistency */}
        <h1 className="header-title">SNS Cakebakery</h1>
        <p className="header-subtitle">Handcrafted Cakes & Desserts</p>
        
        {/* Uses the common content box class for width constraint and centering */}
        <div className="content-box">
          
          <h2 className="page-title">OUR GALLERY</h2>
          <p className="page-description">
            Explore our portfolio of handcrafted cakes and desserts, designed for every occasion.
          </p>
          
          {/* Uses the gallery grid class */}
          <div className="gallery-grid">
            {galleryImages.map((image) => (
              <div key={image.id} className="gallery-item">
                
                {/* Placeholder div with specific class */}
                <div className="image-placeholder">
                  {/* In a real app, replace with <img src={image.src} alt={image.alt} className="gallery-image" /> */}
                  [Image Placeholder]
                </div>
                
                {/* Uses the image caption class */}
                <p className="image-caption">{image.alt}</p>
                <Link to="/create-order" className="action-button gallery-btn">
                    Order Similar
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Footer component (using global classes) */}
      <div className="footer-container">
        <p className="footer-text">© 2024 SNS Cakebakery. All the Reserved.</p>
      </div>
    </div>
  );
};

export default GalleryPage;