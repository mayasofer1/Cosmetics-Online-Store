import mongoose from 'mongoose'; // Import mongoose to define schema and model

// Define the schema for a product document
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },            // Product name (required)
  description: { type: String, required: true },     // Product description (required)
  price: { type: Number, required: true },           // Product price (required)
  imageUrl: { type: String, required: true },        // URL to product image (required)
  category: { type: String, required: true },        // Product category (required)
  stock: { type: Number, required: true, default: 0 }, // Stock level (default: 0)
  options: { type: [String], default: [] }           // Optional product variations (e.g., colors/sizes)
});

// Create a Mongoose model based on the schema
const Product = mongoose.model('Product', productSchema);

export default Product; // Export the model for use in other parts of the app
