import React from 'react';

export default function ContactPage() {
    // Shared data structure - ensures URLs and Icons are identical to Navbar
    const socialLinks = [
        {
            name: "Instagram",
            url: "https://www.instagram.com/snscakebakery/?hl=en",
            icon: "https://cdn-icons-png.flaticon.com/512/174/174855.png",
        },
        {
            name: "YouTube",
            url: "https://www.youtube.com/@snscakebakery",
            icon: "https://cdn-icons-png.flaticon.com/512/1077/1077046.png",
        },
        {
            name: "Facebook",
            url: "https://www.facebook.com/p/SNS-Cake-Bakery-100090057444715/",
            icon: "https://cdn-icons-png.flaticon.com/512/2111/2111392.png",
        }
    ];

    return (
        <div className="page-wrapper">
            <div className="content-box">
                <h1 className="page-title">Contact Us</h1>
                <p className="page-description">
                    Have a question about a custom order or want to say hello? We'd love to hear from you.
                </p>

                <div className="contact-main-content">
                    {/* Left Column: Form */}
                    <div className="contact-form-column">
                        <form className="contact-form">
                            <div className="form-section">
                                <label className="form-label">Full Name</label>
                                <input type="text" className="form-input" placeholder="Your Name" />
                            </div>
                            
                            <div className="form-section">
                                <label className="form-label">Email Address</label>
                                <input type="email" className="form-input" placeholder="Email@example.com" />
                            </div>

                            <div className="form-section">
                                <label className="form-label">Message</label>
                                <textarea className="form-textarea" rows="6" placeholder="How can we help you?"></textarea>
                            </div>

                            <button type="submit" className="action-button">Send Message</button>
                        </form>
                    </div>

                    {/* Right Column: Info & Socials */}
                    <div className="contact-info-column">
                        <div className="detail-group">
                            <h4 className="detail-label">Location</h4>
                            <p className="detail-value">Greater Los Angeles Area, CA</p>
                        </div>

                        <div className="detail-group">
                            <h4 className="detail-label">Email</h4>
                            <p className="detail-value">hello@snscakebakery.com</p>
                        </div>

                        <div className="detail-group contact-mt-30">
                            <h4 className="detail-label">Follow Our Journey</h4>
                            
                            {/* Unified Social Grid */}
                            <div className="contact-social-grid">
                                {socialLinks.map((social) => (
                                    <a 
                                        key={social.name}
                                        href={social.url} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="contact-social-link"
                                        title={social.name}
                                    >
                                        <div 
                                            className="social-icon-mask icon-contact" 
                                            style={{ '--icon-url': `url(${social.icon})` }}
                                        />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}