const db = require("../config/dbConnection");
const jwt = require("jsonwebtoken")

const homeRoute = require("express").Router();

const homeController = require("../controllers/homeController");

homeRoute.get('/api/folders/:uniqueId', homeController.getFoldersFromDB);

homeRoute.post('/api/addFolder', (req, res) => {
    const { folderName, token } = req.body;
    if (folderName && token) {
        const auth = jwt.verify(token, "admin");
        const { uniqueId } = auth;
        const startDate = new Date().toISOString().slice(0, 19).replace('T', ' ');
        db.query(`INSERT INTO folders (title, startDate, userId) VALUES ('${folderName}','${startDate}', '${uniqueId}')`, (err, data) => {
            if (err) return res.json({ message: "Error!" })
            return res.json({ messege: "Folder added successfully!", folderId: data.insertId });
        })
    }
    else return res.json({ message: "The Folder Name is Empty!" })
});

homeRoute.delete('/api/deleteFolder/:folderID', (req, res) => {
    const folderID = req.params.folderID;
    db.query(`select * from folders where uniqueId = ${folderID}`, (err, data) => {
        if (err) return res.json({ message: "Error!" })
        if (!data.length) return res.json({ message: "This Folder Doesn't Exist!" })
        else {
            db.query(`delete from folders where uniqueId = ${folderID}`, (err, data) => {
                if (err) return res.json({ message: "Error!" })
                return res.json({ message: "Folder Deleted succesfully!" })
            });
        }
    })

});

homeRoute.post('/api/editFolder', (req, res) => {
    const { folderID, newTitle } = req.body;
    if (!newTitle.length) return res.json({ message: "The Folder Name is Empty!" });
    else {
        db.query(`select * from folders where uniqueId = '${folderID}'`, (err,data)=>{
            if(err) return res.json({message:"Error!"});
            else if(!data.length) return res.json({message:"The Folder doesn't exist!"});
            else{
                db.query(`update folders set title = '${newTitle}' where uniqueId = '${folderID}'`,(err,data)=>{
                    if(err) return res.json({message:"Error!"});
                    return res.json({message:"Folder title updated successfully:"});
                })
            }
        })
    }
})

module.exports = homeRoute;