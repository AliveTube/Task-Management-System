const registerRoute = require("express").Router();

const registerController = require("../controllers/registerController");

registerRoute.post('/api/register', registerController);

module.exports = registerRoute;