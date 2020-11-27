import React, { Component, Fragment } from 'react'
import Howitworks from './pages/Howitworks'
import Navbar from './Navbar'
import Home from './pages/Home'
import Sidebar from './Sidebar'
import {  Element } from "react-scroll";
import AboutUs from './pages/AboutUs'

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
                <Element className="section-element" id="home">
                    <Home/>
                </Element>
                <Element className="section-element" id="howitworks" style={{'fontSize':'3rem','display':'flex','justifyContent':'center','alignItems':'center'}}>
                    <Howitworks/>
                </Element>
                <Element className="section-element" id="aboutus" style={{'fontSize':'3rem','display':'flex','justifyContent':'center','alignItems':'center'}}>
                    <AboutUs/>
                </Element>
                
                
            </>
        )
    }
}


