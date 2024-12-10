# Task Management System

## Description
The **Task Management System** is a full-stack web application designed to help users organize and track their tasks efficiently. It leverages **React.js** for the frontend, **Node.js with Express** for the backend, and **MySQL** as the relational database to store user, folder, and task data. With features such as task creation, completion tracking, and real-time updates, this system enhances productivity by making task management seamless and intuitive.

---

## Features
- **Task Operations**: Create, update, delete, and mark tasks as completed.
- **User Management**: Register and manage multiple users, each with personal tasks.
- **Folder and To-Do List Support**: Organize tasks under folders and to-do lists.
- **Persistent Data**: Data is stored securely in a MySQL database.
- **API Integration**: RESTful APIs handle backend communication.
- **Real-Time Updates**: Dynamic UI reflects task status changes.

---

## Tech Stack
- **Frontend**: React.js, HTML, CSS  
- **Backend**: Node.js, Express.js  
- **Database**: MySQL
- **Package Manager**: npm  
- **Build Tool**: Vite.js  

---

## Installation and Setup

### Prerequisites
- **Node.js** and **npm** installed.
- **MySQL** installed and running.
- **MySQL Workbench** (optional for database management).

---

### Steps to Run the Project

1. **Clone the Repository**  
   Open your terminal and run:
   ```bash
   git clone https://github.com/AliveTube/Task-Management-System.git
   cd Task-Management-System
   ```

2. **Install Dependencies**  
   Install both frontend and backend dependencies:
   ```bash
   npm install
   cd Server
   npm install
   cd ..
   ```

3. **Set Up MySQL Database**  
   - Open **MySQL Workbench** or your preferred SQL client.  
   - Run the SQL script provided in `Database Creation.txt` to create the required tables and relationships:

4. **Configure Database Connection**  
   Update the MySQL credentials in `Server/config/db.js`:
   ```javascript
   const mysql = require('mysql');

   const db = mysql.createConnection({
     host: 'localhost',
     user: 'root',
     password: 'your_password',
     database: 'mysql2'
   });

   db.connect((err) => {
     if (err) throw err;
     console.log('MySQL Connected...');
   });

   module.exports = db;
   ```

5. **Run the Backend Server**  
   Start the backend server:
   ```bash
   cd Server
   node server.js
   ```

6. **Run the Frontend Application**  
   From the project’s root directory, start the frontend:
   ```bash
   npm run dev
   ```

7. **Open the Application**  
   Visit `http://localhost:5173` in your browser to interact with the Task Management System.

---

## Usage
1. **Login or Register**: Use the test account:
   - **Email**: Test1@gmail.com  
   - **Password**: Test1@gmail.com  
2. **Manage Tasks**: Add, update, and delete tasks from to-do lists and folders.
3. **Organize Content**: Group tasks under specific folders or lists.
4. **Track Progress**: Monitor task statuses (Pending, InProgress, Completed) in real-time.

---

## Troubleshooting
- **MySQL Connection Issues**: Verify the MySQL server is running and your credentials are correct.
- **Port Conflicts**: Modify the default port in `vite.config.js` if needed.
- **Missing Dependencies**: Run `npm install` to install any missing packages.

---

## Future Enhancements  
- Implement a more user-friendly database connection setup, removing the need for manual configuration by the user.
---

## Contributors
- **Ahmed Abd El-Wahab**  
  GitHub: [Ahmed Abd El-Wahab](https://github.com/AliveTube)  
- **Abdelrahman Wael**  
  GitHub: [Abdelrahman Wael](https://github.com/abwael)  
- **Karim Hossam**  
  GitHub: [Karim Hossam](https://github.com/Karim-Hosam)  
- **Omar Farrag**  
  GitHub: [Omar Farrag](https://github.com/omarfarrag07)  
