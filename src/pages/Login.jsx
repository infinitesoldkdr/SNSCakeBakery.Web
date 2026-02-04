import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import { useAuth } from "../context/AuthContext";
import { authService } from "../services/authService"; // This now uses Firebase
import { apiClient } from "../services/apiClient";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate(); // Initialize the redirect hook
  
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (error) setError(""); // Clear errors when user types
  };

const handleLogin = async (e) => {
  e.preventDefault();
  setIsLoading(true);
  setError("");

  try {
    // 1. Firebase login (The Identity check)
    const user = await authService.login(formData);
    
    // 2. Get the Token (The "Passport")
    const idToken = await user.getIdToken();

    // 3. Sync with your .NET API (The "Session" check)
    // We send the token in the header and the user info in the body
await apiClient("/auth/sync", {
  method: "POST",
  body: JSON.stringify({
    email: user.email,
    firstName: "", 
    lastName: ""
  }),
  // Your wrapper handles the Authorization header automatically, 
  // but you can pass it here to be safe:
  headers: {
    Authorization: `Bearer ${idToken}`
  }
});

    // 4. Now that the Backend is synced, update Context and Redirect
    login(user); 
    navigate("/home", { replace: true });

  } catch (err) {
    console.error("FLOW STOPPED:", err);
    setError("Authentication failed during sync. Check backend connection.");
  } finally {
    setIsLoading(false);
  }
};

  return (
    <div className="page-wrapper page-container-auth">
      <div className="page-container-auth">
        <div className="auth-box">
          <h1 className="header-title"> 
            <img src="src/images/sns-cakebakery-logo.png" alt="SNS Cakebakery Logo" className="sns-logo" />
          </h1>

          {/* Display error message if login fails */}
          {error && <p className="auth-error-message" style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

          <form className="auth-form" onSubmit={handleLogin}>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="auth-input" 
              disabled={isLoading}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="auth-input" 
              disabled={isLoading}
              required
            />
            
            <button type="submit" className="auth-button" disabled={isLoading}>
              {isLoading ? "LOGGING IN..." : "LOG IN"}
            </button>
          </form>
          
          <p className="auth-link-text">
            Don't have an account? <Link to="/register" className="auth-link">Register Here</Link>
          </p>
        </div>

        <div className="footer-container">
          <div className="social-icons">
            <span className="social-icon">IG</span>
            <span className="social-icon">FB</span>
            <span className="social-icon">TW</span>
            <span className="social-icon">PT</span>
          </div>
          <p className="footer-text">© 2025 SNS Cakebakery. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}