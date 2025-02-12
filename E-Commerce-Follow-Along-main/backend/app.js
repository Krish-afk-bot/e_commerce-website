// backend/app.js

const express = require("express");
const path = require("path");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const ErrorHandler = require("./middleware/error");
<<<<<<< HEAD

const app = express();
=======
const app = express();
const product = require('./controller/product')
>>>>>>> 833dff5 (milstone13)

// Middleware
app.use(express.json());
app.use(cookieParser());
<<<<<<< HEAD

// Configure CORS to allow requests from React frontend
app.use(
  cors({
    origin: "http://localhost:5173", // Update this if your frontend is hosted elsewhere
    credentials: true, // Enable if you need to send cookies or authentication headers
  })
);

app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

// Serve static files for uploads and products
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/products", express.static(path.join(__dirname, "products")));

// Import Routes
const userRoutes = require("./controller/user");
const productRoutes = require("./controller/Product"); 

// Route Handling
app.use("/api/v2/user", userRoutes);
app.use("/api/v2/product", productRoutes);

// Error Handling Middleware
app.use(ErrorHandler);

module.exports = app;
=======
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(cors());
app.use("/", express.static("uploads"))
// Serve static files for uploads and products

if(process.env.NODE_ENV !== "PRODUCTION"){
  require("dotenv").config({
    path: "backend/config/.env"
  })
}


const user = require("./controller/user")

app.use("/api/v2/user", user);
app.use("/api/v2/product", product)

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/products', express.static(path.join(__dirname, 'products')));


app.use(ErrorHandler);

module.exports = app;
>>>>>>> 833dff5 (milstone13)
