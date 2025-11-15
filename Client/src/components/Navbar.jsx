import React, { useState } from 'react'; // useState for controlling popup state
import { Link } from 'react-router-dom'; // Link for internal navigation
import { useCart } from '../context/CartContext'; // Access cart state
import Cart from './Cart'; // Cart popup component
import './Navbar.css'; // Styling for the navbar

const Navbar = () => {
  const { cartItems, totalAmount } = useCart(); // Get items and total from cart
  const [isCartOpen, setIsCartOpen] = useState(false); // State to control popup visibility

  // Calculate total quantity of items in cart
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      {/* Top navigation bar */}
      <nav className="navbar">
        <div className="logo">
          <Link to="/">Our Cosmetics Store</Link> {/* Logo links to home page */}
        </div>

        <ul className="nav-links">
          <li><Link to="/">בית</Link></li> {/* Home page */}
          <li><Link to="/contact">צור קשר</Link></li> {/* Contact page */}

          {/* Cart icon button */}
          <li>
            <button className="cart-button" onClick={() => setIsCartOpen(true)}>
              🛒 
              <span className="cart-count">{totalQuantity}</span> {/* Total item count */}
              <span className="cart-total">₪{totalAmount.toFixed(2)}</span> {/* Total cart value */}
            </button>
          </li>
        </ul>
      </nav>

      {/* Show Cart popup if isCartOpen is true */}
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Navbar;
