const express = require('express');
const router = express.Router();
const { getAllUsers } = require('../controllers/userController');

router.get('/api/users', getAllUsers);

module.exports = router;