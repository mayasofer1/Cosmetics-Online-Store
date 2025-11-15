import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // React Router for page navigation
import Navbar from './components/Navbar'; // Top navigation bar
import Home from './pages/Home'; // Home page component
import OrderPage from './pages/OrderPage'; // Order form page
import SuccessPage from './pages/SuccessPage'; // Confirmation page after order
import Contact from "./pages/Contact"; // Contact info page

function App() {
  return (
    <Router>
      <Navbar /> {/* Always show the navigation bar at the top */}

      {/* Define all app routes */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home page */}
        <Route path="/order" element={<OrderPage />} /> {/* Order form page */}
        <Route path="/successPage" element={<SuccessPage />} /> {/* Success message after placing an order */}
        <Route path="/contact" element={<Contact />} /> {/* Contact information page */}
      </Routes>
    </Router>
  );
}

export default App;
