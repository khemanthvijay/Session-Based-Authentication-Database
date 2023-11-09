const path = require('path');
module.exports = function HomeHandler(req, res) {
    res.sendFile(path.join(__dirname, 'pages', 'home.html'));
}