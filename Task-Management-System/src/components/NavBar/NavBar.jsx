import NavBarCSS from './NavBar.module.css'

export default function NavBar(){
    let IS_SIGNED_IN = false; //TO BE CHANGED
    let navBarBtns; //to chnage when the user is signed in

    let dummyUser = {
                        uniqueId: 0, 
                        username: 'Ahmed',
                        email: 'a@gmail.com',
                        password: 'a123456'
                    }

    if(IS_SIGNED_IN){
        navBarBtns = <div className={NavBarCSS.SignedInBtns}>
                            <div className={NavBarCSS.Profile}>
                                <a href="">{dummyUser.username.charAt(0)}</a> 
                            </div>
                        </div>;   
    }
    else{
        navBarBtns = <div className={NavBarCSS.SignedOutBtns}>
                            <a href="">About Us</a>
                            <button href="" className={NavBarCSS.Register}>Register Now</button>
                            <button href="" className={NavBarCSS.Login}>Login</button>
                        </div>;   
    }

 


    return (
        <>
            <div className={NavBarCSS.NavBar}>
                <h3 className={NavBarCSS.Logo}>Task Manager</h3>
                {navBarBtns}
            </div>
            
        </>
    )
}