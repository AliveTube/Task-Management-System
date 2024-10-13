const db = require("../config/dbConnection");
const jwt = require("jsonwebtoken")

const homeRoute = require("express").Router();

const homeController = require("../controllers/homeController");

homeRoute.get('/api/folders/:token', homeController.getFoldersFromDB);

module.exports = homeRoute;