//TODO specify the actuall used db 
const mysql = require('mysql2/promise');

exports.getAllTasks = (req, res) => {
    const sql = 'SELECT * FROM tasks';
    db.query(sql, (error, results) => {
      if (error) {
        return res.status(500).json({ message: 'Error fetching tasks', error });
      }
      res.status(200).json(results);
    });
  };

  exports.getTaskById = (req, res) => {
    const taskId = req.params.id;
    const sql = 'SELECT * FROM tasks WHERE id = ?';
    db.query(sql, [taskId], (error, result) => {
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
    const {title , description , status}=req.body;
    const sqlQuery='INSERT INTO tasks (title, description, status) VALUES (?,?,?)';
    db.query(sqlQuery,[title,description,status], (error , result )=>{
        if(error){
            return res.status(500).json({message: 'error creating task', error });
        }
        res.status(201).json({message: 'Task created successfully', taskId: result.insertId});
    });

};

exports.updateTask = (req, res) => {
    const taskId = req.params.id;
    const { title, description, status } = req.body;
    const sql = 'UPDATE tasks SET title = ?, description = ?, status = ? WHERE id = ?';
    db.query(sql, [title, description, status, taskId], (error, result) => {
      if (error) {
        return res.status(500).json({ message: 'Error updating task', error });
      }
      res.status(200).json({ message: 'Task updated' });
    });
  };

  exports.deleteTask = (req, res) => {
    const taskId = req.params.id;
    const sql = 'DELETE FROM tasks WHERE id = ?';
    db.query(sql, [taskId], (error, result) => {
      if (error) {
        return res.status(500).json({ message: 'Error deleting task', error });
      }
      res.status(200).json({ message: 'Task deleted' });
    });
  };