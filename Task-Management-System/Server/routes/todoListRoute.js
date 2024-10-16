const express = require('express');
const router = express.Router();

const {
    getAllTodoListsForFolder,
    createTodoList,
    deleteTodoList,
    editTodoList
} = require('../controllers/todoListController');

const {
    getTasksForTodoList,
    addTaskToTodoList
} = require('../controllers/taskController');

router.get('/api/todoLists/:folderID', getAllTodoListsForFolder);
router.post('/api/todoLists', createTodoList);
router.delete('/api/todoLists/:todoListId', deleteTodoList);
router.post('/api/editTodoList', editTodoList)

router.get('/api/:uniqueId/tasks', getTasksForTodoList);
router.post('/api/:uniqueId/tasks', addTaskToTodoList);


module.exports = router;