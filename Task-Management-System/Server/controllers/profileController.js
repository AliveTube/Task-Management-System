const db = require('../config/dbConnection');  // Import the database connection

exports.getUserProfile = (req, res) => {
    const { id: userId } = req.params;

    try {
        db.query('SELECT * FROM users WHERE uniqueId = ?', [userId], (err, rows) => {
            if (err) return res.status(500).send('Server Error');
            if (rows.length === 0) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json(rows[0]);
        });
    } catch (err) {
        console.error('Error fetching user profile:', err.message);
        res.status(500).send('Server Error');
    }
};

exports.updateUserProfile = (req, res) => {
    const { id: userId } = req.params;
    const { name, email } = req.body;

    try {
        const sqlQuery = `
            UPDATE users
            SET username = ?, email = ?
            WHERE uniqueId = ?
        `;

        db.query(sqlQuery, [name, email, userId], (err, result) => {
            if (err) return res.status(500).send('Server Error');
            if (result.affectedRows === 0) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json({ message: 'User updated successfully!' });
        });
    } catch (err) {
        console.error('Error updating user profile:', err.message);
        res.status(500).send('Server Error');
    }
};