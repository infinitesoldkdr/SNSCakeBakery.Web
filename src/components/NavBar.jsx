import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
    const { token, logout } = useContext(AuthContext);
    const [isCartOpen, setIsCartOpen] = useState(false);

const socialLinks = [
    {
        name: "Instagram",
        url: "https://www.instagram.com/snscakebakery/?hl=en",
        icon: "https://cdn-icons-png.flaticon.com/512/174/174855.png",
    },
    {
        name: "YouTube",
        url: "https://www.youtube.com/@snscakebakery",
        // Switched to a clean silhouette 'play' button
        icon: "https://cdn-icons-png.flaticon.com/512/1077/1077046.png",
    },
    {
        name: "Facebook",
        url: "https://www.facebook.com/p/SNS-Cake-Bakery-100090057444715/",
        // Switched to a clean silhouette 'f' logo
        icon: "https://cdn-icons-png.flaticon.com/512/2111/2111392.png",
    }
];

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
        <nav className="navbar">
            {/* Left side: Brand + Socials */}
            <div className="navbar-brand-group">
                <Link to="/" className="brand">SNS Cakebakery</Link>
                
                <div className="nav-social-icons">
                    {socialLinks.map((social) => (
                        <a 
                            key={social.name}
                            href={social.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="nav-social-link"
                            title={social.name}
                        >
                            <div 
                                className="social-icon-mask" 
                                style={{ '--icon-url': `url(${social.icon})` }}
                            />
                        </a>
                    ))}
                </div>
            </div>
            
            {/* Center: Navigation */}
            <div className="nav-links">
                {navLinks.map((link) => (
                    <Link key={link.path} to={link.path} className="nav-item">
                        {link.label}
                    </Link>
                ))}
            </div>

            {/* Right: Auth & Cart */}
            <div className="auth-actions">
                {token ? (
                    <>
                        <Link to="/orders" className="action-button order-button">My Orders</Link>
                        <button className="action-button logout-button" onClick={logout}>Logout</button>
                    </>
                ) : (
                    <Link to="/login" className="action-button login-button">Login</Link>
                )}
                
                <div className="cart-container">
                    <button className="cart-icon" onClick={() => setIsCartOpen(!isCartOpen)}>
                        🛍️ ({cartItems.length})
                    </button>
                    
                    {isCartOpen && (
                        <div className="floating-cart">
                            <h4 className="cart-title">Your Cart ({cartItems.length})</h4>
                            {cartItems.length > 0 ? (
                                <>
                                    <div className="item-list"> 
                                        {cartItems.map(item => (
                                            <div key={item.id} className="cart-item-row">
                                                <span>{item.name} (x{item.quantity})</span>
                                                <span className="item-price">${(item.price * item.quantity).toFixed(2)}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="divider" />
                                    <div className="subtotal-row">
                                        <span className="total-text">Subtotal:</span>
                                        <span className="total-amount">${subtotal.toFixed(2)}</span>
                                    </div>
                                    <Link to="/checkout" className="checkout-button" onClick={() => setIsCartOpen(false)}>
                                        PROCEED TO CHECKOUT
                                    </Link>
                                </>
                            ) : (
                                <p className="empty-cart">Your cart is empty.</p>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}