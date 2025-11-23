// AboutPage.jsx
import React from "react";

const About = () => {
  return (
    <div style={styles.container}>
      {/* Header/Logo section for consistency */}
      <h1 style={styles.headerTitle}>SNS Cakebakery</h1>
      <p style={styles.headerSubtitle}>Handcrafted Cakes & Desserts</p>
      
      <div style={styles.contentWrapper}>
        <h2 style={styles.pageTitle}>OUR STORY</h2>
        
        <div style={styles.mainContent}>
          {/* Left Column: Image/Visual */}
          <div style={styles.imageColumn}>
            {/* Placeholder for an image of the founder or the bakery kitchen */}
            <div style={styles.imagePlaceholder}>
              
            </div>
            <p style={styles.imageCaption}>— Founded by Sarah N. Smith in 2020.</p>
          </div>

          {/* Right Column: Text Content */}
          <div style={styles.textColumn}>
            <div style={styles.section}>
              <h3 style={styles.sectionTitle}>The Art of Sweet Moments</h3>
              <p style={styles.paragraph}>
                **SNS Cakebakery** was born from a simple belief: that every special occasion deserves a centerpiece as unique and beautiful as the moment itself. Our founder, Sarah, began baking from her home kitchen, turning a lifelong passion for design and confectionery into an artisanal venture. We specialize in custom, beautifully decorated cakes that taste as incredible as they look.
              </p>
            </div>
            
            <div style={styles.section}>
              <h3 style={styles.sectionTitle}>Our Philosophy: Quality & Care</h3>
              <ul style={styles.bulletList}>
                <li>**Finest Ingredients:** We use only premium, locally sourced ingredients, from farm-fresh eggs to Belgian chocolate, ensuring a rich and unforgettable flavor in every bite.</li>
                <li>**Handcrafted Perfection:** Every cake is meticulously handcrafted, with attention paid to the smallest detail, reflecting our dedication to the art of baking.</li>
                <li>**Personal Touch:** We work closely with our clients to bring their vision to life, ensuring your cake is a true reflection of your celebration.</li>
              </ul>
            </div>
            
            <div style={styles.section}>
              <p style={styles.paragraph}>
                **Thank you for letting us be a part of your sweet moments.** We look forward to baking for your next celebration.
              </p>
              <button style={styles.ctaButton}>VIEW OUR GALLERY</button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer component (simple for now) */}
      <p style={styles.footer}>© 2024 SNS Cakebakery. All the Reserved.</p>
    </div>
  );
};

const styles = {
  // --- Global Styles (for consistency) ---
  container: {
    backgroundColor: "#fcfaf8",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "50px 20px",
  },
  headerTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "24px",
    color: "#a87d72",
    margin: "0 0 5px 0",
    fontWeight: "normal",
  },
  headerSubtitle: {
    fontSize: "12px",
    color: "#888",
    margin: "0 0 40px 0",
    letterSpacing: "2px",
    textTransform: "uppercase",
  },
  // --- About Page Specific Styles ---
  contentWrapper: {
    width: "90%",
    maxWidth: "1100px",
    backgroundColor: "#fff",
    padding: "60px 40px",
    boxShadow: "0px 0px 15px rgba(0,0,0,0.03)",
  },
  pageTitle: {
    color: "#a87d72",
    fontSize: "32px",
    fontWeight: "600",
    margin: "0 0 50px 0",
    letterSpacing: "3px",
    textTransform: "uppercase",
    textAlign: "center",
  },
  mainContent: {
    display: "flex",
    gap: "50px",
    alignItems: "flex-start",
  },
  imageColumn: {
    flex: 1,
    minWidth: "350px",
    textAlign: "center",
  },
  imagePlaceholder: {
    height: "500px",
    backgroundColor: "#f0e9e7", // Light background for the image area
    border: "2px solid #e9e0dd",
    marginBottom: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#a87d72",
    fontSize: "14px",
    fontStyle: "italic",
  },
  imageCaption: {
    fontSize: "12px",
    color: "#888",
    fontStyle: "italic",
    marginBottom: "40px",
  },
  textColumn: {
    flex: 2,
  },
  section: {
    marginBottom: "30px",
  },
  sectionTitle: {
    color: "#cfa39d", // Blush accent color
    fontSize: "22px",
    fontWeight: "600",
    marginBottom: "15px",
  },
  paragraph: {
    fontSize: "16px",
    color: "#555",
    lineHeight: "1.6",
    marginBottom: "15px",
  },
  bulletList: {
    listStyleType: "none",
    paddingLeft: "0",
    marginBottom: "20px",
  },
  ctaButton: {
    padding: "10px 25px",
    backgroundColor: "#cfa39d",
    border: "none",
    borderRadius: "0",
    color: "#fff",
    fontWeight: "bold",
    fontSize: "14px",
    letterSpacing: "1px",
    cursor: "pointer",
    textTransform: "uppercase",
    transition: "background-color 0.3s",
    marginTop: "10px",
  },
  // --- Footer Style ---
  footer: {
    fontSize: "11px",
    color: "#888",
    margin: "40px 0 20px 0",
    letterSpacing: "0.5px",
  },
};

export default About;