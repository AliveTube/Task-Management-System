const express = require('express');
const router = express.Router();
const {
    getAllTasks,
    getTaskById,
    updateTaskStatus
} = require('../controllers/taskController');

router.get('/api/tasks', getAllTasks);
router.get('/api/tasks/:uniqueId', getTaskById);
router.put('/api/tasks/:uniqueId', updateTaskStatus);

module.exports = router;
