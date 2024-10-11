import LoginCSS from './Login.module.css'
import { Link } from 'react-router-dom'

export default function Login(){

    return(
        <>
            <div className={LoginCSS.Login}>
                <div className={LoginCSS.SideBar}></div>

                <div className={LoginCSS.RightSide}>
                    <form id='LoginFrom' className={LoginCSS.LoginForm}>
                        <h2>Login</h2>

                        <label htmlFor="email" className={LoginCSS.label}>Email</label>
                        <input type="email" id="email" name="email"
                            className={LoginCSS.input}/>

                        <label htmlFor="password" className={LoginCSS.label}>Password</label>
                        <input type="password" id="password" name="password" 
                        className={LoginCSS.input}/>

                        <input type="submit" id="LoginButton" className={LoginCSS.LoginButton} value="LOGIN" />
                        <Link to={'/register'} className={LoginCSS.navToRegister}>Create New Account</Link>
                    </form>
                </div>
            </div>
        </>
    )
}