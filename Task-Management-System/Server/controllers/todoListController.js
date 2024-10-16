const db = require("../config/dbConnection");

exports.getAllTodoListsForFolder = (req, res) => {
    const folderId = req.params.folderID;
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
    const { title, folderId, startDate } = req.body;

    const sqlQuery =
      `INSERT INTO todoList (title, folderId, startDate)
      VALUES (?, ?, ?)`
    ;

    db.query(sqlQuery, [title, folderId, startDate], (err, result) => {
        if (err) {
            console.error('Error creating to-do list:', err);
            return res.status(500).json({ message: 'Error creating to-do list' });
        }

        res.status(201).json({
            uniqueId: result.insertId,
            title,
            folderId,
            startDate
        });
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


exports.editTodoList = (req, res) => {
    const { todoListID, newTitle } = req.body;
    if (!newTitle.length) return res.json({ message: "The TodoList Name is Empty!" });
    else {
        db.query(`select * from todolist where uniqueId = '${todoListID}'`, (err,data)=>{
            if(err) return res.json({message:"Error!"});
            else if(!data.length) return res.json({message:"The TodoList doesn't exist!"});
            else{
                db.query(`update todolist set title = '${newTitle}' where uniqueId = '${todoListID}'`,(err,data)=>{
                    if(err) return res.json({message:"Error!"});
                    return res.json({message:"TodoList title updated successfully:"});
                })
            }
        })
    }
}