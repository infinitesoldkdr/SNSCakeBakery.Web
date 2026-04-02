import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import snsLogo from "./assets/sns_logo.png";
import favicon from "./assets/SNSLogo.ico";
import { Instagram, Facebook, Youtube, ChevronUp, ChevronDown } from "lucide-react"; 

const Icons = {
  Instagram: () => <Instagram size={22} />,
  Facebook: () => <Facebook size={22} />,
  YouTube: () => <Youtube size={22} />,
  Pinterest: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.966 1.406-5.966s-.359-.72-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.215-.174.26-.401.154-1.495-.697-2.43-2.888-2.43-4.649 0-3.785 2.75-7.259 7.929-7.259 4.164 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592 0 11.972 0" />
    </svg>
  )
};

const MenuSection = ({ title, subtext, items }) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div style={{ marginBottom: '24px', textAlign: 'left' }}>
      <div 
        onClick={() => setIsOpen(!isOpen)}
        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', borderBottom: '1px solid #E5E5E5', paddingBottom: '6px', marginBottom: '14px' }}
      >
        <h3 style={{ fontSize: '1.05rem', color: '#1A1A1A', fontWeight: '800', margin: 0, fontFamily: 'serif', letterSpacing: '0.02em' }}>
          {title.toUpperCase()} <span style={{ fontSize: '0.65rem', color: '#757575', fontWeight: '400', fontFamily: 'sans-serif' }}>({subtext})</span>
        </h3>
        {isOpen ? <ChevronUp size={18} color="#757575" /> : <ChevronDown size={18} color="#757575" />}
      </div>
      {isOpen && items.map((item, idx) => (
        <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', fontSize: '0.95rem', fontFamily: 'sans-serif' }}>
          <span style={{ color: '#4A4A4A' }}>{item.name}</span>
          <span style={{ fontWeight: '700', color: '#1A1A1A' }}>${item.price}</span>
        </div>
      ))}
    </div>
  );
};

