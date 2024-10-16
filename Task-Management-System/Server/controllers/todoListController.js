const db = require("../config/dbConnection");

exports.getAllTodoListsForFolder = (req, res) => {
    const folderId = req.params.folderId;
    const sqlQuery = "SELECT * FROM todolist WHERE folderId = ?";

    db.query(sqlQuery, [folderId], (err, rows) => {
        if (err) {
            console.error('Error fetching todo lists:', err);
            return res.status(500).json({ message: 'Error fetching todo lists' });
        }
        res.status(200).json(rows);
    });
};

exports.createTodoList = (req, res) => {
    const { title } = req.body;
    const sqlQuery = "INSERT INTO todolist (title) VALUES (?)";

    db.query(sqlQuery, [title], (err, result) => {
        if (err) {
            console.error('Error creating to-do list:', err);
            return res.status(500).json({ message: 'Error creating to-do list' });
        }
        res.status(201).json({ id: result.insertId, title });  // Return new list's ID and title
    });
};

exports.deleteTodoList = (req, res) => {
    const todoListId = req.params.todoListId;
    const sqlQuery = "DELETE FROM todolist WHERE uniqueId = ?";

    db.query(sqlQuery, [todoListId], (err, result) => {
        if (err) {
            console.error('Error deleting to-do list:', err);
            return res.status(500).json({ message: 'Error deleting to-do list' });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'To-do list not found' });
        }
        res.status(200).json({ message: 'To-do list deleted successfully' });
    });
};
