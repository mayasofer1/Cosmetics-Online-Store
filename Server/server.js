import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import orderRoutes from './routes/orderRoutes.js';
import productRoutes from './routes/productRoutes.js';

const app = express();
const PORT = 3000;

// Middleware to enable CORS (Cross-Origin Resource Sharing)
app.use(cors());

// Middleware to parse incoming JSON requests
app.use(express.json());

// Define routes for order and product APIs
app.use('/orders', orderRoutes);
app.use('/products', productRoutes); 

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/ordersDB', {
  useNewUrlParser: true,         // Use new URL parser
  useUnifiedTopology: true      // Use new server discovery and monitoring engine
})
.then(() => {
  console.log('Connected to MongoDB');

  // Start the server only after successful DB connection
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
})
.catch(err => {
  console.error('Database connection error:', err); // Log connection error
});
