import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./models/Product.js";

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB using the local URI
mongoose
  .connect("mongodb://127.0.0.1:27017/ordersDB", {
    useNewUrlParser: true,         // Use the new URL string parser
    useUnifiedTopology: true,      // Use the new Server Discover and Monitoring engine
  })
  .then(() => {
    console.log("Connected to MongoDB");
    return insertProducts();       // After connection, insert products
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);  // Log connection errors
  });

// Function to insert or update product data
async function insertProducts() {
  const products = [
    {
      // Each product has a name, description, price, image, category, stock, and color options
      name: "שפתון",
      description: "שפתון במרקם קרמי נעים, עם פיגמנט עשיר ומריחה אחידה למראה זוהר",
      price: 69.9,
      imageUrl: "https://diorboutique-il.com/cdn/shop/files/Y0291000_E000000151_E01_ZHC.jpg?v=1745836959&width=1200",
      category: "שפתיים",
      stock: 40,
      options: ["אדום", "ורוד", "חום", "שקוף"],
    },
    {
      name: "מסקרה",
      description: "מסקרה איכותית שמדגישה כל ריס בנפרד, בעלת מרקם קל ונוח למריחה יומיומית",
      price: 89.9,
      imageUrl: "https://diorboutique-il.com/cdn/shop/products/Y0264250_C026425090_E01_ZHC.jpg?v=1655806043&width=1280",
      category: "עיניים",
      stock: 30,
      options: ["כחול", "שחור", "חום", "שחור עמיד"],
    },
    {
      name: "מייקאפ",
      description: "מייקאפ נוזלי עם כיסוי אחיד, מתאים לכל סוגי העור ומחזיק לאורך שעות",
      price: 209.9,
      imageUrl: "https://diorboutique-il.com/cdn/shop/products/Y0996397_C023500025_E01_ZHC.jpg?v=1655136155&width=1280",
      category: "פנים",
      stock: 35,
      options: ["בהיר מאוד", "בהיר", "בינוני", "כהה"],
    },
    {
      name: "סומק",
      description: "סומק דחוס במרקם רך, משתלב בעדינות עם העור ומעניק ללחיים מראה חיוני",
      price: 75.9,
      imageUrl: "https://diorboutique-il.com/cdn/shop/files/Y0373000_C037300001_E01_ZHC_022d651f-8a99-4bf6-844a-f6bfe8c011e9.png?v=1690362023&width=1280",
      category: "לחיים",
      stock: 28,
      options: ["ורוד בהיר", "ורוד כהה", "אפרסק"],
    },
    {
      name: "עיפרון עיניים",
      description: "עיפרון עיניים רך ונוח למריחה, מתאים לתיחום מדויק או לטשטוש",
      price: 39.0,
      imageUrl: "https://diorboutique-il.com/cdn/shop/files/Y0362000_C036200099_E01_ZHC.png?v=1685366112&width=1182",
      category: "עיניים",
      stock: 50,
      options: ["שחור", "כחול כהה", "חום", "ירוק"],
    },
    {
      name: "עיפרון לגבות",
      description: "עיפרון מדויק עם מברשת לסידור ומילוי הגבות בגוונים שונים",
      price: 49.0,
      imageUrl: "https://diorboutique-il.com/cdn/shop/products/Y0746300_C015600001_E01_ZHC.jpg?v=1706212525&width=1280",
      category: "גבות",
      stock: 30,
      options: ["בלונד", "חום בהיר", "חום כהה", "שחור"],
    },
    {
      name: "שמן שפתיים",
      description: "שמן שפתיים עם גימור עדין, נעים לשימוש לבד או מעל שפתון למראה עשיר",
      price: 107.9,
      imageUrl: "https://diorboutique-il.com/cdn/shop/products/Y0124000_C012400015_E01_ZHC.jpg?v=1748344988&width=1280",
      category: "שפתיים",
      stock: 35,
      options: ["שקוף", "ורדרד", "שזיף", "דובדבן", "אפרסק"],
    },
    {
      name: "ברונזר",
      description: "ברונזר להדגשת תווי הפנים, נמרח בקלות ויוצר מראה חמים וטבעי",
      price: 169.5,
      imageUrl: "https://diorboutique-il.com/cdn/shop/files/Y0000008_E000000038_E01_ZHC.jpg?v=1736758729&width=1200",
      category: "פנים",
      stock: 18,
      options: ["שזוף בהיר", "שזוף בינוני", "בהיר מאט", "חמים"],
    },
    {
      name: "קונסילר",
      description: "קונסילר עמיד במרקם קליל עם כיסוי מצוין להסתרת כהויות ופגמים",
      price: 87.0,
      imageUrl: "https://diorboutique-il.com/cdn/shop/products/Y0326000_C032600025_E01_ZHC.jpg?v=1706436893&width=1280",
      category: "פנים",
      stock: 26,
      options: ["בהיר", "בינוני", "כהה", "טבעי"],
    },

    /*
    // Optional future products to be added later if needed
    {
      name: "אייליינר",
      description: "אייליינר טוש עם מברשת דקה לתיחום מדויק ועמידות לאורך שעות",
      price: 52.0,
      imageUrl: "https://diorboutique-il.com/cdn/shop/files/Y0000006_E000000248_E01_GHC.jpg?v=1747296712&width=1280",
      category: "עיניים",
      stock: 28,
      options: ["שחור", "חום כהה"],
    },
    {
      name: "פודרה דחוסה",
      description: "פודרה דחוסה לקיבוע האיפור, מעניקה גימור אחיד ומאט לאורך זמן",
      price: 183.9,
      imageUrl: "https://diorboutique-il.com/cdn/shop/products/Y0149000_C014900010_E01_ZHC.jpg?v=1739190999&width=1280",
      category: "פנים",
      stock: 32,
      options: ["בהירה", "בינונית", "שקופה"]
    }
    */
  ];

  try {
    // Loop through products and update or insert each one
    for (const product of products) {
      await Product.findOneAndUpdate(
        { name: product.name },  // Search by product name
        product,                 // Update with this product data
        { upsert: true, new: true }  // Insert if not found, return updated version
      );
    }

    console.log("Products inserted/updated without deletion");
    process.exit(); // Exit the process after operation completes
  } catch (err) {
    console.error("Error inserting/updating products:", err); // Catch and display errors
    process.exit(1); // Exit with error code
  }
}
