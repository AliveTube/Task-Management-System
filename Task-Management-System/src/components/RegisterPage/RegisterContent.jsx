import { useEffect, useRef } from 'react'
import RegisterCSS from './Register.module.css'
import { Link } from 'react-router-dom';

export default function RegisterContent({ handleRegisterSubmit, handleRegisterInputChange }) {

    const formElem = useRef();
    useEffect(() => {
        if (formElem.current) {
            formElem.current.addEventListener('submit', function (event) {
                handleRegisterSubmit(event);
            });
        }
        return () => {
            if (formElem.current) {
                formElem.current.removeEventListener('submit', function (event) {
                    handleRegisterSubmit(event);
                });
            }
        };
    }, []);


    return <>
        <div className={RegisterCSS.registerPageContainer}>
            <div className={RegisterCSS.sideBar}></div>
            <div className={RegisterCSS.Container}>
                <form id='registerForm' className={RegisterCSS.registerForm} ref={formElem}>
                    <h2 className={RegisterCSS.formHeader}>Register</h2>

                    <label htmlFor="email" className={RegisterCSS.label}>Email</label>
                    <input type="email" placeholder="user@example.com" id="email" name="email"
                        className={RegisterCSS.input} onChange={handleRegisterInputChange} required />

                    <label htmlFor="userName" className={RegisterCSS.label}>User Name</label>
                    <input type="text" placeholder="Enter your username" id="userName" name="userName"
                        className={RegisterCSS.input} onChange={handleRegisterInputChange} required />

                    <div className={RegisterCSS.passParentContainer}>

                        <div className={RegisterCSS.passwordContainer}>
                            <label htmlFor="password" className={RegisterCSS.label}>Password</label>
                            <input type="password" placeholder="Create a strong password" id="password" name="password" 
                            className={RegisterCSS.input} onChange={handleRegisterInputChange} required />
                        </div>

                        <div className={RegisterCSS.confirmPassContainer}>
                            <label htmlFor="confirmPass" className={RegisterCSS.label}>Confirm Password</label>
                            <input type="password" placeholder="Re-enter your password" id="confirmPass" name="confirmPass" 
                            className={RegisterCSS.input} onChange={handleRegisterInputChange} required />
                        </div>

                    </div>

                    <input type="submit" id="RegisterButton" className={RegisterCSS.registerButton} value="REGISTER" />
                    <Link to={'/login'} className={RegisterCSS.navToSignIn}>Already Have an Account?</Link>
                </form>
            </div>
        </div>
    </>
}