const ComingSoon = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  // Force favicon update from assets
  useEffect(() => {
    const link = document.querySelector("link[rel~='icon']");
    if (link) {
      link.href = favicon;
    }
  }, []);

  const menuData = [
    {
      title: "Cakes", subtext: "PRICE PER SERVING",
      items: [
        { name: "Vanilla Bean", price: 8 }, { name: "Lemon", price: 8 },
        { name: "Strawberry", price: 8 }, { name: "Orange Creamsicle", price: 8 },
        { name: "Chocolate Fudge", price: 8 }, { name: "Funfetti", price: 8 },
        { name: "Key Lime", price: 8 }
      ]
    },
    {
      title: "Cupcakes", subtext: "PRICE PER SERVING",
      items: [
        { name: "Vanilla Bean", price: 5 }, { name: "Lemon Raspberry", price: 5 },
        { name: "Strawberry Lemonade", price: 5 }, { name: "Pineapple Coconut", price: 5 },
        { name: "Chocolate Fudge", price: 5 }, { name: "Funfetti", price: 5 },
        { name: "Key Lime", price: 5 }
      ]
    },
    {
      title: "Cookies", subtext: "PRICE PER SERVING",
      items: [
        { name: "Vanilla Bean Sugar", price: 4 }, { name: "Lemon Sugar", price: 4 },
        { name: "Strawberry Sugar", price: 4 }, { name: "Almond Sugar", price: 4 },
        { name: "Chocolate Chip", price: 4 }, { name: "White Chocolate Macadamia", price: 4 },
        { name: "Oatmeal", price: 4 }
      ]
    }
  ];

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#FDF9F6', color: '#1A1A1A', fontFamily: 'sans-serif', padding: '40px 20px' }}>
      
      <div style={{ padding: '0px 24px 40px 24px', borderRadius: '32px', backgroundColor: '#FFFFFF', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', maxWidth: '500px', width: '100%', textAlign: 'center' }}>
        
        {/* Logo Section */}
        <div style={{ marginTop: '-25px', marginBottom: '10px' }}> 
          <img src={snsLogo} alt="SNS Cake Bakery" style={{ width: '100%', maxWidth: '380px', margin: '0 auto', display: 'block' }} />
        </div>
        
        <div style={{ width: '40px', height: '2.5px', backgroundColor: '#D4A373', margin: '0 auto 24px auto' }}></div>

        {/* Heading Section */}
        <h2 style={{ fontSize: '1.8rem', fontWeight: '600', marginBottom: '12px', color: '#5D4037', fontFamily: 'serif' }}>
          Something Sweet is Baking.
        </h2>
        <p style={{ fontSize: '1rem', lineHeight: '1.5', color: '#757575', marginBottom: '32px', padding: '0 10px' }}>
          Welcome! We are currently refreshing our digital storefront. View our menu or start an order request below.
        </p>
        
        {/* Action Buttons */}
        <button 
          onClick={() => setIsMenuVisible(!isMenuVisible)} 
          style={{ width: '100%', padding: '16px', background: '#F9F1EB', border: 'none', borderRadius: '12px', cursor: 'pointer', color: '#1A1A1A', fontWeight: '700', fontSize: '1rem', marginBottom: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}
        >
          BROWSE OUR MENU {isMenuVisible ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>

        {isMenuVisible && (
          <div style={{ marginTop: '20px', padding: '0 4px', marginBottom: '24px' }}>
            {menuData.map((section, idx) => (
              <MenuSection key={idx} title={section.title} subtext={section.subtext} items={section.items} />
            ))}
            <div style={{ borderTop: '1px solid #E5E5E5', paddingTop: '16px' }}>
               <p style={{ fontSize: '0.72rem', fontStyle: 'italic', color: '#8E8E8E', lineHeight: '1.4' }}>
                Prices listed are the base price per serving. <br />
                Sugar cookies with royal icing are an additional $1 per serving. <br />
                Custom designs may incur additional charges.
              </p>
            </div>
          </div>
        )}

        <a href="https://docs.google.com/forms/d/e/1FAIpQLSeo4RvA71NqZmQGigrypF91kL7pB7nSwmDRHL51ThcP1xDVzg/viewform" 
           target="_blank" 
           rel="noreferrer" 
           style={{ display: 'block', padding: '18px', backgroundColor: '#45322E', color: '#FFFFFF', textDecoration: 'none', borderRadius: '50px', fontWeight: '700', marginBottom: '16px', fontSize: '1rem' }}>
          REQUEST A CUSTOM CAKE
        </a>

        <a href="https://docs.google.com/forms/d/e/1FAIpQLSf-n2ObSZfVgjDMMrgF_CC507N2oDOtwEZ-RYDogecwCjvq9Q/viewform" 
           target="_blank" 
           rel="noreferrer" 
           style={{ display: 'block', padding: '18px', backgroundColor: '#FFFFFF', color: '#4A2C2A', border: '2px solid #4A2C2A', textDecoration: 'none', borderRadius: '50px', fontWeight: '700', marginBottom: '32px', fontSize: '1rem' }}>
          REQUEST BALLOON DECOR
        </a>

        {/* Social Icons */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '32px', paddingTop: '24px', borderTop: '1px solid #F0F0F0', gap: '24px' }}>
          <a href="https://instagram.com/snscakebakery" target="_blank" rel="noreferrer" style={{ color: '#1A1A1A' }}><Icons.Instagram /></a>
          <a href="https://www.facebook.com/p/SNS-Cake-Bakery-100090057444715/" target="_blank" rel="noreferrer" style={{ color: '#1A1A1A' }}><Icons.Facebook /></a>
          <a href="https://www.youtube.com/@snscakebakery" target="_blank" rel="noreferrer" style={{ color: '#1A1A1A' }}><Icons.YouTube /></a>
          <a href="https://pinterest.com/snscakebakery" target="_blank" rel="noreferrer" style={{ color: '#1A1A1A' }}><Icons.Pinterest /></a>
        </div>
      </div>

      {/* Footer Section */}
      <p style={{ fontSize: '0.7rem', letterSpacing: '0.2em', color: '#A68E82', fontWeight: '600', marginTop: '40px', textTransform: 'uppercase' }}>
        SNS CAKE BAKERY | EST. 2020
      </p>
    </div>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Set the ComingSoon component as the index/root page */}
        <Route path="/" element={<ComingSoon />} />
        
        {/* Catch-all: If someone goes to /coming-soon or any other path, 
            redirect them to the main page */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}