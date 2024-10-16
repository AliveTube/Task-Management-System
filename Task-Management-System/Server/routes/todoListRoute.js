const express = require('express');
const router = express.Router();

const {
    getAllTodoListsForFolder,
    createTodoList,
    deleteTodoList
} = require('../controllers/todoListController');

const {
    getTasksForTodoList,
    addTaskToTodoList
} = require('../controllers/taskController');

router.get('/api/todoLists/:folderId', getAllTodoListsForFolder);
router.post('/api', createTodoList);
router.delete('/api/todoLists/:todoListId', deleteTodoList);

router.get('/api/:uniqueId/tasks', getTasksForTodoList);
router.post('/api/:uniqueId/tasks', addTaskToTodoList);

module.exports = router;