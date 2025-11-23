// Navbar.jsx
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
    const { token, logout } = useContext(AuthContext);
    const [isCartOpen, setIsCartOpen] = useState(false);

    // SIMULATED CART DATA (The logic remains the same)
    const cartItems = [
        { id: 1, name: "Blush Rose Tier Cake", price: 95.0, quantity: 1 },
        { id: 4, name: "Petite Rose Cupcakes (Set of 6)", price: 30.0, quantity: 2 },
    ];

    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const navLinks = [
        { path: "/home", label: "Home" },
        { path: "/menu", label: "Menu" },
        { path: "/gallery", label: "Gallery" },
        { path: "/contact", label: "Contact" },
        { path: "/orders", label: "Order" },
    ];

    return (
        // Replaced styles.navbar with className="navbar"
        <nav className="navbar">
            {/* Replaced styles.brand with className="brand" */}
            <Link to="/" className="brand">SNS Cakebakery</Link>
            
            {/* Replaced styles.navLinks with className="nav-links" */}
            <div className="nav-links">
                {navLinks.map((link) => (
                    // Replaced styles.navItem with className="nav-item"
                    <Link key={link.path} to={link.path} className="nav-item">
                        {link.label}
                    </Link>
                ))}
            </div>

            {/* Replaced styles.authActions with className="auth-actions" */}
            <div className="auth-actions">
                {token ? (
                    <>
                        {/* Uses action-button and specific variation classes */}
                        <Link to="/orders" className="action-button order-button">
                            My Orders
                        </Link>
                        {/* The button element will use the global button style, customized by the class */}
                        <button className="action-button logout-button" onClick={logout}>
                            Logout
                        </button>
                    </>
                ) : (
                    <>
                        <Link to="/login" className="action-button login-button">
                            Login
                        </Link>
                    </>
                )}
                
                {/* --- Cart Icon and Toggle --- */}
                {/* Replaced styles.cartContainer with className="cart-container" */}
                <div className="cart-container">
                    {/* Replaced styles.cartIcon with className="cart-icon" */}
                    <button 
                        className="cart-icon" 
                        onClick={() => setIsCartOpen(!isCartOpen)}
                    >
                        🛍️ ({cartItems.length})
                    </button>
                    
                    {/* --- Floating Cart Window --- */}
                    {isCartOpen && (
                        // Replaced styles.floatingCart with className="floating-cart"
                        <div className="floating-cart">
                            {/* Replaced styles.cartTitle with className="cart-title" */}
                            <h4 className="cart-title">Your Cart ({cartItems.length})</h4>
                            
                            {cartItems.length > 0 ? (
                                <>
                                    {/* Using generic divs, inheriting styles from the cart scope */}
                                    <div className="item-list"> 
                                        {cartItems.map(item => (
                                            // Replaced styles.cartItemRow and styles.itemPrice
                                            <div key={item.id} className="cart-item-row">
                                                <span>{item.name} (x{item.quantity})</span>
                                                <span className="item-price">${(item.price * item.quantity).toFixed(2)}</span>
                                            </div>
                                        ))}
                                    </div>
                                    {/* Replaced styles.divider */}
                                    <div className="divider" />
                                    {/* Replaced styles.subtotalRow, styles.totalText, and styles.totalAmount */}
                                    <div className="subtotal-row">
                                        <span className="total-text">Subtotal:</span>
                                        <span className="total-amount">${subtotal.toFixed(2)}</span>
                                    </div>
                                    
                                    {/* Replaced styles.checkoutButton */}
                                    <Link 
                                        to="/checkout" 
                                        className="checkout-button"
                                        onClick={() => setIsCartOpen(false)}
                                    >
                                        PROCEED TO CHECKOUT
                                    </Link>
                                </>
                            ) : (
                                <p className = "empty-cart">Your cart is empty.</p>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}