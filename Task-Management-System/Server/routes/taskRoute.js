const express = require('express');
const router = express.Router();
const {
    getAllTasks,
    getTaskById,
    updateTaskStatus,
    createTask,
    updateTask,
    deleteTask
} = require('../controllers/taskController');

router.get('/api/tasks', getAllTasks);
router.get('/api/tasks/:uniqueId', getTaskById);
router.put('/api/tasks/:uniqueId', updateTaskStatus);
router.post('/api/tasks', createTask);
router.put('/api/tasks/:uniqueId', updateTask);
router.delete('/api/tasks/:uniqueId', deleteTask);

module.exports = router;
