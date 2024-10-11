import { useNavigate } from 'react-router-dom';
import LandingCSS from './Landing.module.css'
import img2 from '../../Images/Landing-2.svg'
import { Link } from 'react-router-dom'

export default function ThirdSection(){

    const navigate = useNavigate();

    const navigateToAbout = () => {
        navigate('/about');
    }

    return(
        <>
            <div className={LandingCSS.ThirdSection}>
                <img src={img2} className={LandingCSS.img2} alt="Complete" />
                <div className={LandingCSS.ThirdSecText}>
                    <h2>About The Task Manager</h2>
                    <p>The Task Management System is designed to help individuals and teams organize, prioritize, and manage their tasks more effectively. Built using modern technologies like React, Redux, and Node.js, this tool simplifies task tracking and boosts productivity through a streamlined, user-friendly interface.</p>
                    <button to = "/about" className={LandingCSS.LearnMore} onClick={navigateToAbout}>Learn More</button>
                                 
                </div>
            </div>
        </>
    )
}