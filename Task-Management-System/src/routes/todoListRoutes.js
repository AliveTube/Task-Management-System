// routes/todoListRoutes.js
const express = require('express');
const router = express.Router();
const todoListController = require('../controllers/todoListController');

// Get all to-do lists
router.get('/', todoListController.getAllTodoLists);

// Create a new to-do list
router.post('/', todoListController.createTodoList);

module.exports = router;
