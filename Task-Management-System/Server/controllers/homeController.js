const db = require("../config/dbConnection");
const jwt = require("jsonwebtoken")

const getFoldersFromDB = (req, res) => {
    const token = req.params.token;
    const auth = jwt.verify(token, "admin");
    const { uniqueId } = auth;
    db.query(`select * from folders where userID = '${uniqueId}'`,(err,data)=>{
        if(err) return res.json({message:"Error!"})
        return res.json(data);
    })
}

module.exports={
    getFoldersFromDB
}