import React, { useState } from 'react';
import {NavLink} from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem
} from 'reactstrap';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);


  const mobileToggle = () => {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      setTimeout(() => {setIsOpen(!isOpen);}, 250); 
    };
  };

  return (
    <>
      <Navbar color="dark" dark expand="md">
          <div className="container">
            <NavLink className='nav-link' to='/home'>LOGO</NavLink>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
            <Nav className="m-auto" navbar>
                <NavItem>
                    <NavLink onClick={mobileToggle} className='nav-link ml-4 nav-link-custom' to="/home">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink onClick={mobileToggle} className='nav-link ml-4 nav-link-custom' to="/simulation">Simulation</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink onClick={mobileToggle} className='nav-link ml-4 nav-link-custom' to="/howitworks">How it works</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink onClick={mobileToggle} className='nav-link ml-4 nav-link-custom' to="/aboutus">About us</NavLink>
                </NavItem>
            </Nav>
            </Collapse>
          </div>
        
      </Navbar>
    </>
  );
}

export default Header;
