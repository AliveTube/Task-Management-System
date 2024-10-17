import { useDispatch, useSelector } from 'react-redux';
import NavBarCSS from './NavBar.module.css'
import RegisterBtn from './RegisterBtn';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { clearToken } from '../../ReduxSlices/TokenSlice';
import { jwtDecode } from 'jwt-decode';
import { clearPath } from '../../ReduxSlices/PathSlice';

export default function NavBar() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const token = useSelector((state) => state.TokenInUse);
    let IS_SIGNED_IN = token.length;
    let navBarBtns; //to change when the user is signed in

    const navigateToLogin = () => {
        navigate('/login');
    }

    const handleSignOut = () => {
        dispatch(clearToken());
        dispatch(clearPath());
        navigate('/');
    }

    const navigateToProfile = () => {
        navigate('/home/profile')
    }

    if (IS_SIGNED_IN) {
        const decodedPayload = jwtDecode(token);
        navBarBtns =
        <>
            <Link to='/' className={NavBarCSS.Logo}>Task Manager</Link>
            <ul className={NavBarCSS.NavbarList}>
                <li><Link to='/home' >Home</Link></li>
                <li><Link to='/about' >About</Link></li>
                <li><Link to='/home/profile' >Profile</Link></li>
            </ul>
            <div className={NavBarCSS.SignedInBtns}>
                <span onClick={handleSignOut} className={NavBarCSS.SignOut}>Sign Out</span>
                <div className={NavBarCSS.Profile} onClick={navigateToProfile}>
                    <h2>{decodedPayload.username.charAt(0)}</h2>
                </div>
            </div>
        </>
    }
    else {
        navBarBtns = 
        <>
            <Link to='/' className={NavBarCSS.Logo}>Task Manager</Link>
            <div className={NavBarCSS.SignedOutBtns}>
                <Link to="/about">About Us</Link>
                <RegisterBtn></RegisterBtn>
                <button className={NavBarCSS.Login} onClick={navigateToLogin}>Login</button>
            </div>
        </>
    }


    return (
        <>
            <div className={NavBarCSS.NavBar}>
                {navBarBtns}
            </div>

        </>
    )
}