import './Registration.css';
import axios from 'axios';
import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import NavBar from './NavBar.js';
import Register from './assets/Register.png';

const Registration = () => {

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const history = useNavigate();

    const addUser = async (e) => {
        e.preventDefault();
        try {
            await axios.post('https://team-tight-tactics-db.herokuapp.com/users', {
                username: username,
                email: email,
                password: password
            });

            history.push("/");
        } 
        catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }
    let navigate = useNavigate(); 
    const redirect = () =>{ 
      let path = `/login`; 
      navigate(path);
    }

    return(
        <div>
            <NavBar />
        <div className="Images">
            <img src={Register} className="image"></img>
        <div className="form" >
            <div className="form-body">
                <div className="email">
                    <label className="form__label" for="email">Email: </label>
                    <input  type="email" value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                        }} 
                        placeholder="Email"/>
                </div>
                <div className="username">
                    <label className="form__label" for="username">Username: </label>
                    <input className="form__input" type="text"   value = {username}         
                    onChange={(e) => {
                        setUsername(e.target.value);
                        }}  
                        placeholder="Username"/>
                </div>
                <div className="password">
                    <label className="form__label" for="password">Password: </label>
                    <input className="form__input" type="password" value={password}         
                    onChange={(e) => {
                        setPassword(e.target.value);
                        }} 
                        placeholder="*******"/>
                        <div></div>
                    <button onClick={(e) => {
                        addUser(e);
                        redirect();
                    }}> Sign Up</button>
                    
            </div>
            </div>
    </div>
    </div>
    </div>
    )

};
export default Registration;
