import { StrictMode } from 'react'; // StrictMode helps catch potential problems in development
import { createRoot } from 'react-dom/client'; // React 18+ API for rendering the root component
import './index.css'; // Global CSS styling for the entire app
import App from './App.jsx'; // Main application component
import { CartProvider } from './context/CartContext.jsx'; // Context Provider to manage cart state

// Mount the React app into the DOM, wrapped in StrictMode and CartProvider
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider> {/* Makes the cart state available throughout the app */}
      <App /> {/* Main application component with routes and layout */}
    </CartProvider>
  </StrictMode>
);
