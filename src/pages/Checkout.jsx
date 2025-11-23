// CheckoutPage.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom"; 
// NOTE: The styles object has been removed.

const Checkout = () => {
  const [shippingDetails, setShippingDetails] = useState({
    name: "",
    address: "",
    city: "",
    zip: "",
    phone: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("creditCard");
  
  // SIMULATED CART DATA (Uses a mix to demonstrate quote logic)
  const cartItems = [
    { name: "Blush Rose Tier Cake", price: 95.0, quantity: 1, isCustom: false },
    { name: "Custom Wedding Cake Request", price: 0.0, quantity: 1, isCustom: true }, 
  ];

  // LOGIC: Check if ANY item in the cart requires a quote
  const requiresQuoteOnly = cartItems.some(item => item.isCustom || item.price === 0);

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  // Shipping logic remains here, but the value will be TBD if a quote is required
  const shipping = 15.0; 
  const total = subtotal + shipping;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingDetails(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    if (requiresQuoteOnly) {
      alert("This cart contains unpriced custom items. Please use the 'Request Quote' option.");
      return;
    }
    console.log("Processing standard order:", { shippingDetails, paymentMethod, total });
    alert(`Order Placed! Total: $${total.toFixed(2)} (Simulated)`);
  };

  const handleRequestQuote = (e) => {
    e.preventDefault();
    console.log("Submitting quote request:", { shippingDetails, cartItems });
    alert("Quote request submitted! We will contact you with a final price shortly.");
  };

  return (
    <div className="page-wrapper">
      
      <div className="page-wrapper">
        <div className="content-box">
          
          <h2 className="page-title">CHECKOUT</h2>

          {/* Form wrapper for the two-column layout */}
          <form className="checkout-form">
            
            {/* LEFT COLUMN: Shipping and Payment */}
            <div className="left-column">
              
              <div className="form-section">
                <h3 className="section-title">1. Contact & Delivery Details</h3>
                
                {/* Inputs use the standard checkout-input class */}
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={shippingDetails.name}
                  onChange={handleInputChange}
                  className="checkout-input"
                  required
                />
                <input
                  type="text"
                  name="address"
                  placeholder="Street Address"
                  value={shippingDetails.address}
                  onChange={handleInputChange}
                  className="checkout-input"
                  required
                />
                <div className="checkout-row">
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={shippingDetails.city}
                    onChange={handleInputChange}
                    className="checkout-input"
                    style={{ flex: 1 }} // Keeping flex inline as it's layout specific
                    required
                  />
                  <input
                    type="text"
                    name="zip"
                    placeholder="Zip Code"
                    value={shippingDetails.zip}
                    onChange={handleInputChange}
                    className="checkout-input"
                    style={{ flex: 1 }} // Keeping flex inline as it's layout specific
                    required
                  />
                </div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number (for contact)"
                  value={shippingDetails.phone}
                  onChange={handleInputChange}
                  className="checkout-input"
                  required
                />
              </div>

              {/* Payment Method Section (Hidden if only quote is allowed) */}
              {!requiresQuoteOnly && (
                <div className="form-section">
                  <h3 className="section-title">2. Payment Method</h3>
                  <div className="radio-group">
                    <label className="radio-label">
                      <input
                        type="radio"
                        value="creditCard"
                        checked={paymentMethod === "creditCard"}
                        onChange={() => setPaymentMethod("creditCard")}
                        className="radio-input"
                      />
                      Credit/Debit Card
                    </label>
                    <label className="radio-label">
                      <input
                        type="radio"
                        value="paypal"
                        checked={paymentMethod === "paypal"}
                        onChange={() => setPaymentMethod("paypal")}
                        className="radio-input"
                      />
                      PayPal
                    </label>
                  </div>
                </div>
              )}
              
              {/* Conditional Submission Buttons */}
              <div className="button-group">
                {/* Option 1: Checkout Button (If cart has no unpriced custom items) */}
                {!requiresQuoteOnly && (
                  <button type="submit" onClick={handleCheckout} className="checkout-btn">
                    PLACE ORDER: ${total.toFixed(2)}
                  </button>
                )}

                {/* Option 2: Request Quote Button (Always available, or required if cart has custom items) */}
                <button 
                    type="submit" 
                    onClick={handleRequestQuote} 
                    className={`checkout-btn ${requiresQuoteOnly ? 'quote-btn' : 'quote-btn'}`}
                >
                    {requiresQuoteOnly ? "SUBMIT QUOTE REQUEST" : "REQUEST QUOTE INSTEAD"}
                </button>
              </div>
              
              <p className="policy-text">
                {requiresQuoteOnly ? 
                  "We will contact you within 48 hours to confirm details and finalize your order." :
                  "Choosing 'Request Quote Instead' will submit your details without payment."
                }
              </p>
            </div>

            {/* RIGHT COLUMN: Order Summary */}
            <div className="right-column">
              <div className="summary-box">
                <h3 className="summary-title">Order Summary</h3>
                {cartItems.map((item, index) => (
                  <div key={index} className="summary-item-row">
                    <span className="summary-item-name">{item.name} (x{item.quantity})</span>
                    <span className="summary-item-price">{item.isCustom ? "TBD" : `$${(item.price * item.quantity).toFixed(2)}`}</span>
                  </div>
                ))}
                <div className="divider" />
                <div className="summary-item-row">
                  <span>Subtotal:</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="summary-item-row">
                  <span>Shipping:</span>
                  <span>{requiresQuoteOnly ? "TBD" : `$${shipping.toFixed(2)}`}</span>
                </div>
                <div className="divider" />
                <div className="summary-total-row">
                  <span className="summary-total-text">Current Total:</span>
                  <span className="summary-total-amount">
                    {requiresQuoteOnly ? "**Awaiting Quote**" : `$${total.toFixed(2)}`}
                  </span>
                </div>
                {requiresQuoteOnly && (
                    <p className="policy-text">* Final price will be confirmed after your custom quote is approved.</p>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
      
      {/* Footer component */}
      <div className="footer-container">
        <p className="footer-text">© 2025 SNS Cakebakery. All the Reserved.</p>
      </div>
    </div>
  );
};

export default Checkout;