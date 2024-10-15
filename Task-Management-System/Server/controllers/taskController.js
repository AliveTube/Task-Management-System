const db = require('../config/dbConnection');

exports.getAllTasks = (req, res) => {
    try {
        db.query('SELECT * FROM Tasks', (err, data) => {
            if (err) {
                return res.status(500).send('Server Error');
            }
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
            if (err) {
                return res.status(500).send('Server Error');
            }
            if (!data.length) {
                return res.status(404).json({ message: 'Task not found' });
            }
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

        db.query('UPDATE Tasks SET status = ? WHERE uniqueId = ?', [status, uniqueId], (err, result) => {
            if (err) {
                return res.status(500).send('Server Error');
            }
        });
        res.status(200).send('Task status updated successfully');
    }
    catch (err) {
        console.error('Error updating task status:', err.message);
        res.status(500).send('Server Error');
    }
};
