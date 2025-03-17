# e-commerce-follow-along

Key Features of the Project:

In this project, I will be building an E-Commerce app using the MERN stack (MongoDB, Express.js, React.js, Node.js). Here is what I will be learning and working on:

REST API Creation: I will learn how to build scalable APIs to manage users, products, and orders, and get hands-on experience with backend development.

User Authentication: I will implement secure login and registration for users, which is a crucial part of any app that handles sensitive data.

Database Schema Design: I will explore MongoDB to design data models that are efficient and scalable for an e-commerce platform.

Backend Development: I will set up a server with Node.js and Express.js to handle requests, API routes, and interact with the database.

Frontend with React: I will use React to build dynamic, user-friendly interfaces, like product lists and shopping carts.


Milestone 2: 

Key Achievements
1. Project Structure:
Organized the project into frontend and backend directories for better maintainability.
Backend set up with Node.js to handle server-side logic, and the frontend set up with React to build the user interface.
2. React Frontend Setup:
Initialized a React app to manage the UI, allowing the e-commerce platform to be interactive.
3. Node.js Backend Setup:
Configured a basic Node.js server to lay the foundation for upcoming API integrations and user authentication.
4. Tailwind CSS Configuration:
Integrated Tailwind CSS for utility-first, responsive styling to enhance UI development speed.
5. Login Page Development:
Designed and built a functional Login Page with form validation and styling using Tailwind.


Milestone 3: 

In this milestone, we focused on building the foundation for the backend of our e-commerce application. The key objectives were to set up a server, connect it to a database, and establish a solid folder structure to keep our code organized.

Backend Folder Structure: We created a structured hierarchy for organizing backend code. This includes dedicated folders for routes, controllers, models, and middleware. This structure will make it easier to scale the project as more features are added in future milestones.

Server Setup: We initialized a Node.js server using the Express framework. The server is now configured to handle API requests, and it listens on a designated port for incoming requests.

Database Connection: We integrated MongoDB into the project to store and manage data. The server is now connected to MongoDB, enabling efficient data storage and retrieval.

Error Handling: Basic error-handling mechanisms were added to ensure that the server can respond with clear error messages for better debugging and user feedback.


Milestone 4: 

In Milestone 4, we focused on enhancing the backend by creating a User Model, setting up a User Controller, and enabling file uploads using Multer. These features are key to handling user data and media effectively in the e-commerce app.

User Model: We created a User Model, which defines how user data is stored in the database. This includes fields such as name, email, and password. We used MongoDB schemas to design the structure and validation rules for each user.

User Controller: The User Controller was developed to manage user-related requests, such as creating a new user and retrieving user information. This controller acts as the manager that handles data processing and communication between the frontend and the database.

File Uploads with Multer: We integrated Multer to enable file uploads, allowing users to upload images (e.g., profile pictures). Multer manages the file storage and ensures that the files are saved securely in the backend.


Milestone 5: 

In Milestone 5, we focused on building the Sign-Up Page for the frontend, where users can register by entering their details. This page includes essential fields such as name, email, and password, providing a clean and user-friendly interface for registration.

Frontend UI Development: We designed the Sign-Up Page using HTML and CSS. The page was structured to be intuitive, ensuring users can easily input their data to create an account.

Form Validation: Form validation was added to ensure that user inputs are accurate and meet the required format. For example, we validated the email format and enforced a minimum password length to enhance security. This step helps avoid errors and ensures only valid data is submitted to the backend.

UI/UX Enhancements: The design is simple yet effective, allowing users to smoothly enter their details. We focused on making the form clean and responsive, ensuring it works across devices.



Milestone 6: 

In this milestone, we focused on building the foundation for the backend of our e-commerce application. The key objectives were to set up a server, connect it to a database, and establish a solid folder structure to keep our code organized.

Backend Folder Structure: We created a structured hierarchy for organizing backend code. This includes dedicated folders for routes, controllers, models, and middleware. This structure will make it easier to scale the project as more features are added in future milestones.

Server Setup: We initialized a Node.js server using the Express framework. The server is now configured to handle API requests, and it listens on a designated port for incoming requests.

Database Connection: We integrated MongoDB into the project to store and manage data. The server is now connected to MongoDB, enabling efficient data storage and retrieval.

Error Handling: Basic error-handling mechanisms were added to ensure that the server can respond with clear error messages for better debugging and user feedback.

Milestone 7:

In this milestone, I implemented a secure login authentication system with password hashing using bcrypt. The functionality includes:
	1.	User Registration:
	•	Users can register by providing a username and password.
	•	The password is securely hashed before being stored in the database using bcrypt.
	2.	User Login:
	•	Users can log in with their username and password.
	•	The entered password is hashed using bcrypt and compared with the stored hashed password in the database.
	•	If the credentials match, the user is authenticated and can proceed further in the application.
	•	If the credentials are invalid, an error message is returned.
	3.	Security Features:
	•	Passwords are never stored in plain text; they are hashed using the bcrypt algorithm.
	•	This ensures that even if the database is compromised, user passwords remain secure.

