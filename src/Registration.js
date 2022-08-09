import './Registration.css';
import axios from 'axios';
import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import NavBar from './NavBar.js';
import Register from './assets/Register.png';

const Registration = () => {

    const initialVals = {
        email: '',
        username: '',
        password: ''
      };

    const [userInfo, setUserInfo] = useState(initialVals);
    const history = useNavigate();

    const onFormUpdate = (category, value) => {
        setUserInfo({
          ...userInfo,
          [category]: value
        });
      };

    const addUser = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:3000/users', {
                email: email,
                username: username,
                password: password
            });
            setUserInfo(initialVals);
            history.push("/");
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
                <div className='text'>
                    <label> Sign Up </label>
                </div>
                    <form onSubmit={addUser} className="form-body">
                        <div className="email">
                            <label className="form__label" >Email: </label>
                            <input  type="email" value={userInfo.email} placeholder="Email:" onChange={(e) => onFormUpdate('email', e.target.value)} />
                        </div>
                        <div className="username">
                            <label className="form__label" >Username: </label>
                            <input className="form__input" type="text"   value={userInfo.username} placeholder="Username:" onChange={(e) => onFormUpdate('username', e.target.value)} />        
                        </div>
                        <div className="password">
                            <label className="form__label" >Password: </label>
                            <input className="form__input" type="password" vvalue={userInfo.password} placeholder="Password:" onChange={(e) => onFormUpdate('password', e.target.value)} />       
                        </div>
                        <div>
                            <button type="submit" className='button'
                                onClick={() => {
                                    addUser();
                            }}> Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )

};
export default Registration;
