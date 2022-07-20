import './login.css';
import React, {useState} from 'react';
import Axios from 'axios';

function Login(){

    const [UserOrEmail, setUserOrEmail] = useState('');
    const [password, setPassword] = useState('');
    //const [loginStatus, setloginStatus] = useState('');

    const userLogin = () => {
        Axios.post('http://localhost:3001/login', {
            UserOrEmail: UserOrEmail,
            password: password,
        }).then((response) => {
            console.log(response);
        });
    };

    return(
            <div className="form">
                <div className="form-body">
                    <div className="email">
                        <label className="form__label" for="email">E-mail/Username: </label>
                        <input  type="email" id="email" className="form__input" 
                        onChange={(e) => {
                            setUserOrEmail(e.target.value);
                            }} 
                            placeholder="E-mail/Username"/>
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
                    <button onClick={userLogin}>Login</button>
                </div>
            </div>      
        )       
    }
    export default Login;
