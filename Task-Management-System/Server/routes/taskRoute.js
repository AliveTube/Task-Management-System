const express = require('express');
const router = express.Router();
const {
    getTasksByToDoListId,
    getTaskById,
    createTask,
    updateTask,
    deleteTask,
    getTasksByUserId
} = require('../controllers/taskController');

router.get('/api/tasks/:toDoListId', getTasksByToDoListId);
router.get('/api/allTasks/:uniqueId', getTasksByUserId);
router.get('/api/taskDetails/:uniqueId', getTaskById);

router.post('/api/tasks/:toDoListId', createTask);

router.put('/api/tasks/:uniqueId', updateTask);

router.delete('/api/tasks/:uniqueId', deleteTask);

module.exports = router;
