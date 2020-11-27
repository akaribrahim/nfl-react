import React from 'react'
import { Link } from 'react-router-dom'
import Typical from 'react-typical'
import nfllogo from '../../images/nflLogo.png'
function Home() {
    
    return (
        <div className='container' style={{'paddingTop':'300px'}}>
            <div className="row">
                <div className="col col-lg-6 col-sm-12  d-flex justify-content-center flex-column align-items-center">
                    <p>We build a thing,</p>
                    <h4>that{' '} 
                    <Typical
                        loop={Infinity}
                        wrapper="b"
                        steps={[
                            'analyzes data', 1000,
                            'visualizes data', 1000,
                            'tests data', 1000
                        ]} />
                    </h4>
                    <button type="button">
                        <Link to='/simulation' > some stuff </Link>
                    </button>
                </div>
                <div className="col col-lg-6 col-sm-12 d-flex align-items-center justify-content-center">
                    <img src={nfllogo} alt="logo"/>
                </div>
            </div>
            
        </div>
        
    )
}

export default Home
