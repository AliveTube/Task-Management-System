const db = require('../config/dbConnection');

exports.getTasksByToDoListId = (req, res) => {
    try {
        const { toDoListId } = req.params;
        db.query('SELECT * FROM tasks WHERE toDoListId = ?', [toDoListId], (err, data) => {
            if (err) return res.status(500).send('Server Error');
            res.json(data);
        });
    } catch (err) {
        console.error('Error fetching tasks:', err.message);
        res.status(500).send('Server Error');
    }
};

exports.getTasksByUserId = (req, res) => {
    try {
        const { uniqueId } = req.params;
        db.query('SELECT * FROM tasks WHERE userId = ?', [uniqueId], (err, data) => {
            if (err) return res.status(500).send('Server Error');
            res.json(data);
        });
    } catch (err) {
        console.error('Error fetching tasks:', err.message);
        res.status(500).send('Server Error');
    }
}

exports.getTaskById = (req, res) => {
    try {
        const { uniqueId } = req.params;
        db.query('SELECT * FROM tasks WHERE uniqueId = ?', [uniqueId], (err, data) => {
            if (err) return res.status(500).send('Server Error');
            res.json(data[0]);
        });
    } catch (err) {
        console.error('Error fetching task:', err.message);
        res.status(500).send('Server Error');
    }
};

exports.createTask = (req, res) => {
    try {
        const { title, description, priority, startDate, deadline, status, userId} = req.body;
        const { toDoListId } = req.params;

        const convertToSQLDate = (date) => {
            const jsDate = new Date(date);
            return jsDate.toISOString().slice(0, 19).replace('T', ' ');
        };

        const startDateSQL = convertToSQLDate(startDate);
        const deadlineSQL = convertToSQLDate(deadline);

        const sqlQuery = 'INSERT INTO tasks (title, description, priority, startDate, deadline, status, userId, toDoListId) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
        db.query(sqlQuery, [title, description, priority, startDateSQL, deadlineSQL, status, userId, toDoListId], (err, result) => {
            if (err) {
                return res.status(500).json({ message: 'Server Error' });
            }
            res.status(201).json({
                title,
                description,
                priority,
                startDateSQL,
                deadlineSQL,
                status,
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
        const { uniqueId, title, description, priority, startDate, deadline, status } = req.body.task;
        db.query('UPDATE tasks SET title = ?, description = ?, priority = ?, startDate = ?, deadline = ?, status = ? WHERE uniqueId = ?', 
        [title, description, priority, startDate, deadline, status, uniqueId], (err, result) => {
            if (err) return res.status(500).send('Server Error');
            if (result.affectedRows === 0) return res.status(404).json({ message: 'Task not found' });
            res.status(200).json({
                title,
                description,
                priority,
                startDate,
                deadline,
                status
            });
        });
    } catch (err) {
        console.error('Error updating task:', err.message);
        res.status(500).send('Server Error');
    }
};

exports.deleteTask = (req, res) => {
    try {
        const { uniqueId } = req.params;
        db.query('DELETE FROM tasks WHERE uniqueId = ?', [uniqueId], (err, result) => {
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

    const sqlQuery = 'INSERT INTO tasks (title, description, status, toDoListId ) VALUES (?, ?, ?, ?)';

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