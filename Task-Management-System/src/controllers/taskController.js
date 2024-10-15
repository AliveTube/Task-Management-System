//TODO specify the actuall used db 
const connectDB = require('../config/db');  // Import the database connection

exports.getAllTasks = async(req, res) => {
     
  const db = await connectDB();
  
    const sql = 'SELECT * FROM tasks';
    db.query(sql, (error, results) => {
      if (error) {
        return res.status(500).json({ message: 'Error fetching tasks', error });
      }
      res.status(200).json(results);
    });
  };

  exports.getTaskById = async(req, res) => {
    const db = await connectDB();

    const taskId = req.params.id;
    const sql = 'SELECT * FROM tasks WHERE id = ?';
    db.excute(sql, [taskId], (error, result) => {
      if (error) {
        return res.status(500).json({ message: 'Error fetching task', error });
      }
      if (result.length === 0) {
        return res.status(404).json({ message: 'Task not found' });
      }
      res.status(200).json(result[0]);
    });
  };

exports.createTask = async(req,res)=>{
  const db = await connectDB();

    const {title , description , status}=req.body;
    const sqlQuery='INSERT INTO tasks (title, description, status) VALUES (?,?,?)';
    db.excute(sqlQuery,[title,description,status], (error , result )=>{
        if(error){
            return res.status(500).json({message: 'error creating task', error });
        }
        res.status(201).json({message: 'Task created successfully', taskId: result.insertId});
    });
};

exports.updateTask = async(req, res) => {
  const db = await connectDB();

    const taskId = req.params.id;
    const { title, description, status } = req.body;
    const sql = 'UPDATE tasks SET title = ?, description = ?, status = ? WHERE id = ?';
    db.excute(sql, [title, description, status, taskId], (error, result) => {
      if (error) {
        return res.status(500).json({ message: 'Error updating task', error });
      }
      res.status(200).json({ message: 'Task updated' });
    });
  };

  exports.deleteTask = async(req, res) => {
    const db = await connectDB();

    const taskId = req.params.id;
    const sql = 'DELETE FROM tasks WHERE id = ?';
    db.excute(sql, [taskId], (error, result) => {
      if (error) {
        return res.status(500).json({ message: 'Error deleting task', error });
      }
      res.status(200).json({ message: 'Task deleted' });
    });

  };

  exports.getTasksForTodoList = async (req, res) => {
    const db = await connectDB();

    const todoListId = req.params.id;
    const sqlQuery = 'SELECT * FROM tasks WHERE todo_list_id = ?';  // Assuming 'todo_list_id' is the foreign key in the 'tasks' table
    try {
        const [tasks] = await db.excute(sqlQuery, [todoListId]);
        if (tasks.length === 0) {
            return res.status(404).json({ message: 'No tasks found for this to-do list' });
        }
        res.status(200).json(tasks);
    } catch (error) {
        console.error('Error fetching tasks for to-do list:', error);
        res.status(500).json({ message: 'Error fetching tasks for to-do list' });
    }
};

// Add a new task to a specific to-do list by ID
exports.addTaskToTodoList = async (req, res) => {
  const db = await connectDB();

    const todoListId = req.params.id;
    const { title, description, status } = req.body;
    const sqlQuery = 'INSERT INTO tasks (title, description, status, todo_list_id) VALUES (?, ?, ?, ?)';  // 'todo_list_id' to link the task to the to-do list
    try {
        const [result] = await db.excute(sqlQuery, [title, description, status, todoListId]);
        res.status(201).json({ id: result.insertId, title, description, status, todo_list_id: todoListId });
    } catch (error) {
        console.error('Error adding task to to-do list:', error);
        res.status(500).json({ message: 'Error adding task to to-do list' });
    }
};