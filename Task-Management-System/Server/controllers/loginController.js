const db = require("../config/dbConnection");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const loginController = (req, res) => {
    const { email, password } = req.body;
    db.query(`select * from users where email = '${email}'`, (err, data) => {
        if (err) return res.json({ message: "Error!" })
        else if (!data.length) {
            return res.json({ message: "The email you entered does not exist. Please check and try again.", emailNotExist: true })
        }
        else {
            const isMatch = bcrypt.compareSync(password, data[0].password)
            if (isMatch) {
                const token = jwt.sign(data[0], "admin");
                return res.json({ message: "Login successful! Welcome back!", token });
            }
            else {
                return res.json({ message: "Incorrect password. Please try again.", IncorrectPassword: true });
            }
        }
    })
};

module.exports = loginController;