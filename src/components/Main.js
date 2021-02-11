import React, { Component, Fragment } from 'react'
import Howitworks from './pages/HowItWorksSection/Howitworks'
import Navbar from './Navbar'
import Home from './pages/HomeSection/Home'
import Sidebar from './Sidebar'
import { Element } from "react-scroll";
import AboutUs from './pages/AboutUsSection/AboutUs'

export default class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            isOpen: false
        }
        this.toggle = this.toggle.bind(this);
    }
    
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return (
            <>
                <Sidebar isOpen={this.state.isOpen} toggle={this.toggle}/>
                <Navbar toggle={this.toggle}/>
                <Element id="home" style={{marginTop: "60px"}}>
                    <Home/>
                </Element>
                <Element id="howitworks">
                    <Howitworks/>
                </Element>
                <Element id="aboutus">
                    <AboutUs/>
                </Element>
                
                
            </>
        )
    }
}


