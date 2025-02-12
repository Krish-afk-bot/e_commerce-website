<<<<<<< HEAD
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

Milestone 10:

 Creating the Product Schema and API Endpoint
In this milestone, we focused on defining the structure of product data and creating an API endpoint to store product details in MongoDB.
1. Product Schema Definition:
Defined a structured product schema using Mongoose to store product data in MongoDB.
Ensured each field has proper validation to maintain data integrity:
Name: Required, string
Description: Required, string
Price: Required, number, with validation for non-negative values
Image URL(s): Required, array of strings for multiple image storage
Category: Required, string
CreatedAt: Automatically generated timestamp
2. Endpoint Creation:
Developed a POST endpoint (/api/products) to accept product details from the frontend.
Implemented validation to ensure only correctly formatted data is stored in the database.
Saved product information to MongoDB using Mongoose models.
3. Data Validation & Integrity:
Enforced strict validation to prevent invalid or incomplete product entries.
Returned appropriate error messages for missing or incorrect data inputs.
4. Future Enhancements & Experimentation:
Considered adding role-based access control:
Admin Access: Only admin users can create new products.
Shop Profiles: Restrict product uploads to users with a registered shop profile.
Image Upload Handling: Implement a cloud-based solution (e.g., Cloudinary, AWS S3) for better image management. make this s
=======
# E-Commerce_follow_along

This project is a full-stack e-commerce platform developed using the MERN stack: MongoDB, Express.js, React.js, and Node.js. It integrates scalable APIs, secure authentication, and robust product management functionalities to provide a seamless user experience.


1. User Authentication
The e-commerce platform includes secure login and registration functionalities with JSON Web Tokens (JWT). This ensures that user sessions are properly managed, and sensitive data is accessed only by authorized individuals.

Register: Enables new users to sign up.
Login: Authenticates users and provides a secure session using JWT tokens.

2. Product Management
The product management system allows administrators to add, update, retrieve, and delete products efficiently.

Add Product: Allows adding new products with necessary details.
Update Product: Enables updating product details such as price, description, or images.
Retrieve Products: Provides an easy way to fetch product listings.
Delete Product: Removes products from the database when necessary.

3. Order Management
The platform offers a comprehensive system to manage customer orders, ensuring a seamless purchasing experience.

Create Order: Allows users to place orders for products.
Update Order: Provides options to update order details (e.g., shipping address, quantity).
View Order: Facilitates viewing order history and status.

4. RESTful APIs
The e-commerce platform uses RESTful API design, which organizes interactions between the client and server into standard HTTP methods (GET, POST, PUT, DELETE). This ensures a clean and scalable communication process with the database.
Each endpoint is designed to handle specific tasks, such as retrieving product data or managing user accounts.

5. Scalable Backend
The backend of the e-commerce platform is developed using Node.js and Express.js, making it highly efficient in handling multiple concurrent requests. This allows for fast performance even with a growing user base.

6. Responsive Frontend
The frontend is built using html, css, java script React.js, providing a dynamic and responsive user interface. React.js enhances user interaction by offering components that handle views efficiently, resulting in a smoother, faster, and more intuitive experience for customers.

#### Milestone 1: Initialize Project Repository  

This milestone focused on setting up the GitHub repository to serve as the central hub for the e-commerce project's development. By creating the repository and initializing it with a README file, the project gained a clear starting point with version control, ensuring organization and collaboration as the development progresses.

#### Milestone 2: Project Setup and Login Page 
This milestone focused on establishing the foundational structure and core functionalities of the project. 

Key tasks included:
1. *Structuring the Project:* Created a clear folder hierarchy to organize frontend and backend components efficiently.
2. *Frontend Setup:* Initialized a React app and configured Tailwind CSS for streamlined styling.
3. *Backend Setup:* Built a Node.js server to handle API requests and backend logic.
4. *Development Tools:* Integrated optional extensions to enhance productivity.
5. *Login Page:* Designed and developed a functional, styled login page as the first user-facing feature of the application.

#### Milestone 3: Backend Structure and Server Setup  

This milestone focused on setting up the backend infrastructure and establishing a robust foundation for server-side operations. 

Key tasks included:  
1. *Organizing Backend Files:* Created a structured hierarchy for routes, controllers, models, middleware, and utilities to ensure scalability and maintainability.  
2. *Server Setup:* Built a backend server using Node.js and Express, configured to listen on a designated port.  
3. *Database Integration:* Connected MongoDB for efficient data storage and verified the connection between the server and database.  
4. *Error Handling:* Implemented clear error messages to enhance debugging and provide better feedback for users.  

This milestone establishes a functional backend and prepares the project for future development.  

#### Milestone 4: User Management and File Upload  

This milestone focuses on implementing user data handling and file upload functionality. 

