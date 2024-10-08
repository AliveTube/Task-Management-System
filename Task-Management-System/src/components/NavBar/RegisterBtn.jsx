import NavBarCSS from './NavBar.module.css'
import { useNavigate } from 'react-router-dom'

export default function RegisterBtn(){
    const navigate = useNavigate();

    const navigateToRegister = () => {
        navigate('/register');
    }
    return(
        <>
            <button className={NavBarCSS.Register} onClick={navigateToRegister}>Register Now</button>
        </>
    )
}