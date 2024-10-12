const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');  // Import the database connection

// Initialize Express
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to the MySQL database
connectDB();  // This will connect when the server starts

// Sample route to verify server is running
app.get('/', (req, res) => {
  res.send('API is running');
});

// Route to fetch users from the database
app.get('/api/users', async (req, res) => {
    try {
        // Establish a new connection for this route
        const connection = await connectDB();

        // Execute a SQL query to fetch users
        const [rows] = await connection.execute('SELECT * FROM Users');

        // Send the result as a JSON response
        res.json(rows);
    } catch (err) {
        console.error('Error fetching users:', err.message);
        res.status(500).send('Server Error');
    }
});

app.get('/api/tasks', async (req, res) => {
    try {
        // Establish a new connection for this route
        const connection = await connectDB();

        // Execute a SQL query to fetch users
        const [rows] = await connection.execute('SELECT * FROM Tasks');

        // Send the result as a JSON response
        res.json(rows);
    } catch (err) {
        console.error('Error fetching users:', err.message);
        res.status(500).send('Server Error');
    }
});

app.post('/api/tasks', async (req, res) => {
    // const { title, priority, deadline } = req.body;

    // try {
    //     // Establish a new connection for this route
    //     const connection = await connectDB();

    //     // Execute a SQL query to insert a new task
    //     const [result] = await connection.execute(
    //         'INSERT INTO Tasks (title, priority, deadline) VALUES (?, ?, ?)',
    //         [title, priority, deadline]
    //     );

    //     // Send the result as a JSON response
    //     res.json({ id: result.insertId, title, priority, deadline });
    // } catch (err) {
    //     console.error('Error creating task:', err.message);
    //     res.status(500).send('Server Error');
    // }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));