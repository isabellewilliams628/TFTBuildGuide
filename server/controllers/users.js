import users from "../models/users.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
 
export const getUsers = async(req, res) => {
    try {
        const users = await users.findAll({
            attributes:['ID','username','email']
        });
        res.json(users);
    } catch (error) {
        console.log(error);
    }
}
 
export const register = async(req, res) => {
    const {username, email, password} = req.body;
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);

    try {
        await users.create({
            username: username,
            email: email,
            password: hashPassword
        });
        res.json({msg: "User registered"});
    } catch (error) {
        console.log(error);
    }
}
 
export const LogIn = async(req, res) => {

    try {
        const user = await users.findAll({
            where:{
                username: req.body.username
            }
        });

          
        const match = await bcrypt.compare(req.body.password, user[0].password);
        
        if(!match) {
            return res.status(400).json({msg: "Wrong Password"});
        }
        const UserID = user[0].ID;
        const username = user[0].username;
        const email = user[0].email;
        const accessToken = jwt.sign({UserID, username, email}, process.env.ACCESS_TOKEN_SECRET,{
            expiresIn: '15s'
        });
        const refreshToken = jwt.sign({UserID, username, email}, process.env.REFRESH_TOKEN_SECRET,{
            expiresIn: '1d'
        });
        await users.update({refresh_token: refreshToken},{
            where:{
                ID: UserID
            }
        });
        res.cookie('refreshToken', refreshToken,{
            httpOnly: true,
            maxAge: 24*60*60*1000
        });
        res.json({ accessToken });
    } catch (error) {
        res.status(404).json({msg:"User not found"});
    }
}

 
export const Logout = async(req, res) => {
    const refreshToken = req.cookies.refreshToken;
    if(!refreshToken) return res.sendStatus(204);
    const user = await users.findAll({
        where:{
            refresh_token: refreshToken
        }
    });
    if(!user[0]) return res.sendStatus(204);
    const userId = user[0].id;
    await users.update({refresh_token: null},{
        where:{
            id: userId
        }
    });
    res.clearCookie('refreshToken');
    return res.sendStatus(200);
}