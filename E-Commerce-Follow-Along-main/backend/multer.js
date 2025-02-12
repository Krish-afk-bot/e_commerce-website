<<<<<<< HEAD
// backend/multer.js

=======
>>>>>>> 833dff5 (milstone13)
const multer = require("multer");
const path = require("path");
const fs = require("fs");

<<<<<<< HEAD
// Define directories
const uploadsDir = path.join(__dirname, "uploads");
const productsDir = path.join(__dirname, "products");

// Create directories if they don't exist
[uploadsDir, productsDir].forEach((dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`✅ Created directory: ${dir}`);
  }
});

// Multer storage configuration for general uploads
=======
const uploadsDir = path.join(__dirname, "uploads");
const productsDir = path.join(__dirname, "products");


[uploadsDir, productsDir].forEach((dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`Created directory: ${dir}`);
  }
});

>>>>>>> 833dff5 (milstone13)
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadsDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    const filename = path.basename(file.originalname, ext);
    cb(null, `${filename}-${uniqueSuffix}${ext}`);
  },
});

<<<<<<< HEAD
// Multer storage configuration for product images
=======
>>>>>>> 833dff5 (milstone13)
const pstorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, productsDir);
  },
<<<<<<< HEAD
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    const filename = path.basename(file.originalname, ext);
    cb(null, `${filename}-${uniqueSuffix}${ext}`);
=======
  destination: "products/",
  filename: function (req, file, cb) {
    console.log(req.body);
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    const filename = path.basename(file.originalname, ext);
    // const filename = file.originalname.split(".")[0];
    cb(null, filename + "-" + uniqueSuffix + ".png");
>>>>>>> 833dff5 (milstone13)
  },
});

// Initialize upload handlers
const upload = multer({ storage: storage });
const pupload = multer({ storage: pstorage });

<<<<<<< HEAD
module.exports = {
  upload,
  pupload,
};
=======
exports.upload = multer({ storage: storage });
exports.pupload = multer({ storage: pstorage });

module.exports = {
  upload,
  pupload,
};
>>>>>>> 833dff5 (milstone13)
