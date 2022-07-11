import './login.css';
import React, {useState} from 'react';

function Login(){
    return(
            <div className="form">
                <div className="form-body">
                    <div className="email">
                        <label className="form__label" for="email">E-mail/Username: </label>
                        <input  type="email" id="email" className="form__input" placeholder="E-mail/Username"/>
                    </div>
                    <div className="password">
                        <label className="form__label" for="password">Password: </label>
                        <input className="form__input" type="password"  id="password" placeholder="Password"/>
                    </div>
                </div>
                <div class="footer">
                    <button type="submit" class="btn">Login</button>
                </div>
            </div>      
        )       
    }
    export default Login;
