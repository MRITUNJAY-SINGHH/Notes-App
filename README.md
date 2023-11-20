# Note App

Welcome to the Note App! This web application allows users to create, read, update, and delete notes. Users can create an account, log in, and manage their notes. The application is built using the MERN stack (MongoDB, Express, React, Node.js).
## Live Demo

Check out the live demo of the Note App: [Live Demo](https://notes-app-frontend-main.vercel.app/)
<br>
<br>
## Features

1. **Authentication:** Users can create a new account, log in, and log out securely.
2. **Notes Management:** Users can view, create, edit, and delete their notes.
3. **Responsive Design:** The application is designed to work seamlessly on both desktop and mobile devices.

## Requirements

1. The landing page includes a login form and a link to create a new account.
2. Users can create a new account with an email address and encrypted password.
3. Users can log in with their email address and password.
4. Once logged in, users see a list of their notes in reverse chronological order.
5. Users can create a new note with a title and description.
6. Users can view a note by clicking on its title.
7. Users can edit a note by modifying its title and description.
8. Users can delete a note.
9. Users can log out.
10. Responsive design for both desktop and mobile devices.

## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB installed
- Git installed

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/note-app.git
   cd note-app

2.Install dependencies:
# Install backend dependencies
```bash
cd backend
npm install
```
# Install frontend dependencies
```bash
cd ../frontend
npm install
```
3.Set up the database:
*Create a .env file in the backend directory with the following
```bash
MONGO_URI=your_mongodb_connection_url
JWT_SECRET=your_jwt_secret_key
PORT=
```




  ## Technologies Used

- **MongoDB:** NoSQL database for storing user and note data.
- **Express.js:** Web application framework for building the backend API.
- **React.js:** JavaScript library for building the user interface.
- **Node.js:** JavaScript runtime for running server-side code.
- **bcrypt:** Library for encrypting passwords before storing them in the database.
- **JSON Web Tokens (JWT):** Used for secure user authentication.
- **React Router:** Library for handling routing in the React application.
- **Bootstrap:** CSS framework for styling and responsive design.

## info

To deploy the application, follow these steps:

1. **Backend:**
   - Ensure MongoDB is installed, and you have a connection URL.
   - Create a `.env` file in the backend directory with the following:

     ```env
     MONGO_URI=your_mongodb_connection_url
     JWT_SECRET=your_jwt_secret_key
     PORT=
     ```

   - Deploy the backend to your chosen hosting service.

2. **Frontend:**
   - Deploy the frontend using a platform like Vercel, Netlify, or GitHub Pages.
   - Configure environment variables for the frontend deployment, such as the backend API URL.

3. **Update API URLs:**
   - Once deployed, update the API URLs in the frontend to point to the deployed backend.

4. **Access the Application:**
   - Visit the deployed frontend URL to access and use the application.

Ensure to adapt these steps based on your specific deployment choices and configurations.