The main goal of this milestone was to establish a secure login system that validates user credentials and ensures the safety of sensitive user data. In the next milestone, I plan to integrate additional security features, such as JWT-based user sessions.


milestone 8: card component 🎯

goals

create & display card components.

why?

showcase products.

reusable & structured layout.

better UX.

how?

dynamic component with props.

map product list.

pass data dynamically.

steps 📝

build reusable card component.

set up grid/flexbox layout.




Welcome to Milestone 9! 🌟

Today, we will create a frontend form for taking products input. Let’s dive in and understand what this all means!

Learning Goals 🎯
By the end of this milestone, you will:

Learn how to create a form that will take all the details of product
Learn how to take multiple images as input.
Why Create Product form?
Here we will create an form to input all the details of product.
This details will be eventually saved in database and will be displayed on products home page we created in previous milestone.
Steps for Milestone 9📝
Create the form for products

This form will take multiple product images images as input

Note:- This lesson will help you in understanding the basic creating of products please feel free to experiment on adding more features like creating an admin access and allow only admin to upload products or create and shop profile and a user with only shop profile can upload.


Milestone 10 - Product Schema & Endpoint 🚀

Hey Kalvians! 👋

In this milestone, we’ll create a Mongoose schema for products and an endpoint to store product details in MongoDB.

Learning Goals 🎯
	•	Define a product schema with validations (name, description, price, image URL, etc.).
	•	Create a POST endpoint to validate and save product data.
	•	Understand why validation matters for data integrity.

Steps 📝
	1.	Define Schema: Use Mongoose to structure product data with validations.
	2.	Create Endpoint: Build a POST route to receive, validate, and store product details.


Milestone 11 - Dynamic Product Display 🚀

Hey Kalvians! 👋

In this milestone, we’ll make our homepage dynamic by displaying all products from MongoDB. We’ll create an endpoint to fetch stored products and render them using our product card component.

Learning Goals 🎯
	•	Create an endpoint to fetch product data from MongoDB.
	•	Receive and use this data on the frontend.
	•	Dynamically display products using components.

Steps 📝
	1.	Backend: Write an endpoint to send all product data.
	2.	Frontend: Fetch data and display it dynamically using the product card.


	Milestone 12 - My Products Page 🚀

Hey Kalvians! 👋

In this milestone, we’ll build a My Products page that displays only the products added by the logged-in user. We’ll achieve this by filtering data based on the user’s email.

Learning Goals 🎯
	•	Create an endpoint to fetch products linked to a specific email from MongoDB.
	•	Fetch and display filtered data dynamically on the frontend.

Steps 📝
	1.	Backend: Write an endpoint to fetch products based on the user’s email.
	2.	Frontend: Fetch and display the filtered products using the product card component.

Welcome to Milestone 13! 🌟

In this milestone, we will add functionality to edit uploaded products. This includes adding an Edit button and creating a backend endpoint to update product details in the MongoDB database.

Learning Goals 🎯

By the end of this milestone, you will learn:
	•	How to write an endpoint to update existing data in MongoDB.
	•	How to auto-fill a form with previous data and allow edits.

Steps for Milestone 13 📝
	1.	Backend: Create an endpoint to receive updated product data and update it in MongoDB.
	2.	Frontend:
	•	Add an Edit button to each product card.
	•	On clicking Edit, populate the form with existing data.
	•	Allow users to modify and save the changes.

Note:

This milestone will give you a detailed understanding of performing update operations in MongoDB.

Milestone #14

In this milestone, we will add a Delete button to the product card and create a backend endpoint to remove a product from MongoDB using its ID.

Learning Goals 🎯

By the end of this milestone, you will learn:
	•	How to write an endpoint to delete a product using its ID in MongoDB.

Steps for Milestone 14 📝
	1.	Backend: Create an endpoint to delete a product from MongoDB using its ID.
	2.	Frontend:
	•	Add a Delete button to each product card.
	•	On clicking Delete, send the product ID to the server to remove it from the database.

Milestone 15: Navbar Component 🚀

Learning Goals 🎯

By the end of this milestone, you will:
	•	Learn how to create a Navbar component.
	•	Understand how to reuse a component across multiple pages.

Steps 📝
	1.	Create a Navbar component with links to:
	•	Home
	•	My Products
	•	Add Product
	•	Cart
	2.	Make it responsive for all screen sizes.
	3.	Add the Navbar to all pages for smooth navigation.

Milestone 16: Product Info Page 🚀

Learning Goals 🎯

By the end of this milestone, you will:
	•	Learn how to create a new page to display product details.
	•	Add a quantity selector and an “Add to Cart” button.

Steps 📝
	1.	Create a Product Info Page to display all product details.
	2.	Add a quantity selection option for users.
	3.	Implement an “Add to Cart” button for easy purchase.

Milestone 17 - Add to Cart 🛒

Overview

