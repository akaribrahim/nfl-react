import React from 'react'
import {Nav, NavContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLink} from './NavbarElements'
import {FaBars} from 'react-icons/fa'

const Navbar = (props) => {
    return (
        <>
            <Nav>
                <NavContainer>
                    <NavLogo to="/">
                        nfl
                    </NavLogo>
                    <MobileIcon onClick={props.toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLink activeClass="active" to="home"  spy={true}
                                smooth={true} offset={-70} duration={800} >
                                    Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink activeClass="active" to="howitworks" spy={true}
                                smooth={true} offset={0} duration={800}>
                                    How it works
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink activeClass="active" to="aboutus" spy={true}
                                smooth={true} offset={0} duration={800}>
                                    About Us
                            </NavLink>
                        </NavItem>
                    </NavMenu>
                </NavContainer>
            </Nav>
        </>
    )
}

export default Navbar
