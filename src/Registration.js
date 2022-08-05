import React, {useState} from 'react';
import './Registration.css';
import Axios from 'axios';
import NavBar from './NavBar';
import Register from './assets/Register.png'
import { Navigate, useNavigate } from "react-router-dom";

function Registration(){
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password,setPassword] = useState('');

    const addUser = () => {
        Axios.post('http://localhost:4000/register', {
            email: email,
            username: username,
            password: password,
        }).then(() => {
            console.log("success");
        });
    };

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
                <input  type="email"
                onChange={(e) => {
                    setEmail(e.target.value);
                    }} 
                    placeholder="Email"/>
            </div>
            <div className="username">
                <label className="form__label" for="username">Username: </label>
                <input className="form__input" type="text"            
                onChange={(e) => {
                    setUsername(e.target.value);
                    }}  
                    placeholder="Username"/>
            </div>
            <div className="password">
                <label className="form__label" for="password">Password: </label>
                <input className="form__input" type="password"                 
                onChange={(e) => {
                    setPassword(e.target.value);
                    }} 
                    placeholder="*******"/>
                    <div></div>
                <button onClick={() => {
                    addUser();
                    redirect();
                }}> Sign Up</button>
                <div></div>
        </div>
        </div>
</div>
</div>
</div>
    )
}

export default Registration;