Key achievements include:  
1. *User Model:* Defined a blueprint for storing user data in the database, ensuring a consistent structure for user-related information.  
2. *User Controller:* Developed logic to manage user operations such as adding new users and retrieving user information.  
3. *File Upload Setup:* Integrated and configured Multer to enable file uploads (e.g., user profile images) and store them efficiently in the application.  

By completing this milestone, the application now supports user management and file uploads, enhancing its core functionality.  

#### Milestone 5: Signup page and Validation  

This milestone focuses on creating a user-friendly Sign-Up page and implementing essential form validation. Key tasks include:  

1. *Frontend UI:* Designed a clean and intuitive Sign-Up page where users can provide their details (Name, Email, Password) to create an account.  
2. *Form Validation:* Ensured user inputs are validated before submission, checking for proper email formats and secure passwords to prevent errors and maintain data integrity.  

By completing this milestone, the application now has a functional and secure user registration interface.  


#### Milestone 6: User Data Security and Password Encryption  

This milestone focused on enhancing user data security by implementing password encryption and securely storing user information in the database.  

*Key tasks included:*  

1. *Password Encryption:*  
   - Integrated bcrypt to hash user passwords during the signup process.  
   - Ensured that only the hashed password is stored in the database, enhancing security.  

2. *Storing Complete User Data:*  
   - Implemented secure storage of user details such as name, email, and other necessary information.  
   - Ensured that sensitive data is handled appropriately while keeping passwords encrypted.  

This milestone strengthens the security of user authentication, preventing unauthorized access to sensitive information. 

#### Milestone 7: User Authentication and Login  
This milestone focused on implementing a secure login system by verifying user credentials and ensuring proper authentication.  

*Key tasks included:*  

1. *Create Login Endpoint:*  
   - Developed an API endpoint to accept user credentials (email/username and password).  
   - Retrieved the corresponding user from the database for authentication.  

2. *Validate Password:*  
   - Used bcrypt to hash the entered password.  
   - Compared the hashed input with the stored hashed password to authenticate users.  

This milestone enhances security by ensuring only authenticated users gain access.  


#### Milestone 8: Product Card Component and Display  

This milestone focused on designing and implementing a reusable card component to display products effectively on the products page.  

*Key tasks included:*  

1. *Create the Card Component:*  
   - Designed a reusable card component with props for product details (e.g., name, image, price).  
   - Ensured a visually appealing layout to enhance user experience.  

2. *Design the Homepage Layout:*  
   - Implemented a grid or flexbox layout for structured product display.  
   - Used mapping to dynamically render multiple product cards with unique details.  

This milestone improves product presentation, creating a clean and user-friendly browsing experience. 

Here’s your README update for Milestone 9:  

---

#### Milestone 9: Product Creation Form  

This milestone focuses on building a form to collect product details and handle multiple image uploads.  

*Key Objectives:*  
1. *Form Implementation:* Designed a structured form to input essential product details.  
2. *Image Upload:* Enabled multiple image uploads for each product.  
3. *Data Storage:* Ensured product details are saved in the database for display on the product homepage.  

*Additional Considerations:* 
- Implementing admin access to restrict product uploads.  
- Creating a shop profile for users who can upload products.  

This milestone establishes a foundation for product management in the e-commerce platform.

### Milestone 10: Product Schema & API Endpoint  

This milestone focuses on defining the product schema and creating an API endpoint to validate and store product details in MongoDB.  

*Key Objectives:*

1. *Product Schema:*  
   - Define the product data structure using Mongoose.  
   - Implement field validations (e.g., required fields, data types).  

2. *API Endpoint:*  
   - Build a POST endpoint to receive and store product details.  
   - Validate input before saving to MongoDB.  

*Additional Considerations:*
- Implement admin access for product uploads.  
- Allow only shop-profile users to upload products.  

This milestone ensures data integrity and establishes backend functionality for product management.

### Milestone 11: Dynamic Product Display  

This milestone makes the home page dynamic by fetching and displaying product data from MongoDB.  

#### Key Tasks:  
- Create an API endpoint to fetch all product data.  
- Implement a function to receive and display data in the frontend.  
- Use the product card component for dynamic rendering.  

This ensures smooth data flow between backend and frontend.

### Milestone 12: My Products Page  

This milestone focuses on displaying user-specific products by filtering them based on email.  

#### Key Tasks:  
- Create an API endpoint to fetch products linked to the user’s email.  
- Implement a function to retrieve and display filtered data in the frontend.  
- Use the product card component for dynamic rendering.  

This ensures users see only their added products, improving personalization.
## Milestone 13: Edit Product Functionality

### Features Implemented:
- Added an edit button on each product card.
- Created a `PUT` endpoint to update product details in MongoDB.
- Auto-filled the form with the product’s current details for editing.
- Successfully updated the product details and saved them to the database.
>>>>>>> 833dff5 (milstone13)
