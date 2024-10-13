import { useSelector } from 'react-redux';
import RegisterCSS from './Register.module.css'
import { Link } from 'react-router-dom';
import { useRef } from 'react';

export default function RegisterContent(
    { handleRegisterSubmit, handleRegisterInputChange, handleInputValidation, validationMessage, formElem, EmailNotUsedBefore }) {

    let isValidInput = useSelector((state) => state.RegisterData.isValidInput);

    return <>
        <div className={RegisterCSS.registerPageContainer}>
            <div className={RegisterCSS.sideBar}></div>
            <div className={RegisterCSS.Container}>

                <form id='registerForm' className={RegisterCSS.registerForm} onSubmit={handleRegisterSubmit} ref={formElem}>
                    <h2 className={RegisterCSS.formHeader}>Register</h2>

                    {/* Email Input Box =================*/}
                    <label htmlFor="email" className={RegisterCSS.label}>Email</label>
                    <input type="email" placeholder="user@example.com" id="email" name="email"
                        className={(isValidInput.email && EmailNotUsedBefore) ? RegisterCSS.inputAccepted : RegisterCSS.inputNotAccepted}
                        onChange={handleRegisterInputChange} onBlur={handleInputValidation} required />
                    <span className={(isValidInput.email && EmailNotUsedBefore) ? RegisterCSS.messageDisabled : RegisterCSS.messageEnabled}>
                        {validationMessage.email}</span>

                    {/* User Name Input Box ===============*/}
                    <label htmlFor="userName" className={RegisterCSS.label}>User Name</label>
                    <input type="text" placeholder="Enter your username" id="userName" name="userName"
                        className={isValidInput.userName ? RegisterCSS.inputAccepted : RegisterCSS.inputNotAccepted}
                        onChange={handleRegisterInputChange} onBlur={handleInputValidation} required />
                    <span className={isValidInput.userName ? RegisterCSS.messageDisabled : RegisterCSS.messageEnabled}>
                        {validationMessage.userName}</span>

                    <div className={RegisterCSS.passParentContainer}>
                        {/* Password Name Input Box ========== */}
                        <div className={RegisterCSS.passwordContainer}>
                            <label htmlFor="password" className={RegisterCSS.label}>Password</label>
                            <input type="password" placeholder="Create a strong password" id="password" name="password"
                                className={isValidInput.password ? RegisterCSS.inputAccepted : RegisterCSS.inputNotAccepted}
                                onChange={handleRegisterInputChange} onBlur={handleInputValidation} required />
                            <span className={isValidInput.password ? RegisterCSS.messageDisabled : RegisterCSS.messageEnabled}>
                                {validationMessage.password}</span>
                        </div>

                        {/* Confirm Password Input Box ============ */}
                        <div className={RegisterCSS.confirmPassContainer}>
                            <label htmlFor="confirmPass" className={RegisterCSS.label}>Confirm Password</label>
                            <input type="password" placeholder="Re-enter your password" id="confirmPass" name="confirmPass"
                                className={isValidInput.confirmPass ? RegisterCSS.inputAccepted : RegisterCSS.inputNotAccepted}
                                onChange={handleRegisterInputChange} onBlur={handleInputValidation} required />
                            <span className={isValidInput.confirmPass ? RegisterCSS.messageDisabled : RegisterCSS.messageEnabled}>
                                {validationMessage.confirmPass}</span>
                        </div>

                    </div>
                    {/* Submit Button ============= */}
                    <input type="submit" id="RegisterButton" className={RegisterCSS.registerButton} value="REGISTER" />
                    <Link to={'/login'} className={RegisterCSS.navToSignIn}>Already Have an Account?</Link>
                </form>
            </div>
        </div>
    </>
}