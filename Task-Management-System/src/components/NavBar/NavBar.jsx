import NavBarCSS from './NavBar.module.css'
import RegisterBtn from './RegisterBtn';
import { Link, useNavigate} from 'react-router-dom';

export default function NavBar(){
    const IS_SIGNED_IN = false; //TO BE CHANGED
    let navBarBtns; //to chnage when the user is signed in

    const navigate = useNavigate();

    const navigateToLogin = () => {
        navigate('/login');
    }

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
                            <Link to = "/about">About Us</Link>
                            <RegisterBtn></RegisterBtn>
                            <button href="" className={NavBarCSS.Login} onClick = {navigateToLogin}>Login</button>
                        </div>;   
    }

 


    return (
        <>
            <div className={NavBarCSS.NavBar}>
                <Link to='/' className={NavBarCSS.Logo}>Task Manager</Link>
                {navBarBtns}
            </div>
            
        </>
    )
}