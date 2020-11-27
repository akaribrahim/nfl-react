import styled from 'styled-components'
import {FaTimes} from 'react-icons/fa'
import {Link as LinkS} from 'react-scroll'
export const SidebarContainer = styled.aside`
    position:fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #393e46;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
    
`

export const CloseIcon = styled(FaTimes)`
    color: #fff;
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`
export const SidebarWrapper = styled.div`
    margin-top: 150px;
    color: #fff;
`
export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6,100px);
    text-align:center;

    @media screen and (max-width: 480px){
        grid-template-rows: repeat(6, 80px);
    }
`

export const SidebarLink = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    justify-content:center;
    font-size: 1.5rem;
    text-decoration: none !important;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    position: relative;

    &::after {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        width: 0%;
        content: '.';
        color: transparent;
        background: #ffd369;
        height: 2px;
    }
    
    &, &::after, &::before{
        transition: all .5s;
    }

    &:hover {
        color: #fff;
    }

    &:hover::after{
        width: 60%;
    }
`
