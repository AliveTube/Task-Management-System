const express = require('express');
const router = express.Router();

const {
    getAllTodoListsForFolder,
    createTodoList,
    deleteTodoList,
    editTodoList
} = require('../controllers/todoListController');

const {
    getTasksByToDoListId,
    addTaskToTodoList
} = require('../controllers/taskController');

router.get('/api/todoLists/:folderID', getAllTodoListsForFolder);
router.get('/api/:uniqueId/tasks', getTasksByToDoListId);

router.post('/api/todoLists', createTodoList);
router.post('/api/editTodoList', editTodoList)
router.post('/api/:uniqueId/tasks', addTaskToTodoList);

router.delete('/api/todoLists/:todoListId', deleteTodoList);


module.exports = router;