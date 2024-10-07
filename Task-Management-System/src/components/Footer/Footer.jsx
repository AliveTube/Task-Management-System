import footerCSS from './footer.module.css'

export default function Footer(){

    return(
        <>
            <div className={footerCSS.FooterTemplate}>
                <p>Copyright © 2024 DEPI.</p>
                <p>All rights reserved</p>
            </div>
        </>
    )
}