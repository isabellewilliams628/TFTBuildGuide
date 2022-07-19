import React, {useState} from 'react';
import './Registration.css';
import Axios from 'axios';
import NavBar from './NavBar';

function Registration(){
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password,setPassword] = useState('');

    const addUser = () => {
        Axios.post('http://localhost:3001/register', {
            email: email,
            username: username,
            password: password,
        }).then(() => {
            console.log("success");
        });
    };

    return(
        <div className="form">
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
                    placeholder="Password"/>
            </div>
        </div>
        <div class="footer">
            <button onClick={addUser} >Sign Up</button>
        </div>
    </div>
    )
}

export default Registration;
