import './login.css';
import React, {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import loginPg from './assets/loginPg.png'
import TLogo from './assets/TLogo.png'
import NavBar from './NavBar.js';

const Login = (req,response) => {

    const initialVals = {
        UserOrEmail: '',
        password: ''
      };

    const [userInfo, setUserInfo] = useState(initialVals);
    
    const [status, setStatus] = useState();

    const onFormUpdate = (category, value) => {
        setUserInfo({
          ...userInfo,
          [category]: value
        });
      };

    const userLogin = async (creds) => {
        creds.preventDefault();

        response = await fetch("https://team-tight-tactics-db.herokuapp.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(userInfo),
      });
      let result = await response.json();
      setUserInfo(initialVals);
        
      if (result.code == 200) {
        setStatus({ succes: true, message: 'Message sent successfully' });
      } else {
        setStatus({ succes: false, message: 'Something went wrong, please try again later.' });
      }

  };
          let navigate = useNavigate(); 
            const redirect = () =>{ 
            let path = `/Account`; 
            navigate(path);
        }
        sessionStorage.setItem('user', JSON.stringify(userInfo.UserOrEmail));
    return(
        <div>
        <NavBar />
      <div className="Images">
      <img src={TLogo} className="image1"></img>
      <img src={loginPg} className="image2"></img>
      <div className="form">
      <div className='text'>
      <label> Sign In </label>
      </div>
          <form onSubmit={userLogin} className="form-body">
              <div className="email">
                  <label className="form__label" >E-mail/Username: </label>
                  <input className="form__input" type="text" value={userInfo.UserOrEmail} placeholder="Email/Username:" onChange={(e) => onFormUpdate('UserOrEmail', e.target.value)} /> 
              </div>
              <div className="password">
              <label className="form__label" >Password: </label>
              <input className="form__input" type="password" value={userInfo.password} placeholder="Password:" onChange={(e) => onFormUpdate('password', e.target.value)} />
                  <div>
              <button type="button" className='button'
              onClick={() => {
                  redirect();
              }}> Sign In</button>
              </div>
      </div>
      </form>
      </div>   
      </div>  
      </div>
    )
}
    export default Login;
