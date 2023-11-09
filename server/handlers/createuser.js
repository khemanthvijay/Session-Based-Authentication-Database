const con = require('./sqlconnection');

module.exports=function CreateUserHandler(req, res) {
   const {newusername,newpassword,newemail,newfirstname,newlastname} = req.body;
   let query_createUser = 'insert into user(username,password,firstName,lastName,email) values(?,?,?,?,?);'
   con.query(query_createUser,[newusername,newpassword,newfirstname,newlastname,newemail])
   .then(([response])=>{
    res.redirect('/login');
   })
   .catch((err) => {
    console.error('Error executing query:', err);
    if(err.code === 'ER_DUP_ENTRY')
    {
      return res.status(402).json({'message':'Duplicate username'});
    }
    return res.status(500).json({ 'message': 'Internal server error' });
  });
}