In this milestone, you’ll implement a backend endpoint to add products to a cart and store them in the database.

Learning Goals 🎯
	•	Update the user schema to store cart products.
	•	Create an API endpoint to add product details to the cart.

Steps 📝
	1.	Define the cart schema to store products.
	2.	Implement an endpoint to receive and store product details in the cart.

Milestone 18 - Fetch Cart Products 🛒

Overview

In this milestone, you’ll implement a backend endpoint to fetch all products in a user’s cart for display on the cart page.

Learning Goals 🎯
	•	Create an endpoint to handle requests from the cart page.
	•	Fetch all cart products using the user’s email.

Steps 📝
	1.	Define a backend endpoint for the cart page.
	2.	Implement logic to retrieve products from the cart based on the user’s email.



Milestone 19 - Cart Functionality 🛒

Overview

In this milestone, you’ll build a Cart UI and implement an endpoint to increase/decrease product quantity in the cart.

Learning Goals 🎯
	•	Display products in the cart (using the endpoint from Milestone 18).
	•	Add + and - buttons to modify product quantity.
	•	Create backend endpoints to update quantity.

Steps 📝
	1.	Frontend: Create a cart page and display products.
	2.	UI Controls: Add + and - buttons for quantity updates.
	3.	Backend: Implement an endpoint to modify product quantity.



Milestone 20 - Profile Page 🏠

Overview

In this milestone, you’ll build a Profile Page UI and implement an endpoint to fetch and display user data.

Learning Goals 🎯
	•	Create a backend endpoint to send user data via email.
	•	Build a frontend profile page to display user details.
	•	Show profile photo, name, email, and addresses.

Steps 📝
	1.	Backend: Create an endpoint to send user data.
	2.	Frontend: Develop a profile page layout.
	3.	Display User Info:
	•	Section 1: Profile photo, name, and email.
	•	Section 2: Address list with an “Add Address” button.
	•	If no address exists, show “No address found”.

Milestone 21: Address Form 🏡

Learning Goals 🎯

By the end of this milestone, you will:
	•	Create a frontend form for address input.
	•	Collect country, city, address1, address2, zip code, and address type.
	•	Manage form state to store the input address.
	•	Navigate to this form when clicking “Add Address” in the profile.

Steps 📝
	1.	Build the address form page.
	2.	Implement state management for the form inputs.
	3.	Enable navigation from the profile page to the form.

Milestone 22 - Store User Address 🏠

Learning Goals 🎯

By the end of this milestone, you will:
✅ Create a backend endpoint to store user addresses in the database.

Steps 📝
	1.	Create an endpoint to receive the address from the frontend form.
	2.	Append the address to the address array inside the user collection.
	3.	Ensure proper request validation and error handling.

# Milestone 23 🚀  

## Overview  
In this milestone, we will:  
- Add a *"Place Order"* button in the cart.  
- Create a *Select Address* page for choosing a delivery address.  
- Write a *Mongoose schema* for storing order details.  

## Steps  
1. Add a *Place Order* button in the cart that navigates to the Select Address page.  
2. Create a *Select Address* page displaying all saved addresses with a selection option.  
3. Implement a *backend endpoint* to fetch user addresses.  

### Note  
This milestone helps in understanding how to implement the *place order* functionality.  

# Milestone 24 🚀  

## Overview  
In this milestone, we will create an *Order Confirmation* page to display order details.  

## Steps  
1. Show all *products* being ordered.  
2. Display the *selected delivery address*.  
3. Show the *total cart value*.  
4. Add a *"Place Order"* button at the bottom.  

### Note  
This milestone helps in understanding how to implement the *place order* functionality.  


#Milestone 25 - Place Order API 🚀

In this milestone, we created a backend endpoint for placing orders.

🛠 Steps Implemented:
	•	Received products, user, and address details.
	•	Retrieved _id of the user using their email.
	•	Created separate orders for each product with the same address.
	•	Stored order details in the MongoDB orders collection.

Milestone 26 - Get User Orders API 🚀

In this milestone, we created a backend endpoint to retrieve all orders of a user.

🛠 Steps Implemented:
	•	Received user email from the request.
	•	Retrieved _id of the user using their email.
	•	Fetched all orders associated with the user from the MongoDB orders collection.
	•	Sent the user’s orders in the response.

Milestone 27 - My Orders Page 🛒

Overview

Create a frontend page to display all user orders.

Steps
	1.	Build a My Orders page.
	2.	Send a GET request to the /my-orders endpoint.
	3.	Pass the user’s email to retrieve orders.
	4.	Display the fetched orders.
	5.	Add My Orders to the navbar for easy access.

Milestone 28 - Cancel Order Feature ❌

Overview

Add a Cancel Order button and create a backend endpoint to handle cancellations.

Steps
	1.	Add a Cancel Order button for each order in My Orders.
	2.	Hide the button if the order is already canceled.
	3.	Create a backend endpoint to receive the order-id.
	4.	Retrieve the order, update its status to canceled, and save.
