import NavBarCSS from './NavBar.module.css'

export default function NavBar(){
    


    return (
        <>
            <div className={NavBarCSS.NavBar}>
                <h3 className={NavBarCSS.Logo}>Task Manager</h3>
                <div className={NavBarCSS.SignedOutBtns}>
                    <a href="">About Us</a>
                        <button href="" className={NavBarCSS.Register}>Register Now</button>
                        <button href="" className={NavBarCSS.Login}>Login</button>
                </div>
            </div>
        </>
    )
}