const app = require("./app");
<<<<<<< HEAD
const connectDatabase = require("./db/Database");

// Handling uncaught Exception when setting up backend server
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`shutting down the server for handling uncaught exception`);
});

// config
=======

const connectDatabase = require("./db/Database");

process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`); // Log the error message
  console.log("Shutting down the server for handling uncaught exception");
  process.exit(1);
});

>>>>>>> 833dff5 (milstone13)
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "config/.env",
  });
}

connectDatabase();

const server = app.listen(process.env.PORT, () => {
<<<<<<< HEAD
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});

// unhandled promise rejection(explain error handling when setting up server as you code)
process.on("unhandledRejection", (err) => {
  console.error(`Unhandled Rejection: ${err.message}`);
  console.log("Shutting down the server due to unhandled promise rejection.");

  server.close(() => {
    process.exit(1); // Exit with failure code
  });
});
=======
  console.log(
    `Server is running on http://localhost:${process.env.PORT}` // Log the server's URL
  );
});

process.on("unhandledRejection", (err) => {
  console.error(`Unhandled Rejection: ${err.message}`); // Log the error message
  console.log("Shutting down the server due to unhandled promise rejection.");
  server.close(() => {
    process.exit(1);
  });
});
>>>>>>> 833dff5 (milstone13)
