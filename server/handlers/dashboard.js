const path = require('path');
module.exports = function DashboardHandler(req, res) {
    if(!req.session.userid){
        return res.redirect('/login');
    }
    res.sendFile(path.join(__dirname, 'pages', 'dashboard.html'));
}