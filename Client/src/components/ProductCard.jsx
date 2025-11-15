import React, { useState } from "react"; // useState for internal component state
import { useCart } from "../context/CartContext"; // Access addToCart from cart context

// Component receives a product as prop
const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { _id, name, description, price, imageUrl, options } = product;

  // State to store selected option (e.g. size/color)
  const [selectedOption, setSelectedOption] = useState("");

  // State to control showing/hiding options dropdown
  const [showOptions, setShowOptions] = useState(false);

  // Toggle visibility of the select options
  const toggleOptions = () => {
    setShowOptions((prev) => !prev);
  };

  // Handle user selecting an option
  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };

  // Handle clicking "Add to Cart"
  const handleAddToCart = () => {
    if (!selectedOption) {
      alert("יש לבחור אפשרות לפני הוספה לעגלה");
      return;
    }

    // Create object with selected option before adding to cart
    const productWithOption = {
      ...product,
      id: _id, // Add unique ID
      selectedOption,
    };

    addToCart(productWithOption); // Add item to cart
    setSelectedOption(""); // Reset option after adding
  };

  return (
    <div className="product-card">
      {/* Product image */}
      <img src={imageUrl} alt={name} className="product-img" />

      {/* Product name */}
      <h3 className="product-name">{name}</h3>

      {/* Product description */}
      <p className="desc">{description}</p>

      {/* Product price */}
      <p className="price">₪{price.toFixed(2)}</p>

      {/* Button to show/hide options */}
      <button className="choose-btn" onClick={toggleOptions}>
        הצג אפשרויות
      </button>

      {/* Dropdown for selecting option (if visible) */}
      {showOptions && (
        <select
          className="options-select"
          value={selectedOption}
          onChange={(e) => handleOptionChange(e.target.value)}
        >
          <option value="" disabled hidden>
            בחרי
          </option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      )}

      {/* Button to add product with selected option to cart */}
      <button className="add-btn" onClick={handleAddToCart}>
        הוסף לעגלה
      </button>
    </div>
  );
};

export default ProductCard;
