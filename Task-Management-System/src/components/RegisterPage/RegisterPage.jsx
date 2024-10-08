import RegisterCSS from './Register.module.css'

export default function RegisterPage() {
    const handleRegisterSubmit= function(e){
        console.log("ss");
    }

    return <>
        <div className={RegisterCSS.registerPageContainer}>
            <div className={RegisterCSS.sideBar}></div>
            <div className={RegisterCSS.Container}>

                <form id='registerForm' className={RegisterCSS.registerForm}>
                    <h2 className={RegisterCSS.formHeader}>Register</h2>

                    <label htmlFor="email" className={RegisterCSS.label}>Email</label>
                    <input type="email" placeholder="user@example.com" id="email" name="email" className={RegisterCSS.input} />

                    <label htmlFor="userName" className={RegisterCSS.label}>User Name</label>
                    <input type="text" placeholder="username" id="userName" name="userName" className={RegisterCSS.input} />
                    <div className={RegisterCSS.passParentContainer}>
                        <div className={RegisterCSS.passwordContainer}>
                            <label htmlFor="password" className={RegisterCSS.label}>Password</label>
                            <input type="password" placeholder="Password" id="password" name="password" className={RegisterCSS.input} />
                        </div>
                        <div className={RegisterCSS.confirmPassContainer}>
                            <label htmlFor="confirmPass" className={RegisterCSS.label}>Confirm Password</label>
                            <input type="confirmPass" placeholder="Confirm Password" id="confirmPass" name="confirmPass" className={RegisterCSS.input} />
                        </div>
                    </div>
                    <input type="submit" id="RegisterButton" className={RegisterCSS.registerButton} value="REGISTER" onClick={handleRegisterSubmit()}/>
                    <div className={RegisterCSS.navToSignIn}>Already Have an Account?</div>
                </form>
            </div>
        </div>

    </>
}