const mongoose = require('mongoose'); // Importing mongoose for MongoDB connection

// Function to connect to MongoDB using async/await
const connectDB = async () => {
  try {
    // Attempt to connect to the MongoDB database using connection URI from environment variables
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,        // Use new URL string parser
      useUnifiedTopology: true,     // Use new Server Discover and Monitoring engine
    });

    console.log('MongoDB connected successfully'); // Log success message if connection is successful
  } catch (error) {
    // Log error message and exit process if connection fails
    console.error('MongoDB connection failed:', error.message);
    process.exit(1); // Exit the process with failure
  }
};

module.exports = connectDB; // Export the connectDB function to be used elsewhere in the project
