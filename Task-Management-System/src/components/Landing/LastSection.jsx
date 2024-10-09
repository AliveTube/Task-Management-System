import LandingCSS from './Landing.module.css'
import img3 from '../../Images/Landing-3.svg'
import RegisterBtn from '../NavBar/RegisterBtn';

export default function LastSection(){

    return(
        <>
            <div className={LandingCSS.LastSection}>
                <img src={img3} className={LandingCSS.img3} alt="Complete" />
                <div className={LandingCSS.LastSecText}>
                    <h2>Join Us Now</h2>
                    <RegisterBtn></RegisterBtn>           
                </div>
            </div>
        </>
    )
}