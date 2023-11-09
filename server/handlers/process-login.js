const con = require('./sqlconnection');

module.exports = function ProcessLoginHandler(req, res) {
    const { username, password } = req.body;
    let query_verifyUser = 'SELECT username, password FROM user WHERE username=?';
    con.query(query_verifyUser, [username])
    .then(([response]) => {
        if(!response[0] || response[0].password!==password){
            return res.status(401).json({'message':'Invalid Username or password'});
        }
    req.session.userid = req.body.username;
    res.redirect('/dashboard');
    })
    .catch((err) => {
        console.error('Error executing query:', err);
        return res.status(500).json({ 'message': 'Internal server error' });
    });
}