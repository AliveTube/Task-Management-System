import LandingCSS from './Landing.module.css'

export default function SecondSection(){

    return(
        <>
            <div className={LandingCSS.SecondSection}>
                <div className={LandingCSS.SecondSectionText1}>
                    Manage <span style={{color: '#4CAF4F'}}>all your tasks</span> in a single system   
                </div>
                <div className={LandingCSS.SecondSectionText2}>
                    <h3>Create Different  Folders</h3>
                    <h3>Add Priority To Tasks</h3>
                    <h3>Manage Your Work Easily</h3>
                </div>
            </div>
        </>
    )
}