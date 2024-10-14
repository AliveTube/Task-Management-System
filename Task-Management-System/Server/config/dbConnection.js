const mysql = require("mysql2");

const Connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'mysql2'
})

module.exports = Connection;