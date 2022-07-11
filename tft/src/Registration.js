import React, {useState} from 'react';
import './Registration.css'

function Registration(){
return(
        <div className="form">
            <div className="form-body">
                <div className="email">
                    <label className="form__label" for="email">E-mail: </label>
                    <input  type="email" id="email" className="form__input" placeholder="E-mail"/>
                </div>
                <div className="username">
                    <label className="form__label" for="username">Username: </label>
                    <input className="form__input" type="text" id="username" placeholder="Username"/>
                </div>
                <div className="password">
                    <label className="form__label" for="password">Password: </label>
                    <input className="form__input" type="password"  id="password" placeholder="Password"/>
                </div>
            </div>
            <div class="footer">
                <button type="submit" class="btn">Sign Up</button>
            </div>
        </div>      
    )       
}
export default Registration;