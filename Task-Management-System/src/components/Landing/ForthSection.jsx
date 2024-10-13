import LandingCSS from './Landing.module.css'
import Card from './Card';
import tempProfile from '../../Images/Temp-Profile.jpg'
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';  
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function ForthSection(){

    return (

        <>
            <div className={LandingCSS.ForthSection}>
                <h2>Our Team</h2>
                <div className={LandingCSS.Cards}>
                    <Card Name='Abdelrahman Wael' Image={tempProfile}></Card>
                    <Card Name='Omar Mohamed' Image={tempProfile}></Card>
                    <Card Name='Karim Hosam' Image={tempProfile}></Card>
                    <Card Name='Ahmed Mohamed' Image={tempProfile}></Card>
                    <Card Name='Mostafa Ahmed' Image={tempProfile}></Card>
                    <Card Name='Ziad Hassan' Image={tempProfile}></Card>
                </div>
            </div>
        </>
    )
}