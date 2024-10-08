const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');
const User = require('../models/User');


router.get('/profile/:id',profileController.getUserProfile);


router.put('/profile/:id', profileController.updateUserProfile);


MediaSourceHandle.exports=router;


