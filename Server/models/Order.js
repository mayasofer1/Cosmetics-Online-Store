import mongoose from 'mongoose'; // Import mongoose for defining a schema and model

// Define the schema for an order document in the database
const orderSchema = new mongoose.Schema({
  customerName: String,              // Customer's full name
  customerEmail: String,             // Customer's email address
  customerPhone: String,             // Customer's phone number
  customerAddress: String,          // Shipping address
  shippingMethod: String,           // Selected shipping method (regular, express, pickup)

  // Array of items in the order
  items: [
    {
      id: String,                   // Product ID
      name: String,                 // Product name
      price: Number,                // Price per unit
      quantity: Number              // Quantity of this item in the order
    }
  ],

  totalAmount: Number,              // Total price including all items and shipping

  createdAt: {
    type: Date,                     // Timestamp of order creation
    default: Date.now               // Automatically set to current time
  }
});

// Create the model based on the schema
const Order = mongoose.model('Order', orderSchema);

export default Order; // Export the model to be used in controllers
