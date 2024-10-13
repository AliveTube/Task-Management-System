const loginRoute = require('express').Router();

const loginController = require("../controllers/loginController");

loginRoute.post('/api/login', loginController);

module.exports = loginRoute;