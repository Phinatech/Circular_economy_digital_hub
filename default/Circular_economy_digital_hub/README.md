# Circular Economy Digital Hub

## Overview
The Circular Economy Digital Hub is a comprehensive platform designed to promote and facilitate the principles of circular economy. This project encompasses a backend API, a frontend user interface, and a database for data management.

## Project Structure
The project is organized into three main components:
- **Backend**: Contains the server-side application built with Node.js and Express.
- **Frontend**: Contains the client-side application built with React.
- **Database**: Contains the database configuration, migrations, and seed files.

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm (Node Package Manager)
- MongoDB (for backend data storage)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Circular_economy_digital_hub
   ```

2. **Backend Setup**
   - Navigate to the backend directory:
     ```bash
     cd backend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Create a `.env` file in the backend directory and add your environment variables (e.g., database connection string).
   - Start the backend server:
     ```bash
     npm start
     ```

3. **Frontend Setup**
   - Navigate to the frontend directory:
     ```bash
     cd ../frontend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the frontend application:
     ```bash
     npm start
     ```

### Database Setup
- Navigate to the database directory:
  ```bash
  cd ../database
  ```
- Run the migrations to set up the database schema:
  ```bash
  mysql -u <username> -p < database/migrations/init.sql
  ```
- Seed the database with initial data:
  ```bash
  mysql -u <username> -p < database/seeds/seed.sql
  ```

## Usage
- Access the frontend application at `http://localhost:3000`.
- The backend API can be accessed at `http://localhost:5000/api`.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.