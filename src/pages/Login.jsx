// LoginPage.jsx
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
// Assuming you import AuthContext as shown in your Navbar.jsx
// import { AuthContext } from "../context/AuthContext";

// NOTE: The 'styles' object is removed. We rely solely on index.css.

export default function Login() {
  // const { login } = useContext(AuthContext); // Uncomment for actual login logic
  
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login attempt:", formData);
    // login(formData.email, formData.password); // Uncomment for actual login logic
    alert("Login successful! (Simulated)");
  };

  return (
    // Replaced styles.outerContainer with className="page-wrapper" or a similar container
    <div className="page-wrapper page-container-auth">
      
      {/* Replaced styles.container with the second half of the container class */}
      <div className="page-container-auth">
        
        {/* Replaced styles.loginBox with className="auth-box" */}
        <div className="auth-box">
          <h1 className="header-title">SNS Cakebakery</h1>
          <p className="header-subtitle">Welcome Back</p>

          <h2 className="title">LOGIN</h2>
          {/* Replaced styles.form with className="auth-form" */}
          <form className="auth-form" onSubmit={handleLogin}>
            
            {/* Replaced styles.input with className="auth-input" */}
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="auth-input" 
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="auth-input" 
              required
            />
            
            {/* Replaced styles.button with className="auth-button" */}
            <button type="submit" className="auth-button">
              LOG IN
            </button>
          </form>
          
          {/* Replaced styles.registerLink with className="auth-link-text" */}
          <p className="auth-link-text">
            Don't have an account? <Link to="/register" className="auth-link">Register Here</Link>
          </p>
        </div>

        {/* Using global footer classes */}
        <div className="footer-container">
          <div className="social-icons">
            <Link to="#"><span className="social-icon">IG</span></Link>
            <Link to="#"><span className="social-icon">FB</span></Link>
            <Link to="#"><span className="social-icon">TW</span></Link>
            <Link to="#"><span className="social-icon">PT</span></Link>
          </div>
          <p className="footer-text">© 2024 SNS Cakebakery. All the Reserved.</p>
        </div>

      </div>
    </div>
  );
}