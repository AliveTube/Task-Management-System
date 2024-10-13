const db = require('../config/dbConnection');
const bcrypt = require('bcryptjs');

const registerController = (req, res) => {
    const { username, email, password } = req.body;
    if (username.length && email.length && password.length) {
        const hashedPassword = bcrypt.hashSync(password, 7);
        db.query(`select * from users where email = '${email}'`, (err, data) => {
            if (err) return res.json({ message: 'Error occurs searching for used Email!' });
            if (data.length) {
                return res.json({ error: "The Email is Already Used" });
            }
            else {
                db.query(`insert into users (username , email, password) values ('${username}','${email}', '${hashedPassword}')`, (err, data) => {
                    if (err) return res.json({ message: 'Error occurs iserting Data into Database!' });
                    return res.json({ message: 'User Signed up successfully!' });
                })
            }
        })
    }
    else {
        return res.json({ message: 'Fields Empty!' });
    }
}

module.exports = registerController;