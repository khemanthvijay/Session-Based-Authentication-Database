const mysql = require ("mysql2");

const con = mysql.createConnection({ //i am using mysql so,mysql2
    host : "localhost", //for localhost or replace with your ip
    user : "root",  //default user or replace with actual user
    password : "your sql password", 
    database: "your database name"
  });
  
  con.connect((err)=>{
    if(err) {
        console.log(err);
    } else {
        console.log("connected to database");
       
    }
  });
  module.exports = con.promise();