//TODO specify the actuall used db 
const mysql = require('mysql2/promise');


exports.getAllTodoLists = async(req,res) =>{
    const sqlQuery="SELECT * FROM todo_lists";
    try {
        const [rows] =await db.query(sqlQuery);
        res.status(200).json(rows);
    } catch (error) {
        console.error('Error fetching todo lists :', error);
        res.status(500).json({message: 'Error fetchong todo lists '});
    }
};


// Create a new to-do list
exports.createTodoList = async (req, res) => {
    const { title, description } = req.body;
    try {
        const [result] = await db.query('INSERT INTO todo_lists (title, description) VALUES (?, ?)', [title, description]);
        res.status(201).json({ id: result.insertId, title, description });
    } catch (error) {
        console.error('Error creating to-do list:', error);
        res.status(500).json({ message: 'Error creating to-do list' });
    }
};