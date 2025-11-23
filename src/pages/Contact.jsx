// ContactPage.jsx
import React, { useState } from "react";
// Removed: import Navbar from './Navbar'; 
import { Link } from "react-router-dom"; // Use Link for social icons

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    alert("Message sent! We will respond to you shortly.");
    // Add API call or email submission logic here
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    // Uses page-wrapper for the overall layout
    <div className="page-wrapper">
      
      {/* Content area that wraps the main form and info */}
      <div className="page-wrapper">
        <div className="content-box">
          
          {/* Uses global page title and description classes */}
          <h2 className="page-title">GET IN TOUCH</h2>
          <p className="page-description">
            We'd love to hear from you regarding custom orders, collaborations, or general inquiries.
          </p>

          {/* New class for the main two-column content area */}
          <div className="contact-main-content">
            
            {/* Left Column: Contact Form */}
            <div className="contact-form-column">
              <h3 className="section-title">Send Us a Message</h3>
              
              {/* Uses the general form class */}
              <form onSubmit={handleSubmit} className="contact-form">
                
                {/* Inputs use the form-input class */}
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject (e.g., Custom Order Inquiry)"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
                {/* Textarea uses the form-textarea class */}
                <textarea
                  name="message"
                  placeholder="Your Message..."
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                  rows="5"
                  required
                ></textarea>
                
                {/* Uses the primary button class */}
                <button type="submit" className="checkout-btn contact-button">
                  SEND MESSAGE
                </button>
              </form>
            </div>

            {/* Right Column: Contact Details & Hours */}
            <div className="contact-info-column">
              <h3 className="section-title">Contact Details</h3>
              <div className="detail-group">
                <p className="detail-label">Email:</p>
                <p className="detail-value">hello@snscakebakery.com</p>
              </div>
              <div className="detail-group">
                <p className="detail-label">Phone:</p>
                <p className="detail-value">(555) 123-4567</p>
              </div>
              
              <h3 className="section-title contact-mt-30">Visit Us (By Appointment Only)</h3>
              <p className="detail-value">
                123 Sweet Avenue, Suite 101<br />
                Cake Town, CA 90210
              </p>

              <h3 className="section-title contact-mt-30">Business Hours</h3>
              <p className="detail-value">
                Monday - Friday: 9:00 AM - 5:00 PM<br />
                Saturday: 9:00 AM - 1:00 PM<br />
                Sunday: Closed
              </p>
              
              {/* Uses existing social icon classes */}
              <div className="social-icons contact-mt-30">
                <Link to="https://www.instagram.com/snscakebakery/" target="_blank" rel="noopener noreferrer" className="social-icon">IG</Link>
                <Link to="#" className="social-icon">FB</Link>
                <Link to="#" className="social-icon">PT</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Uses global footer container and text classes */}
      <div className="footer-container">
        <p className="footer-text">© 2024 SNS Cakebakery. All the Reserved.</p>
      </div>
    </div>
  );
};

export default Contact;