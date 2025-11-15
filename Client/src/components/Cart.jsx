import React from "react";
import { useCart } from "../context/CartContext"; // Custom hook for cart state management
import { useNavigate } from "react-router-dom"; // Navigation between pages
import "./Cart.css"; // Styling for the cart popup

// Cart popup component – displays shopping cart contents
const Cart = ({ isOpen, onClose }) => {
  const { cartItems, removeFromCart, updateQuantity, totalAmount } = useCart();
  const navigate = useNavigate();

  // Do not render anything if the cart popup is closed
  if (!isOpen) return null;

  return (
    <div className="cart-popup"> {/* Main popup container */}
      <div className="cart-content"> {/* Inner box holding cart content */}

        {/* Close (×) button at top-right corner */}
        <button className="close-button" onClick={onClose}>
          ×
        </button>

        {/* If cart is empty – show message */}
        {cartItems.length === 0 ? (
          <p className="empty-cart-message">העגלה שלך ריקה</p>
        ) : (
          <>
            {/* List of items currently in the cart */}
            <ul className="cart-items-list">
              {cartItems.map((item, index) => (
                <li
                  key={`${item.id}-${item.selectedOption}-${index}`}
                  className="cart-item"
                >
                  {/* Product image */}
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="cart-item-img"
                  />

                  <div className="cart-item-details">
                    {/* Product name + selected option (e.g., size or color) */}
                    <span className="item-name">
                      {item.name}{" "}
                      {item.selectedOption ? `- ${item.selectedOption}` : ""}
                    </span>

                    {/* Unit price and total price per item */}
                    <div className="price-row">
                      <span className="item-price">₪{item.price} ליח׳</span>
                      <span className="item-price">
                        {" "}
                        | ₪{(item.price * item.quantity).toFixed(2)} סה"כ
                      </span>
                    </div>
                  </div>

                  {/* Input to update item quantity */}
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) =>
                      updateQuantity(
                        item.id,
                        item.selectedOption,
                        parseInt(e.target.value)
                      )
                    }
                    className="item-quantity"
                  />

                  {/* Button to remove item from cart */}
                  <button
                    className="remove-btn"
                    onClick={() =>
                      removeFromCart(item.id, item.selectedOption)
                    }
                  >
                    הסר
                  </button>
                </li>
              ))}
            </ul>

            {/* Total amount for the whole cart */}
            <h3 style={{ textAlign: "center", marginTop: "1rem" }}>
              סה"כ: ₪{totalAmount.toFixed(2)}
            </h3>

            {/* Button to proceed to the order page */}
            <button
              className="checkout-btn"
              onClick={() => {
                onClose(); // Close the cart popup
                navigate("/order"); // Navigate to order page
              }}
            >
              לביצוע הזמנה
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
