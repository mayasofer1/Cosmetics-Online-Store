import express from 'express'; // Import Express framework
import {
  getProducts,       // Controller to fetch all products
  createProduct,     // Controller to add a new product
  updateProduct,     // Controller to update a product by ID
  deleteProduct      // Controller to delete a product by ID
} from '../controllers/productController.js';

const router = express.Router(); // Create a new router instance

// GET /products – Retrieve all products
router.get('/', getProducts);

// POST /products – Create a new product
router.post('/', createProduct);

// PUT /products/:id – Update product by ID
router.put('/:id', updateProduct);

// DELETE /products/:id – Delete product by ID
router.delete('/:id', deleteProduct);

export default router; // Export router to be used in server setup
