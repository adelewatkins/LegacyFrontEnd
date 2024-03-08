import React from 'react';
import './Login.css';
// import { defaultMethod } from 'react-router-dom/dist/dom';
import { FaRegUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import e from 'cors';


const Login = () => {
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/Home")
    }



    return (

        <div className='wrapper'>
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>

                <div className="input-box">
                    <input type="text" placeholder='Username' required /><FaRegUser className='icon' />
                </div>
                <div className="input-box">
                    <input type="password" placeholder='Password' required /><FaLock className='icon' />
                </div>
                <div className="remember-forgot">
                    <label><input type="checkbox" />Remember me </label>
                    <a href='https://http.dog/403.jpg'>Forgot password?</a>
                </div>
                {/* <button onClick={() => */}
                <button type="submit">Login</button>
                {/* navigate("/home")}type ="submit">Login</button> */}

                <div className="register-link">
                    <p>Don't have an account?  <a href="#"></a></p>

                    <div className="input-box">
                        <input type="register" placeholder='Register' />
                    </div>
                </div>
            </form>
        </div>
    );


}

export default Login;