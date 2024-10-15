const connectDB = require('../config/db');  // Import the database connection

//TODO specify the actuall used db 
// const mysql = require('mysql2/promise');


exports.getUserProfile= async(req,res)=>{
    const userId= req.params.id;
    try {
        const db = await connectDB();

        const [rows]= await db.execute('SELECT * FROM users where uniqueId = ?',[userId]);
        if (rows.length==0){
                return res.status(404).json({message: 'user not found'});
        }                <Route path=":id/tasks" element={<TodoDetail />} />
        res.json(rows[0]);
    } catch (error) {
        console.error('error fetching user profile ', error);
        res.status(500).json({message: 'server error'});
    }
};
 
exports.updateUserProfile =async (req,res)=>{
    const userId=req.param.id;
    const{name, email,phone, bio, profilePicture}=req.body;

    try {
        const db = await connectDB();

        const[result]= await db.execute(
            'UPDATE users SET name = ?, email = ?,phone = ?,bio = ?, profile_picture = ? WHERE id = ?',
            [name,email,phone,bio,profilePicture,userId]
        );
        if(result.affectedRows === 0){
            return res.status(404).json({message:'user not found'});
        }
        res.json({message: 'User updated successfully!' });
    } catch (error) {
        console.error('error updating user profile: ',error);
        res.status(500).json({message: 'server error '});
    }
};