import React from 'react'
import { Link } from 'react-router-dom'
import {AiFillGithub} from 'react-icons/ai'
import {GiAmericanFootballHelmet} from 'react-icons/gi';
import './Home.css'
import styled from 'styled-components';
import Video from '../../../videos/video.mp4'

function Home() {
    const VideoBg = styled.video`
        width: 100%;
        height: 800px;
        -o-object-fit: cover;
        object-fit:cover;
        background: #232a34;
    `
    const HomeBg = styled.div`
        position:absolute;
        top:0;
        right:0;
        bottom:0;
        left:0;
        width:100%;
        height: 800px;
        overflow:hidden;
    `
    
    return (
        <div className='home'>
            <HomeBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HomeBg>
            
            <div className="content-box">
                <div className="text-group">
                    <div className="top-text unselectable">
                        A tool to simulate NFL matches and predict outcomes
                    </div>
                    <div className="alt-text unselectable">
                        'Name' predicts running games based on the data you enter using artificial intelligence.
                    </div>
                </div>
                
                <div className="button-group">
                    <div className="go-source-button">
                        <span className='rightspan'>Get Started</span>
                        <Link className='righta' to='/simulation'><GiAmericanFootballHelmet/></Link>
                    </div>
                    <div className="go-source-button">
                        <span >View Source</span>
                        <div onClick={() => {
                            window.open('https://www.github.com', '_blank');
                        }}><AiFillGithub/></div>
                    </div>
                </div>

            </div>
        </div>
        
    )
}

export default Home
