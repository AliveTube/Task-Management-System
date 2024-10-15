// routes/todoListRoutes.js
const express = require('express');
const router = express.Router();
const todoListController = require('../controllers/todoListController');
const taskController=require('../../Server/controllers/taskController');

// Get all to-do lists
router.get('/folder/:folderId', todoListController.getAllTodoListsForFolder);

// Create a new to-do list
router.post('/', todoListController.createTodoList);

//get task for a specific to do list 
router.get('/:id/tasks', taskController.getTasksForTodoList);

//add a task for a specific todo list
router.post('/:id/tasks',taskController.addTaskToTodoList);


module.exports = router;
