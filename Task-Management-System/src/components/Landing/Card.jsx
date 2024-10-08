import LandingCSS from './Landing.module.css'

export default function Card({Name,Image}){

    return(
        <>  
            <div className={LandingCSS.Card}>
                <div className='card'>
                    <img src={Image} className="card-img-top" alt="Profile" style={{width: '200px'}}/>
                    <div className="card-body">
                        <h5 className="card-title">{Name}</h5>
                        {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                    </div>
                </div>
            </div>
        </>
    )
}