const express = require('express');
const cors = require('cors');
const app = express();
const mysql = require('mysql2');
app.use(express.json());
app.use(cors());

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "rdcfgvjhlbni;P01",
  database: "team_fight_tactics"
});


app.post('/register', (req,res)=> {

    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;

    con.query('INSERT INTO users (email, username, password) VALUES (?,?,?)', 
    [email, username, password],
    (err,result) => {
        if(err) {
            console.log(err);
        } else {
            res.send("user added!");
        }
    });
});

app.post('/login', (req,res)=> {

    const UserOrEmail = req.body.UserOrEmail;
    const password = req.body.password;

    con.query('SELECT * FROM users WHERE email = ? OR username = ? AND password = ?', 
    [UserOrEmail, password],
    (err,result) => {
        if(err) {
            res.send({err: err});
        } else {
            res.send("user logged in!");
        }
    });
});

app.listen(3001, () => {
    console.log("server is running!");
});

module.exports = con;
