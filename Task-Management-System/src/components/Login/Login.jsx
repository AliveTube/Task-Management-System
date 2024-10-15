import { useRef, useState } from 'react';
import LoginCSS from './Login.module.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setToken } from '../../ReduxSlices/TokenSlice';

export default function Login() {

    let [emailExist, setEmailExist] = useState(true);
    let [correctPassword, setCorrectPassword] = useState(true);
    let user = useRef({ email: "", password: "" });
    let navigate = useNavigate();
    const dispatch = useDispatch();

    const submit = function (e) {
        e.preventDefault();
        e.target.LoginButton.blur();
        axios.post("http://localhost:3000/api/login", user.current)
            .then(response => {
                if (response.data.emailNotExist) {
                    setCorrectPassword(true);
                    setEmailExist(false);
                }
                else if (response.data.IncorrectPassword) {
                    setEmailExist(true);
                    setCorrectPassword(false);
                }
                else {
                    setEmailExist(true);
                    setCorrectPassword(true);
                    let token = response.data.token;
                    dispatch(setToken(token));
                    localStorage.setItem('token', token);
                    navigate('/home');
                }
            })
            .catch(error => {
                console.log("Error", error);
            })
    };

    const handelChange = function (e) {
        user.current = { ...user.current, [e.target.name]: e.target.value };
    }

    return (
        <>
            <div className={LoginCSS.Login}>
                <div className={LoginCSS.SideBar}></div>

                <div className={LoginCSS.RightSide}>
                    <form id='LoginFrom' className={LoginCSS.LoginForm} onSubmit={submit}>

                        <h2>Login</h2>

                        {/* Email ===============================*/}
                        <label htmlFor="email" className={LoginCSS.label}>Email</label>
                        <input type="email" id="email" name="email" placeholder="Enter your email"
                            className={emailExist ? LoginCSS.inputAccepted : LoginCSS.inputNotAccepted} onChange={handelChange} />
                        <span className={emailExist ? LoginCSS.messageDisabled : LoginCSS.messageEnabled}>
                            The email you entered does not exist. Please check and try again.</span>

                        {/* Password =============================*/}
                        <label htmlFor="password" className={LoginCSS.label}>Password</label>
                        <input type="password" id="password" name="password" placeholder="Enter your password"
                            className={correctPassword ? LoginCSS.inputAccepted : LoginCSS.inputNotAccepted} onChange={handelChange} />
                        <span className={correctPassword ? LoginCSS.messageDisabled : LoginCSS.messageEnabled}>
                            Incorrect password. Please try again.</span>

                        <input type="submit" id="LoginButton" className={LoginCSS.LoginButton} value="LOGIN" />
                        <Link to={'/register'} className={LoginCSS.navToRegister}>Create New Account</Link>
                    </form>
                </div>
            </div>
        </>
    )
}