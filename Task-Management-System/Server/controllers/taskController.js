const db = require('../config/dbConnection');

exports.getAllTasks = (req, res) => {
    try {
        db.query('SELECT * FROM Tasks', (err, data) => {
            if (err) return res.status(500).send('Server Error');
            res.json(data);
        });
    } catch (err) {
        console.error('Error fetching tasks:', err.message);
        res.status(500).send('Server Error');
    }
};

exports.getTaskById = (req, res) => {
    try {
        const { uniqueId } = req.params;
        db.query('SELECT * FROM Tasks WHERE uniqueId = ?', [uniqueId], (err, data) => {
            if (err) return res.status(500).send('Server Error');
            if (!data.length) return res.status(404).json({ message: 'Task not found' });
            res.json(data[0]);
        });
    } catch (err) {
        console.error('Error fetching task:', err.message);
        res.status(500).send('Server Error');
    }
};


exports.updateTaskStatus = (req, res) => {
    try {
        const { uniqueId } = req.params;
        const { status } = req.body;
        db.query('UPDATE Tasks SET status = ? WHERE uniqueId = ?', [status, uniqueId], (err) => {
            if (err) return res.status(500).send('Server Error');
            res.status(200).send('Task status updated successfully');
        });
    } catch (err) {
        console.error('Error updating task status:', err.message);
        res.status(500).send('Server Error');
    }
};

exports.createTask = (req, res) => {
    try {
        let { title, description, priority, startDate, deadline, status } = req.body;

        const userId = 1;
        const toDoListId = 1;

        const convertToSQLDate = (date) => {
            const jsDate = new Date(date);
            return jsDate.toISOString().slice(0, 19).replace('T', ' ');
        };

        const startDateSQL = convertToSQLDate(startDate);
        const deadlineSQL = convertToSQLDate(deadline);

        const sqlQuery = 'INSERT INTO Tasks (title, description, priority, startDate, deadline, status, userId, toDoListId) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
        db.query(sqlQuery, [title, description, priority, startDateSQL, deadlineSQL, status, userId, toDoListId], (err, result) => {
            if (err) {
                console.error('SQL Error:', err.message);  // Log the actual SQL error
                return res.status(500).json({ message: 'Server Error' });
            }
            res.status(201).json({
                title,
                description,
                priority,
                startDateSQL,
                deadlineSQL,
                status,
                userId,
                toDoListId
            });
        });
    } catch (err) {
        console.error('Error creating task:', err.message);
        res.status(500).send('Server Error');
    }
};

exports.updateTask = (req, res) => {
    try {
        const { uniqueId } = req.params;
        const { taskName, status } = req.body;
        db.query('UPDATE Tasks SET taskName = ?, status = ? WHERE uniqueId = ?',
            [taskName, status, uniqueId], (err) => {
            if (err) return res.status(500).send('Server Error');
            res.status(200).send('Task updated successfully');
        });
    } catch (err) {
        console.error('Error updating task:', err.message);
        res.status(500).send('Server Error');
    }
};

exports.deleteTask = (req, res) => {
    try {
        const { uniqueId } = req.params;
        db.query('DELETE FROM Tasks WHERE uniqueId = ?', [uniqueId], (err, result) => {
            if (err) return res.status(500).send('Server Error');
            if (result.affectedRows === 0) return res.status(404).json({ message: 'Task not found' });
            res.status(200).send('Task deleted successfully');
        });
    } catch (err) {
        console.error('Error deleting task:', err.message);
        res.status(500).send('Server Error');
    }
};

exports.addTaskToTodoList = (req, res) => {
    const { id: todoListId } = req.params;
    const { title, description, status } = req.body;

    const sqlQuery = 'INSERT INTO Tasks (title, description, status, toDoListId ) VALUES (?, ?, ?, ?)';

    try {
        db.query(sqlQuery, [title, description, status, todoListId], (err, result) => {
            if (err) return res.status(500).send('Server Error');
            res.status(201).json({
                id: result.insertId,
                title,
                description,
                status,
                toDoListId : todoListId
            });
        });
    } catch (err) {
        console.error('Error adding task to to-do list:', err.message);
        res.status(500).send('Server Error');
    }
};

exports.getTasksForTodoList = (req, res) => {
    const { id: todoListId } = req.params;
    const sqlQuery = 'SELECT * FROM tasks WHERE toDoListId = ?';

    try {
        db.query(sqlQuery, [todoListId], (err, tasks) => {
            if (err) return res.status(500).send('Server Error');
            if (tasks.length === 0) {
                return res.status(404).json({ message: 'No tasks found for this to-do list' });
            }
            res.status(200).json(tasks);
        });
    } catch (err) {
        console.error('Error fetching tasks for to-do list:', err.message);
        res.status(500).send('Server Error');
    }
};