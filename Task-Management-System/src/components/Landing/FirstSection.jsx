import LandingCSS from './Landing.module.css'
import RegisterBtn from '../NavBar/RegisterBtn';
import LandingImg1 from '../../Images/Landing-1.svg'

export default function FirstSection(){

    return(
        <>
            <div className={LandingCSS.FirstSection}>
                <div className={LandingCSS.FirstSectText}>
                    Manage Your Tasks <span style={{color: "#4CAF4F"}}>Effortlessly from Anywhere</span>
                    <div style={{paddingTop: "20px"}}>
                        <RegisterBtn></RegisterBtn>
                    </div>
                </div>
                <img src={LandingImg1} alt="Tasks" className={LandingCSS.Img1}/>
            </div>
        </>
    )
}