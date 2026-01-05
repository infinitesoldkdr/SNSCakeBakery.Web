import React, { useState } from "react";
// 1. Fixed Import: Added useNavigate
import { Link, useNavigate } from "react-router-dom"; 
import { userService } from "../services/userService";

export default function RegisterPage() {
    const navigate = useNavigate(); 
    
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        
        // Client-side validation
        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match!");
            return;
        }

        setIsLoading(true);
        setError("");

        try {
            // 3. Logic lives INSIDE the function, not the component body
            const userResponse = await userService.register({
                firstname: formData.firstname,
                lastname: formData.lastname,
                email: formData.email,
                password: formData.password
            });
            
            console.log("Registration successful! Please log in.");
            navigate("/login", { replace: true });
        } catch (err) {
            console.error("Registration Error:", err);
            setError(err.message || "Registration failed.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="page-wrapper page-container-auth">
            <div className="page-container-auth">
                <div className="auth-box">
                    <img src="src/images/sns-cakebakery-logo.png" alt="SNS Cakebakery Logo" className="sns-logo" />
                    <h2 className="title">REGISTER</h2>

                    {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

                    <form className="auth-form" onSubmit={handleRegister}>
                        <input
                            type="text"
                            name="firstname"
                            placeholder="First Name"
                            value={formData.name}
                            onChange={handleChange}
                            className="auth-input"
                            required
                        />
                        <input
                            type="text"
                            name="lastname"
                            placeholder="Last Name"
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
                        
                        <button type="submit" className="auth-button" disabled={isLoading}>
                            {isLoading ? "CREATING ACCOUNT..." : "CREATE ACCOUNT"}
                        </button>
                    </form>
                    
                    <p className="auth-link-text">
                        Already have an account? <Link to="/login" className="auth-link">Log In</Link>
                    </p>
                </div>

                <div className="footer-container">
                    <p className="footer-text">© 2025 SNS Cakebakery. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    );
}