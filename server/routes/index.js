
import express from "express";
import { getUsers, register, LogIn, Logout, feedback } from "../controllers/users.js";
import { verifyToken } from "../controllers/verification.js";
import { refreshToken } from "../controllers/refresh.js";
 
const router = express.Router();
 
router.get('/users', verifyToken, getUsers);
router.post('/users', register);
router.post('/login', LogIn);
router.post('/feedback', feedback);
router.get('/token', refreshToken);
router.delete('/logout', Logout);
 
export default router;
