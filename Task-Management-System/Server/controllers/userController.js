const db = require('../config/dbConnection');

exports.getAllUsers = (req, res) => {
    try {
        db.query('SELECT * FROM Users' , (err, rows) => {
            if (err) {
                return res.status(500).send('Server Error');
            }
            res.json(rows);
        });
    } catch (err) {
        console.error('Error fetching users:', err.message);
        res.status(500).send('Server Error');
    }
};
