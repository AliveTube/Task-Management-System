import { useRef } from 'react';
import LoginCSS from './Login.module.css'
import { Link } from 'react-router-dom'

export default function Login(){

    let user = useRef({Email:"",Password:""});

    const submit = function(e){
        e.preventDefault();
        //seraching in the database and making the token
    };

    const handelChange = function(e){
        user.current = {...user.current,[e.target.name]: e.target.value};
    }

    return(
        <>
            <div className={LoginCSS.Login}>
                <div className={LoginCSS.SideBar}></div>

                <div className={LoginCSS.RightSide}>
                    <form id='LoginFrom' className={LoginCSS.LoginForm} onSubmit={submit}>
                        <h2>Login</h2>

                        <label htmlFor="email" className={LoginCSS.label}>Email</label>
                        <input type="email" id="email" name="Email"
                            className={LoginCSS.input} onChange={handelChange}/>

                        <label htmlFor="password" className={LoginCSS.label}>Password</label>
                        <input type="password" id="password" name="Password" 
                            className={LoginCSS.input} onChange={handelChange}/>

                        <input type="submit" id="LoginButton" className={LoginCSS.LoginButton} value="LOGIN" />
                        <Link to={'/register'} className={LoginCSS.navToRegister}>Create New Account</Link>
                    </form>
                </div>
            </div>
        </>
    )
}