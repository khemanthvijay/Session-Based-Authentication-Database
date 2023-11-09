const express = require('express');
const sessions = require('express-session');
const path = require('path');

const HomeHandler = require('./handlers/home.js');
const DashboardHandler = require('./handlers/dashboard.js');
const LoginHandler = require('./handlers/login.js');
const ProcessLoginHandler = require('./handlers/process-login.js');
const CreateUserHandler = require('./handlers/createuser.js');


const app = express();

app.use(sessions({
    secret: "some secret",
    cookie: {
      maxAge: 1000 * 60 * 60  // 1 hour
    },
    resave: false,           // intially set to true
    saveUninitialized: false, //intially set to false
  }));
app.use(express.urlencoded({extended: true}));


app.get('/', HomeHandler);
app.post('/create-user',CreateUserHandler);
app.get('/dashboard', DashboardHandler);
app.get('/login', LoginHandler);
app.post('/process-login', ProcessLoginHandler);
app.get('/logout',(req,res)=>{
    req.session.destroy();
    res.redirect('/');
});
app.get('/newuser-page',(req,res)=>{
  res.sendFile(path.join(__dirname,'handlers', 'pages', 'createuser.html'));
});


app.listen(3000, () => console.log(`Server Running at port 3000`));