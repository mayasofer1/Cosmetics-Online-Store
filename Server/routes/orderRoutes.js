import express from 'express'; // Import Express framework
import { createOrder, getOrders } from '../controllers/orderController.js'; // Import order controller functions

const router = express.Router(); // Create a new router instance

// Route to handle order creation (POST request)
router.post('/', createOrder);

// Route to retrieve all orders (GET request)
router.get('/', getOrders);

export default router; // Export router for use in main server file
