// RegisterPage.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom"; 
// NOTE: The 'styles' object is removed. We rely solely on index.css.

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Registration attempt:", formData);
    // Add real API call to register user here
    alert("Registration successful! (Simulated)");
  };

  return (
    // Uses the main page container class
    <div className="page-wrapper page-container-auth">
      
      <div className="page-container-auth">
        
        {/* Uses the common authentication box class */}
        <div className="auth-box">
          <img src="src/images/sns-cakebakery-logo.png" alt="SNS Cakebakery Logo" className="sns-logo" />

          <h2 className="title">REGISTER</h2>
          {/* Uses the common authentication form class */}
          <form className="auth-form" onSubmit={handleRegister}>
            
            {/* All inputs use the common authentication input class */}
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="auth-input"
              required
            />
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
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="auth-input"
              required
            />
            
            {/* Uses the common authentication button class */}
            <button type="submit" className="auth-button">
              CREATE ACCOUNT
            </button>
          </form>
          
          {/* Uses the common authentication link text and link classes */}
          <p className="auth-link-text">
            Already have an account? <Link to="/login" className="auth-link">Log In</Link>
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
          <p className="footer-text">© 2025 SNS Cakebakery. All the Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;