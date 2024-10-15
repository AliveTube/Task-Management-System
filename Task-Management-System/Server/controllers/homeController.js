const db = require("../config/dbConnection");
const jwt = require("jsonwebtoken")

const getFoldersFromDB = (req, res) => {
    const uniqueId = req.params.uniqueId;
    db.query(`select * from folders where userID = '${uniqueId}'`,(err,data)=>{
        if(err) return res.json({message:"Error!"})
        return res.json(data);
    })
}

module.exports={
    getFoldersFromDB
}