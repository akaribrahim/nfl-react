import React from 'react'
import {Button1} from '../ButtonStyles'
import backgroundHome from '../../images/home-back.jpg'
function Home() {
    return (
        <div >
            <img className="home-background" src={backgroundHome} alt=""/>
            <div className="home-text-group container">
                <h1 className="animate-text-custom">Depends on the way..</h1>
                <h2 className="text-home">you look the data</h2>
                <Button1>View Source Code </Button1>
            </div>
        </div>
        
    )
}

export default Home
