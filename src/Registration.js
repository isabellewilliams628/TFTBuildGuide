import './Registration.css';
import axios from 'axios';
import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import NavBar from './NavBar.js';
import Register from './assets/Register.png';
/*import { isEmail } from "validator";


const required = (value) => {
    if (!value) {
      return (
        <div className="invalid-feedback d-block">
          All fields required!
        </div>
      );
    }
  };
  
  const validEmail = (value) => {
    if (!isEmail(value)) {
      return (
        <div className="invalid-feedback d-block">
          Please enter a valid email.
        </div>
      );
    }
  };
  
  const vusername = (value) => {
    if (value.length < 3 || value.length > 20) {
      return (
        <div className="invalid-feedback d-block">
          The username must be between 3 and 20 characters.
        </div>
      );
    }
  };
  
  const vpassword = (value) => {
    if (value.length < 6 || value.length > 40) {
      return (
        <div className="invalid-feedback d-block">
          The password must be between 6 and 40 characters.
        </div>
      );
    }
  };
*/
const Registration = () => {

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useNavigate();

    const addUser = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:4000/users', {
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
