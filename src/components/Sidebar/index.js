import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink} from './SidebarStyles'
const Sidebar = (props) => {
    return (
        <>
            <SidebarContainer isOpen={props.isOpen}>
                <Icon onClick={props.toggle}>
                    <CloseIcon></CloseIcon>
                </Icon>
                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLink spy={true}
                                smooth={true} offset={-70} duration={800} to='home' onClick={() => {setTimeout(props.toggle, 250)}}>
                            Home
                        </SidebarLink>
                        <SidebarLink spy={true}
                                smooth={true} offset={0} duration={800} to='howitworks' onClick={() => {setTimeout(props.toggle, 250)}}>
                            How it works
                        </SidebarLink>
                        <SidebarLink spy={true}
                                smooth={true} offset={0} duration={800} to='aboutus' onClick={() => {setTimeout(props.toggle, 250)}}>
                            About Us
                        </SidebarLink>
                    </SidebarMenu>
                </SidebarWrapper>
            </SidebarContainer>
        </>
    )
}

export default Sidebar
