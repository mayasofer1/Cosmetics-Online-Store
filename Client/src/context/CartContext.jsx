import React, { createContext, useContext, useState, useEffect } from "react"; // Import hooks and context tools

const CartContext = createContext(); // Create context object

// Context provider for cart state
export const CartProvider = ({ children }) => {
  // Initialize cartItems from localStorage if exists
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem("cartItems");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  // Update localStorage whenever cartItems changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // Add product to cart (or increase quantity if already exists)
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) =>
          item.id === product.id &&
          item.selectedOption === product.selectedOption
      );

      if (existingItem) {
        // If same product with same option exists, increase quantity
        return prevItems.map((item) =>
          item.id === product.id &&
          item.selectedOption === product.selectedOption
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Otherwise, add new product to cart
        return [
          ...prevItems,
          {
            ...product,
            quantity: 1,
          },
        ];
      }
    });
  };

  // Remove product completely from cart
  const removeFromCart = (productId, selectedOption) => {
    setCartItems((prevItems) =>
      prevItems.filter(
        (item) =>
          !(item.id === productId && item.selectedOption === selectedOption)
      )
    );
  };

  // Update product quantity in cart
  const updateQuantity = (productId, selectedOption, quantity) => {
    if (quantity < 1) return; // Prevent setting quantity below 1
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId && item.selectedOption === selectedOption
          ? { ...item, quantity }
          : item
      )
    );
  };

  // Clear the entire cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Calculate total amount to be paid
  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Provide values to the rest of the app
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        totalAmount,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use cart context
export const useCart = () => useContext(CartContext);
