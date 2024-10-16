const express = require('express');
const cors = require('cors');

// Initialize Express
const app = express();

// Import routes
const userRoute = require('./routes/userRoute');
const taskRoute = require('./routes/taskRoute');
const registerRoute = require('./routes/registerRoute');
const homeRoute = require('./routes/homeRoute');
const loginRoute = require('./routes/loginRoute');
const todoListRoute = require('./routes/todoListRoute');
const profileRoute = require('./routes/profileRoute');

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// Use Routes
app.use(userRoute);
app.use(taskRoute);
app.use(registerRoute);
app.use(homeRoute);
app.use(loginRoute);
app.use(todoListRoute);
app.use(profileRoute);

// Sample route to verify server is running
app.get('/', (req, res) => {
    res.send('API is running');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));