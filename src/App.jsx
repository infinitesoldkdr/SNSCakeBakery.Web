import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import snsLogo from "./assets/sns_logo.png";

// Modern SVG Icons (Tinted to Cocoa #4A2C2A)
const Icons = {
  Instagram: () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>,
  Facebook: () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>,
  YouTube: () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.12 1 12 1 12s0 3.88.46 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.88 23 12 23 12s0-3.88-.46-5.58z"></path><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon></svg>,
  Pinterest: () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="8" x2="12" y2="22"></line><path d="M9 13c-1.5-1.5-1.5-4.5 0-6s4.5-1.5 6 0 1.5 4.5 0 6"></path><path d="M12 8c2 0 4 1 4 3 0 2.5-2 4.5-4 4.5s-4-2-4-4.5c0-2 2-3 4-3z"></path></svg>,
  Chevron: ({ open }) => <svg style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: '0.3s' }} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"></path></svg>
};

const MenuSection = ({ title, items, isMasterOpen }) => {
  const [isLocalOpen, setIsLocalOpen] = useState(false);
  const isOpen = isMasterOpen || isLocalOpen;

  return (
    <div style={{ width: '100%', borderBottom: '1px solid #F5E6D3' }}>
      <button 
        onClick={() => setIsLocalOpen(!isLocalOpen)}
        style={{ 
          width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
          padding: '18px 0', background: 'none', border: 'none', cursor: 'pointer',
          color: '#4A2C2A', fontWeight: '600', fontSize: '1.1rem', fontFamily: 'inherit'
        }}
      >
        <span style={{ textAlign: 'left' }}>
          {title} <span style={{ fontSize: '0.8rem', fontWeight: '400', opacity: 0.8 }}>(Price per serving)</span>
        </span>
        <Icons.Chevron open={isOpen} />
      </button>
      <div style={{ 
        maxHeight: isOpen ? '600px' : '0', 
        overflow: 'hidden', 
        transition: 'max-height 0.4s ease-in-out',
        textAlign: 'left'
      }}>
        <div style={{ paddingBottom: '20px' }}>
          {items.map((item, idx) => (
            <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', fontSize: '0.95rem', color: '#6F4E37' }}>
              <span>{item.name}</span>
              <span style={{ fontWeight: '700' }}>{item.price}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ComingSoon = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const menuData = {
    Cakes: [
      { name: "Vanilla Bean", price: "$8" }, { name: "Lemon", price: "$8" }, { name: "Strawberry", price: "$8" },
      { name: "Orange Creamsicle", price: "$8" }, { name: "Chocolate Fudge", price: "$8" }, { name: "Funfetti", price: "$8" }, { name: "Key Lime", price: "$8" }
    ],
    Cupcakes: [
      { name: "Vanilla Bean", price: "$5" }, { name: "Lemon Raspberry", price: "$5" }, { name: "Strawberry Lemonade", price: "$5" },
      { name: "Pineapple Coconut", price: "$5" }, { name: "Chocolate Fudge", price: "$5" }, { name: "Funfetti", price: "$5" }, { name: "Key Lime", price: "$5" }
    ],
    Cookies: [
      { name: "Vanilla Bean Sugar", price: "$4" }, { name: "Lemon Sugar", price: "$4" }, { name: "Strawberry Sugar", price: "$4" },
      { name: "Almond Sugar", price: "$4" }, { name: "Chocolate Chip", price: "$4" }, { name: "White Chocolate Macadamia", price: "$4" }, { name: "Oatmeal", price: "$4" }
    ]
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#FFF9F5', color: '#4A2C2A', fontFamily: 'system-ui, -apple-system, sans-serif', padding: '60px 20px' }}>
      <div style={{ padding: '50px 30px', borderRadius: '28px', backgroundColor: '#FFFFFF', boxShadow: '0 25px 50px rgba(74, 44, 42, 0.08)', maxWidth: '550px', width: '100%', textAlign: 'center' }}>
        
        <img src={snsLogo} alt="SNS Cake Bakery" style={{ width: '100%', maxWidth: '380px', marginBottom: '10px' }} />
        <div style={{ width: '40px', height: '3px', backgroundColor: '#D4A373', margin: '15px auto' }}></div>

        <h2 style={{ fontSize: '1.7rem', fontWeight: '500', marginBottom: '15px', color: '#5D4037' }}>
          Something Sweet is Baking.
        </h2>
        <p style={{ fontSize: '1.05rem', lineHeight: '1.6', color: '#6F4E37', marginBottom: '35px' }}>
          Welcome! We are currently refreshing our digital storefront. Follow us for updates or browse our menu below.
        </p>
        
        <button 
          onClick={() => setIsMenuVisible(!isMenuVisible)}
          style={{ 
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
            width: '100%', padding: '15px 0', background: '#FDF2E9', border: '1px solid #F5E6D3',
            borderRadius: '12px', cursor: 'pointer', color: '#4A2C2A', fontWeight: '700', 
            fontSize: '1.2rem', marginBottom: '10px', transition: '0.3s'
          }}
        >
          Browse Our Menu
          <Icons.Chevron open={isMenuVisible} />
        </button>

        <div style={{ 
          maxHeight: isMenuVisible ? '1500px' : '0', 
          overflow: 'hidden', 
          transition: 'max-height 0.6s ease-in-out',
          textAlign: 'left',
          marginBottom: '30px'
        }}>
          <MenuSection title="Cakes" items={menuData.Cakes} isMasterOpen={isMenuVisible} />
          <MenuSection title="Cupcakes" items={menuData.Cupcakes} isMasterOpen={isMenuVisible} />
          <MenuSection title="Cookies" items={menuData.Cookies} isMasterOpen={isMenuVisible} />
          <p style={{ fontSize: '0.75rem', fontStyle: 'italic', marginTop: '15px', color: '#A08070', textAlign: 'center' }}>
            Prices listed are the base price per serving. Custom designs may incur additional charges.
          </p>
        </div>

        <a 
          href="https://docs.google.com/forms/d/e/1FAIpQLSeo4RvA71NqZmQGigrypF91kL7pB7nSwmDRHL51ThcP1xDVzg/viewform" 
          target="_blank" rel="noreferrer"
          style={{ 
            display: 'inline-block', padding: '14px 30px', backgroundColor: '#4A2C2A', color: '#FFF9F5', 
            textDecoration: 'none', borderRadius: '50px', fontWeight: 'bold', fontSize: '0.9rem',
            marginBottom: '40px', boxShadow: '0 4px 15px rgba(74, 44, 42, 0.2)'
          }}
        >
          SUBMIT AN ORDER REQUEST
        </a>

        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '25px', borderTop: '1px solid #F5E6D3', gap: '25px' }}>
          <a href="https://instagram.com/snscakebakery" target="_blank" rel="noreferrer" style={{ color: '#4A2C2A' }}><Icons.Instagram /></a>
          <a href="https://www.facebook.com/p/SNS-Cake-Bakery-100090057444715/" target="_blank" rel="noreferrer" style={{ color: '#4A2C2A' }}><Icons.Facebook /></a>
          <a href="https://www.youtube.com/@snscakebakery" target="_blank" rel="noreferrer" style={{ color: '#4A2C2A' }}><Icons.YouTube /></a>
          <a href="https://pinterest.com/snscakebakery" target="_blank" rel="noreferrer" style={{ color: '#4A2C2A' }}><Icons.Pinterest /></a>
        </div>
      </div>
      
      <p style={{ marginTop: '40px', fontSize: '0.8rem', opacity: 0.5, fontWeight: 'bold', letterSpacing: '2px' }}>
        SNS CAKE BAKERY | EST. 2026
      </p>
    </div>
  );
};

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path="*" element={<Navigate to="/coming-soon" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}