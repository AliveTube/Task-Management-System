const express = require('express');
const router = express.Router();

const {
    getUserProfile,
    updateUserProfile
} = require('../controllers/profileController');

router.get('/api/profile/:uniqueId', getUserProfile);
router.put('/api/profile/:uniqueId', updateUserProfile);

module.exports = router;