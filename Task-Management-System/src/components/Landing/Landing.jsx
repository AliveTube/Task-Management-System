import NavBar from '../NavBar/NavBar.jsx';
import FirstSection from './FirstSection';
import SecondSection from './SecondSection';
import LandingCSS from './Landing.module.css'
import img2 from '../../Images/Landing-2.svg'

export default function Landing(){


    return(
        <>
            <FirstSection></FirstSection>
            <SecondSection></SecondSection>
            <div className={LandingCSS.ThirdSection}>
                <img src={img2} className={LandingCSS.img2} alt="Complete" />
                <div className={LandingCSS.ThirdSecText}>
                    <h2>About The Task Manager</h2>
                    <p>The Task Management System is designed to help individuals and teams organize, prioritize, and manage their tasks more effectively. Built using modern technologies like React, Redux, and Node.js, this tool simplifies task tracking and boosts productivity through a streamlined, user-friendly interface.</p>
                    <button>Learn More</button>                
                </div>
            </div>
        </>
    )
}