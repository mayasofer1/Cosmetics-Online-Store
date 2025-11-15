# README for Server

This is the server-side of the My Cosmetics Store application, built using Node.js and MongoDB. The server handles API requests for product and order management, connecting to a MongoDB database to store and retrieve data.

## Project Structure

- **controllers/**: Contains the logic for handling requests related to products and orders.
  - `orderController.js`: Functions for managing orders.
  - `productController.js`: Functions for managing products.

- **db/**: Contains the database connection logic.
  - `connect.js`: Establishes a connection to the MongoDB database.

- **models/**: Defines the data models for MongoDB.
  - `Order.js`: Schema for order documents.
  - `Product.js`: Schema for product documents.

- **routes/**: Defines the API routes for the application.
  - `orderRoutes.js`: Routes for order-related API endpoints.
  - `productRoutes.js`: Routes for product-related API endpoints.

- `server.js`: The main entry point for the server application, setting up middleware and routes.

## Getting Started

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd my-cosmetics-store/Server
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the root of the Server directory and add your MongoDB connection string:
   ```
   MONGODB_URI=<your-mongodb-connection-string>
   ```

4. **Run the server**:
   ```
   npm start
   ```

The server will start on the specified port (default is 5000). You can now access the API endpoints for managing products and orders.

## API Endpoints

- **Products**
  - `GET /api/products`: Retrieve a list of products.
  - `POST /api/products`: Add a new product.

- **Orders**
  - `GET /api/orders`: Retrieve a list of orders.
  - `POST /api/orders`: Create a new order.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.