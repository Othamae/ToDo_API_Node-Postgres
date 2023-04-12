# Todo Application

This is a web application that allows users to create and manage their own to-do lists.

## Features
* Users can register and login to the application
* Users can create, update, and delete their to-do items
* To-do items can be marked as complete or incomplete
* Users can filter their to-do list by completed or incomplete items

## Technologies Used
* React.js
* Node.js
* Express.js
* PostgreSQL
* Sequelize ORM
* JWT for authentication
* bcrypt for password hashing
* Express Validator for server-side validation
* CORS middleware
* dotenv for environment variable configuration

## Backend
The backend for this application is built using Node.js and Express.js, with a PostgreSQL database managed through Sequelize ORM. The API includes routes for user authentication, to-do item creation and management, and filtering to-do items. It also utilizes JWT for authentication, bcrypt for password hashing, and Express Validator for server-side validation. The API is configured to allow CORS requests from the front-end application.

### API Routes
* POST /api/user/register: Register a new user
* POST /api/user/login: Login with an existing user account
* GET /api/user/:id/task: Get all to-do items for the logged-in user
* GET /api/task: Get all to-do items 
* POST /api/task: Create a new to-do item for the logged-in user
* PUT /api/todos/:id: Update a specific to-do item for the logged-in user
* DELETE /api/todos/:id: Delete a specific to-do item for the logged-in user

## Getting Started
To run this application, you will need to set up both the frontend and backend environments.

### Backend
1. Clone the repository
2. Navigate to the backend directory
3. Run `npm install` to install dependencies
4. Create a PostgreSQL database for the application
5. Create a `.env` file in the backend directory with the following variables:

 ``` 
POSTGRES_HOST=
POSTGRES_USER=
POSTGRES_PASSWORD=
POSTGRES_DATABASE=
POSTGRES_PORT=

JWT_SECRET=   
 ```

   6. Run `npm run start` to start the server

### Frontend

[Go to Repository]( https://github.com/Othamae/ToDo_APP_by_Othamae)

[Try it Here!](https://othamae.github.io/ToDo_APP_by_Othamae/)


## Credits
This application was created by Veronica Conesa.
