const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const bcrypt = require('bcrypt');
const saltRound = 10;
const jwt = require('jsonwebtoken');
const app = express();

app.use(express.json());
app.use(
    cors({
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST"],
        credentials: true,
    })
);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
    session({
        key: "userID", // may need to update these methods
        secret: "subscribe",
        resave: false,
        saveUninitialized: false,
        cookie: {
            expires: 60*60*24,
        },
    })
);


const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "rdcfgvjhlbni;P01",
    database: "team_fight_tactics"
  });




app.post('/register', (req,res) => {

    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;

    bcrypt.hash(password, saltRound, (err, hash) => {
        if(err){
            console.log(err)
        }
        con.execute(
            "INSERT INTO users (email, username, password) VALUES (?,?,?)",
            [email, username, hash],
            (err, result) => {
                console.log(err)
            } 
        );
    })
});

const verifyJWT = (req, res, next) => {
    const token = req.headers["x-access-token"];

    if (!token) {
        res.send("token needed");
    } else {
        jwt.verify(token, "jwtSecret", (err, decoded) => {
            if (err) {
                console.log(err);
                res.json({ auth: false, message: "failed to authenticate user"});
            } else {
                req.userId = decoded.id;
                next();
            }
        });
    }
};
app.get('/isUserAuth', verifyJWT , (req, res) => {
    res.send("User authentication successful")
})
app.get("/login", (req, res) => {
    if (req.session.user) {
      res.send({ loggedIn: true, user: req.session.user });
    } else {
      res.send({ loggedIn: false });
    }
});

app.post('/login', (req,res)=> {

    const UserOrEmail = req.body.UserOrEmail;
    const password = req.body.password;

    con.execute(
        'SELECT * FROM users WHERE email = ? OR username = ?', 
    [UserOrEmail],
    (err,result) => {
        if(err) {
            res.send({err: err});
        } 
        if (result) {
            bcrypt.compare(password, result[0].password, (error, response) => {
                if (response) {
                    const id = result[0].id
                    const token = jwt.sign({id}, "jwtSecret", {
                        expiresIn: 300,
                    })
                    req.session.user = result;

                    console.log(req.session.user);
                    res.json({auth: true, token: token, result: result});
                } else{
                    res.json({auth: false, message: "Wrong username/email or password"}); 
                }
            })
        } else {
            res.json({auth: false, message: "User does not exist"});
        }
    });
});

app.listen(4000, () => {
    console.log("server is running!");
});

//module.exports = con;
