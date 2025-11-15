import Product from '../models/Product.js';

// Retrieve all products
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.error('שגיאה ב-getProducts:', error);
    res.status(500).json({ error: 'שגיאה בשליפת מוצרים' });
  }
};

// Create a new product
export const createProduct = async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    console.error('שגיאה ביצירת מוצר:', error);
    res.status(400).json({ error: 'שגיאה ביצירת מוצר' });
  }
};

// Update an existing product by ID
export const updateProduct = async (req, res) => {
  try {
    const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (error) {
    console.error('שגיאה בעדכון מוצר:', error);
    res.status(400).json({ error: 'שגיאה בעדכון מוצר' });
  }
};

// Delete product by ID
export const deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: 'המוצר נמחק' });
  } catch (error) {
    console.error('שגיאה במחיקת מוצר:', error);
    res.status(500).json({ error: 'שגיאה במחיקת מוצר' });
  }
};
