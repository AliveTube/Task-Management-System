import { useSelector } from 'react-redux';
import NavBarCSS from './NavBar.module.css'
import { useNavigate } from 'react-router-dom'

export default function RegisterBtn() {
    const token = useSelector((state) => state.TokenInUse);
    let IS_SIGNED_IN = token.length;

    const navigate = useNavigate();

    let ButtonContent;
    if (IS_SIGNED_IN) {
        ButtonContent="Go to Home"
    }
    else {
        ButtonContent="Register Now"
    }

    const navigateToRegister = () => {
        if (IS_SIGNED_IN) {
            navigate('/home');
        }
        else {
            navigate('/register');
        }
    }

    return (
        <>
            <button className={NavBarCSS.Register} onClick={navigateToRegister}>{ButtonContent}</button>
        </>
    )
}