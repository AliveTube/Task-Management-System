const mysql = require("mysql2");

const Connetion = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'mysql2'
})

module.exports = Connetion;