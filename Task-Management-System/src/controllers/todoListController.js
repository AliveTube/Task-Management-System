//TODO specify the actuall used db 
const connectDB = require('../config/db');  // Import the database connection


exports.getAllTodoListsForFolder = async(req,res) =>{

    const folderId = req.params.folderId;
    const sqlQuery="SELECT * FROM todo_lists WHERE folderId = ?";
    try {
        const db = await connectDB();

        const [rows] =await db.excute(sqlQuery,[folderId]);
        res.status(200).json(rows);
    } catch (error) {
        console.error('Error fetching todo lists :', error);
        res.status(500).json({message: 'Error fetching todo lists '});
    }
};


// Create a new to-do list
exports.createTodoList = async (req, res) => {

    const { title } = req.body;
    try {
        const db = await connectDB();

        const [result] = await db.excute('INSERT INTO todolist (title) VALUES (?)', [title]);
        res.status(201).json({ id: result.insertId, title });
    } catch (error) {
        console.error('Error creating to-do list:', error);
        res.status(500).json({ message: 'Error creating to-do list' });
    }
};


exports.deleteTodoList =async (req,res)=>{
    const todoListId =req.params.todoListId;
    const sqlQuery="DELETE * FROM todo_lists WHERE uniqueId =?"
    const db = await connectDB();
    db.excute(sqlQuery,[todoListId],(err,result)=>{
        if(err){
            console.error('Error deleting todo list',err);
            return res.status(500).json({message:'Error deleting todo list'});
        }
        if(result.affectedRows ===0){
            return res(404).json({message:'to do list not found'});
        }
        res.status(200).json({message:'todo list deleted successfully'});
    });
    
};
