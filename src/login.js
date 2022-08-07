import './login.css';
import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import loginPg from './assets/loginPg.png'
import TLogo from './assets/TLogo.png'
import NavBar from './NavBar.js';

const Login = () => {

    const [UserOrEmail, setUserOrEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useNavigate();
    const [msg, setMsg] = useState('');

    const userLogin = async (creds) => {
      creds.preventDefault();
      try {
        await axios.get('http://localhost:4000/login', {
            email: email,
            password: password
        });
        history.push("/account");
    } catch (error) {
        if (error.response) {
            setMsg(error.response.data.msg);
            
        } else {
            console.log({UserOrEmail}, "logged in")
        }
    }
    localStorage.setItem('UserOrEmail', response.data)
    console.log(response.data)
  };
          let navigate = useNavigate(); 
            const redirect = () =>{ 
            let path = `/Account`; 
            navigate(path);
        }
    return(
            <div>
              <NavBar />
            <div className="Images">
            <img src={TLogo} className="image1"></img>
            <img src={loginPg} className="image2"></img>
            <div className="form">
                <div className="form-body">
                    <div className="email">
                        <label className="form__label" for="email">E-mail/Username: </label>
                        <input  type="text" className="form__input" value = {UserOrEmail}
                        onChange={(e) => {
                            setUserOrEmail(e.target.value);
                            }} 
                            placeholder="E-mail/Username"/>
                    </div>
                    <div className="password">
                        <label className="form__label" for="password">Password: </label>
                        <input className="form__input" type="password" value = {password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                            }} 
                        placeholder="*******"/>
                    </div>
                </div>
                <div class="footer">
                <button onClick={(creds) => {
                userLogin(creds);
                redirect();
            }}> 
            Log In</button>
                </div>
            </div>   
            </div>  
            </div>
        )       
    }
    export default Login;
