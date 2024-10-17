import LandingCSS from './Landing.module.css'
import Card from './Card';
import tempProfile from '../../Images/TeamPics/NoPic.png'
import Abdelrahman from '../../Images/TeamPics/Abdelrahman.png'
import Omar from '../../Images/TeamPics/Omar.png'
import Karim from '../../Images/TeamPics/Karim.png'
import Abdelwahab from '../../Images/TeamPics/Abdelwahab.png'
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';  
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function ForthSection(){

    return (

        <>
            <div className={LandingCSS.ForthSection}>
                <h2>Our Team</h2>
                <div className={LandingCSS.Cards}>
                    <Card Name='Abdelrahman Wael' Image={Abdelrahman}></Card>
                    <Card Name='Omar Mohamed' Image={Omar}></Card>
                    <Card Name='Karim Hosam' Image={Karim}></Card>
                    <Card Name='Ahmed Mohamed' Image={Abdelwahab}></Card>
                    <Card Name='Mostafa Ahmed' Image={tempProfile}></Card>
                    <Card Name='Ziad Hassan' Image={tempProfile}></Card>
                </div>
            </div>
        </>
    )
}