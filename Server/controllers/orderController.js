import Order from '../models/Order.js'; // Import the Order model (Mongoose schema)

// Controller to create a new order
export const createOrder = async (req, res) => {
  try {
    // Destructure order data from the request body
    const {
      name,
      email,
      phone,
      address,
      shipping,
      cartItems,
      totalAmount
    } = req.body;

    // Create a new Order document
    const order = new Order({
      customerName: name,
      customerEmail: email,
      customerPhone: phone,
      customerAddress: address,
      shippingMethod: shipping,
      items: cartItems,
      totalAmount
    });

    // Save the order to the database
    await order.save();

    // Return a success response with the order ID
    res.status(201).json({ message: 'ההזמנה בוצעה בהצלחה', orderId: order._id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'שגיאה ביצירת ההזמנה' }); // Server-side error
  }
};

// Controller to fetch all orders
export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find(); // Retrieve all orders from DB
    res.status(200).json(orders); // Send back list of orders
  } catch (error) {
    res.status(500).json({ error: 'שגיאה בשליפת הזמנות' }); // Handle errors
  }
};
