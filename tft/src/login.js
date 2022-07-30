import './login.css';
import React, {useState} from 'react';
import Axios from 'axios';
import { Navigate, useNavigate } from "react-router-dom";

function Login(){

    const [UserOrEmail, setUserOrEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginStatus, setloginStatus] = useState(false);

    Axios.defaults.withCredentials = true;
    const userLogin = () => {
        Axios.post('http://localhost:4000/login', {
            UserOrEmail: UserOrEmail,
            password: password,
            loginStatus: loginStatus,
        }).then((response) => {
            if (!response.data.auth) {
                setloginStatus(false);
              } else {
                console.log(response.data);
                localStorage.setItem("token", response.data.token)
                setloginStatus(true);
              }
            });
          };

          const userAuthenticeted = () => {
            Axios.get("http://localhost:4000/isUserAuth", {
              headers: {
                "x-access-token": localStorage.getItem("token"),
              },
            }).then((response) => {
              console.log(response);
            }); 
          };

          let navigate = useNavigate(); 
            const routeChange = () =>{ 
            let path = `/Account`; 
            navigate(path);
        }

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
                <button onClick={() => {
                userLogin();
                routeChange();
            }}> 
            Log In</button>
                </div>
                {loginStatus && (
                    <button onClick={userAuthenticeted}>Check if authenticated</button>
            )}
            </div>      
        )       
    }
    export default Login;
