import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'

export const Nav = styled.div`
    background: #393e46;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    min-width: 100%;
    top: 0;
    z-index: 50;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`
export const NavContainer = styled.div`
    display:flex;
    justify-content: space-between;
    height: 60px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`

export const NavLogo = styled(LinkR)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display:flex;
    align-items: center;
    margin-left: 44px;
    font-weight: bold;
    text-decoration: none !important;
`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: flex;
        align-items: center;
        justify-content: center;
        /* transform: translate(-100%, 60%); */
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff
    }
`

export const NavMenu = styled.ul`
    display: flex;
    justify-content: space-between;
    list-style: none;
    text-align: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavItem = styled.li`
    margin-right:60px;
    height: 60px;
`

export const NavLink = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
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
        width: 100%;
    }


`