import NavBar from '../NavBar/NavBar';
import FirstSection from './FirstSection';
import SecondSection from './SecondSection';
import LandingCSS from './Landing.module.css'

export default function Landing(){


    return(
        <>
            <NavBar></NavBar> {/*To be removed when the routing is added*/}
            <FirstSection></FirstSection>
            <SecondSection></SecondSection>
        </>
    )
}