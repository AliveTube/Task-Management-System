const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');  // Import the database connection

// Initialize Express
const app = express();

//Add Routes
const registerRoute = require('./routes/registerRoute');

// Middleware
app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());

// Connect to the MySQL database
connectDB();  // This will connect when the server starts

//use Register Route
app.use(registerRoute);

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

app.get('/api/tasks/', async (req, res) => {
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

app.get('/api/tasks/:uniqueId', async (req, res) => {
    try {
        const { uniqueId } = req.params;
        console.log('Requested Task ID:', uniqueId);

        const connection = await connectDB();
        const [rows] = await connection.execute(
            'SELECT * FROM Tasks WHERE uniqueId = ?',
            [uniqueId]
        );

        if (rows.length === 0) {
            return res.status(404).json({ message: 'Task not found' });
        }

        res.json(rows); // Send the task(s) as JSON
    } catch (err) {
        console.error('Error fetching task:', err.message);
        res.status(500).send('Server Error');
    }
});

app.put('/api/tasks/:uniqueId', async (req, res) => {
    try {
        const { uniqueId } = req.params;
        const { status } = req.body;

        const connection = await connectDB();
        const [result] = await connection.execute(
            'UPDATE Tasks SET status = ? WHERE uniqueId = ?',
            [status, uniqueId]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Task not found' });
        }

        const [updatedTask] = await connection.execute(
            'SELECT * FROM Tasks WHERE uniqueId = ?',
            [uniqueId]
        );

        res.status(200).send("Task status updated successfully");
    }
    catch (err) {
        console.error('Error updating task status:', err.message);
        res.status(500).send('Server Error');
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));