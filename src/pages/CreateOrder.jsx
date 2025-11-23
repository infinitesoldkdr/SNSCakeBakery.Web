// CreateOrder.jsx
import React, { useState } from "react";
// NOTE: The styles object has been removed.

const CreateOrder = () => {
  const [orderData, setOrderData] = useState({
    type: "cake", // Default to Custom Cake
    quantity: 1, 
    servings: 10,
    theme: "",
    flavor: "",
    deliveryDate: "", // Required field
    message: "",
    budget: 150,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderData(prev => ({ 
        ...prev, 
        [name]: value,
        // Logic to reset quantity/servings based on item type
        ...(name === 'type' && value !== 'cake' ? { servings: 0, quantity: 1 } : {}),
        ...(name === 'type' && value === 'cake' ? { quantity: 1 } : {}),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!orderData.deliveryDate) {
        alert("Please select a required delivery or pickup date.");
        return;
    }
    console.log("Custom Order Request Submitted:", orderData);
    alert("Your custom order request has been submitted! We will contact you within 48 hours with a quote.");
    // Add API call to submit the custom order request here
  };

  const isCake = orderData.type === 'cake';

  return (
    // Replaced styles.outerContainer and styles.container with className="page-wrapper"
    <div className="page-wrapper">
      
      <div className="page-wrapper">
        {/* Replaced styles.contentWrapper with className="content-box" */}
        <div className="content-box">
          {/* Replaced styles.pageTitle and styles.pageDescription */}
          <h2 className="page-title">DESIGN YOUR DREAM DESSERT</h2>
          <p className="page-description">
            Tell us about your event and desired creation. We'll craft a custom quote for you!
          </p>

          {/* Replaced styles.formGrid with className="form-grid-2col" */}
          <form onSubmit={handleSubmit} className="form-grid-2col">
            
            {/* --- Section 1: Order Details --- */}
            {/* Replaced styles.section with className="form-section" */}
            <div className="form-section">
              {/* Replaced styles.sectionTitle with className="section-title" */}
              <h3 className="section-title">1. Item & Quantity</h3>
              
              {/* Replaced styles.label with className="form-label" */}
              <label className="form-label">Item Type:</label>
              <select 
                name="type" 
                value={orderData.type} 
                onChange={handleChange} 
                className="form-input" // Replaced styles.input
              >
                <option value="cake">Custom Cake</option>
                <option value="minicake">Mini Cakes (Sets)</option>
                <option value="cupcakes">Cupcakes (Dozens)</option>
                <option value="cookies">Cookies (Dozens)</option>
                <option value="cakepops">Cake Pops (Dozens)</option>
              </select>

              {isCake ? (
                <>
                  <label className="form-label">Approximate Servings:</label>
                  <input 
                    type="number" 
                    name="servings" 
                    value={orderData.servings} 
                    onChange={handleChange} 
                    className="form-input" 
                    min="1"
                    required
                  />
                </>
              ) : (
                <>
                  <label className="form-label">Quantity (in Dozens/Sets):</label>
                  <input 
                    type="number" 
                    name="quantity" 
                    value={orderData.quantity} 
                    onChange={handleChange} 
                    className="form-input" 
                    min="1"
                    required
                  />
                </>
              )}
               
              <label className="form-label">Desired Delivery/Pickup Date (Required):</label>
              <input 
                type="date" 
                name="deliveryDate" 
                value={orderData.deliveryDate} 
                onChange={handleChange} 
                className="form-input" 
                required 
              />
            </div>
            
            {/* --- Section 2: Design & Flavor --- */}
            <div className="form-section">
              <h3 className="section-title">2. Creative Vision</h3>
              
              <label className="form-label">Theme / Style / Colors:</label>
              <input 
                type="text" 
                name="theme" 
                placeholder="E.g., Blush Pink Floral, Boho Gold, Minimalist"
                value={orderData.theme} 
                onChange={handleChange} 
                className="form-input" 
                required
              />

              <label className="form-label">Flavor/Frosting Preferences:</label>
              <textarea
                name="flavor"
                placeholder={isCake ? "E.g., Vanilla cake with Raspberry filling" : "E.g., Half Vanilla/Half Chocolate, specify frosting color"}
                value={orderData.flavor}
                onChange={handleChange}
                className="form-textarea" // Replaced styles.textarea
                rows="3"
                required
              />

              <label className="form-label">Inspirational Photo Link (Optional):</label>
              <input 
                type="url" 
                name="photoLink" 
                placeholder="Paste link to Pinterest/Instagram image"
                onChange={handleChange} 
                className="form-input"
              />
            </div>

            {/* --- Section 3: Budget & Message (Full Width) --- */}
            {/* Replaced styles.fullWidthSection with className="full-width-section" */}
            <div className="form-section full-width-section">
              <h3 className="section-title">3. Additional Information</h3>
              
              <label className="form-label">Estimated Budget (USD): ${orderData.budget}</label>
              <input 
                type="range" 
                name="budget" 
                min="50" 
                max="500" 
                step="10" 
                value={orderData.budget} 
                onChange={handleChange} 
                className="range-input" // Replaced styles.rangeInput
              />
              <p className="range-text">Custom order starts at $50 (desserts) / $100 (cakes).</p>

              <label className="form-label">Any other details:</label>
              <textarea
                name="message"
                placeholder="Allergies, specific time for pickup, contact notes, etc."
                value={orderData.message}
                onChange={handleChange}
                className="form-textarea" 
                rows="4"
              />
              
              {/* Uses the global button styles */}
              <button type="submit" className="checkout-btn"> 
                SUBMIT CUSTOM REQUEST
              </button>
              
            </div>
          </form>
        </div>
      </div>
      
      {/* Footer component (using global classes) */}
      <div className="footer-container">
        <p className="footer-text">© 2025 SNS Cakebakery. All the Reserved.</p>
      </div>
    </div>
  );
};

export default CreateOrder;