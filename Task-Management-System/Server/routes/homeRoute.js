const db = require("../config/dbConnection");
const jwt = require("jsonwebtoken")

const homeRoute = require("express").Router();

const homeController = require("../controllers/homeController");

homeRoute.get('/api/folders/:token', homeController.getFoldersFromDB);

homeRoute.post('/api/addFolder', (req, res) => {
    const {folderName, token} = req.body;
    const auth = jwt.verify(token, "admin");
    const { uniqueId } = auth;
    const startDate = new Date().toISOString().slice(0, 19).replace('T', ' ');
    db.query(`INSERT INTO folders (title, startDate, userId) VALUES ('${folderName}','${startDate}', '${uniqueId}')`,(err,data)=>{
        if(err) return res.json({message:"Error!"})
        return res.json({messege:"Folder added successfully!", folderId: data.insertId});
    })
});

module.exports = homeRoute;