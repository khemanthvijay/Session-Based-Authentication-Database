const path = require('path');
module.exports = function LoginHandler(req, res) {
    if(req.session.userid){
        return res.redirect('/dashboard');
    }
    res.sendFile(path.join(__dirname, 'pages', 'test-login.html'));
}