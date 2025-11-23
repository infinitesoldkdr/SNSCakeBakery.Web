// LoadingSpinner.jsx
import React from 'react';

const LoadingSpinner = ({ message = "Loading...", size = "medium", color = "#cfa39d" }) => {
  // Determine spinner and message size based on 'size' prop
  const spinnerSize = {
    small: '20px',
    medium: '40px',
    large: '60px',
  }[size];

  const messageSize = {
    small: '12px',
    medium: '14px',
    large: '16px',
  }[size];

  // Inline styles for the component
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      gap: '10px',
    },
    spinner: {
      width: spinnerSize,
      height: spinnerSize,
      border: `4px solid ${color}40`, // Light shade of the color
      borderTop: `4px solid ${color}`, // Main color for the spinning part
      borderRadius: '50%',
      animation: 'spin 1s linear infinite',
    },
    message: {
      fontSize: messageSize,
      color: '#6b5b55', // Consistent text color
      fontFamily: 'Arial, sans-serif',
    },
    // Keyframes for the spin animation (as a string to be injected or put in a CSS file)
    keyframes: `
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `,
  };

  // Inject keyframes into the head of the document
  // In a real application, you'd typically put this in a global CSS file.
  // This approach is for self-contained component demonstration.
  if (typeof window !== 'undefined' && !document.getElementById('spin-keyframes')) {
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = styles.keyframes;
    styleSheet.id = "spin-keyframes";
    document.head.appendChild(styleSheet);
  }

  return (
    <div style={styles.container}>
      <div style={styles.spinner}></div>
      {message && <p style={styles.message}>{message}</p>}
    </div>
  );
};

export default LoadingSpinner;


//Use case logic 
// import LoadingSpinner from './LoadingSpinner';

// function MyComponent() {
//   const [isLoading, setIsLoading] = useState(true);

//   // Simulate data loading
//   useEffect(() => {
//     setTimeout(() => {
//       setIsLoading(false);
//     }, 3000);
//   }, []);

//   return (
//     <div>
//       {isLoading ? (
//         <LoadingSpinner message="Fetching deliciousness..." size="large" color="#a87d72" />
//       ) : (
//         <h1>Welcome to the Cakebakery!</h1>
//         // ... rest of your content
//       )}
//     </div>
//   );
// }