# User Profile CRUD Application

## Description

A simple Express.js application with MongoDB to perform CRUD (Create, Read, Update, Delete) operations on user profiles. Users can create, view, edit, and delete profiles through a web interface.

## Features

- **Create User**: Add new user profiles.
- **Read Users**: View all user profiles.
- **Edit User**: Update existing user profiles.
- **Delete User**: Remove user profiles.

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/mongodb_profile_crud_operation.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd mongodb_profile_crud_operation
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

4. **Set up MongoDB**:

   Ensure MongoDB is installed and running. The application connects to a MongoDB instance running locally on port 27017.

5. **Run the application**:

   ```bash
   npm start
   ```

   The application will start and listen on port 3000.

## File Structure

- **`app.js`**: Main application file where routes and middleware are defined.
- **`models/user.js`**: Mongoose model for user profiles.
- **`views/`**: Directory containing EJS templates for the web interface.
- **`public/`**: Directory for static files (e.g., CSS).

## EJS Templates

- **`views/index.ejs`**: Form for creating new users.
- **`views/read.ejs`**: Displays all users with options to edit or delete.
- **`views/edit.ejs`**: Form for editing user profiles.

## Dependencies

- **`express`**: Web framework for Node.js.
- **`mongoose`**: MongoDB object modeling tool.
- **`ejs`**: Embedded JavaScript templating engine.

## Usage

- **Create User**: Go to [http://localhost:3000](http://localhost:3000) and fill out the form to create a new user.
- **View Users**: Click on the "Read Users" link to view all users.
- **Edit User**: Click "Edit User" next to a user to update their information.
- **Delete User**: Click "Delete User" next to a user to remove their profile.

## Screenshots

### User Form (Create User)
![Create User Form](https://github.com/adithya-b-r/User-Profile-CRUD-Application/blob/main/imgs/create.png)

### User List (Read Users)
![User List](https://github.com/adithya-b-r/User-Profile-CRUD-Application/blob/main/imgs/read.png)

### User Profile (Edit User)
![Edit User Profile](https://github.com/adithya-b-r/User-Profile-CRUD-Application/blob/main/imgs/edit.png)
