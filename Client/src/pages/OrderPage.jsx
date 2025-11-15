import React, { useState } from "react";
import { useCart } from "../context/CartContext"; // Access cart data and actions
import { useNavigate } from "react-router-dom"; // Navigation after successful order
import "./OrderPage.css"; // Styling for the order page

const OrderPage = () => {
  const { cartItems, totalAmount, clearCart } = useCart();
  const navigate = useNavigate();

  // Form state for user input
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    shipping: "",
  });

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Block if cart is empty
    if (cartItems.length === 0) {
      alert("העגלה ריקה");
      return;
    }

    // Prevent if any item has quantity <= 0
    const zeroQuantity = cartItems.some((item) => item.quantity <= 0);
    if (zeroQuantity) {
      alert("יש מוצר עם כמות 0");
      return;
    }

    // Basic email validation
    if (!formData.email.includes("@") || !formData.email.includes(".")) {
      alert("יש להזין אימייל תקין");
      return;
    }

    // Determine shipping cost
    const shippingPrice =
      formData.shipping === "express"
        ? 40
        : formData.shipping === "regular"
        ? 20
        : 0;

    // Build order object to send to backend
    const orderData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      shipping: formData.shipping,
      cartItems: cartItems,
      totalAmount: totalAmount + shippingPrice,
    };

    // Send order to backend
    try {
      const response = await fetch("/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });

      const data = await response.json();

      if (response.ok) {
        alert(`ההזמנה התקבלה! מספר הזמנה: ${data.orderId || "לא ידוע"}`);
        clearCart(); // Clear cart after success
        navigate("/successPage", { state: { orderId: data.orderId } }); // Go to success page
      } else {
        alert("שגיאה בשליחת ההזמנה: " + data.error);
      }
    } catch (error) {
      console.error("שגיאה:", error);
      alert("שגיאה בשרת, נסה שוב מאוחר יותר.");
    }
  };

  // Recalculate shipping price when needed
  const shippingPrice =
    formData.shipping === "express"
      ? 40
      : formData.shipping === "regular"
      ? 20
      : 0;

  return (
    <div className="order-container">
      <h2>ביצוע הזמנה</h2>

      {/* Form to fill order details */}
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="שם מלא" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="אימייל" value={formData.email} onChange={handleChange} required />
        <input type="tel" name="phone" placeholder="טלפון" value={formData.phone} onChange={handleChange} required />
        <input type="text" name="address" placeholder="כתובת למשלוח" value={formData.address} onChange={handleChange} required />
        
        {/* Shipping options */}
        <select name="shipping" value={formData.shipping} onChange={handleChange} required>
          <option value="">בחר שיטת משלוח</option>
          <option value="regular">משלוח רגיל – 20₪ (תוך 14 יום)</option>
          <option value="express">משלוח אקספרס – 40₪ (עד הבית תוך 3 ימים)</option>
          <option value="pickup">איסוף עצמי – חינם (מהסניף הקרוב)</option>
        </select>

        <button type="submit">בצע הזמנה</button>
      </form>

      {/* Summary of cart items */}
      <div className="cart-summary">
        <h3>סיכום עגלה</h3>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id} className="cart-item">
              <img src={item.imageUrl} alt={item.name} />
              <div className="item-details">
                <strong>{item.name}</strong>
                <div className="item-info">
                  <p>כמות: {item.quantity}</p>
                  <p>₪{(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* Total price including shipping */}
        <h3>סה"כ לתשלום: ₪{(totalAmount + shippingPrice).toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default OrderPage;
