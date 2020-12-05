import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const SimulationNav = styled.div`
    background: #393e46;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
`

export const NavLogo = styled(Link)`
    font-size: 1.5rem;
    color: #fff;
    text-decoration: none !important;

    &:hover {
        font-size: 2rem;
        color: #fff;
    }
`

export const ScoreBoardBox = styled.div`
    width: 100%;
    height: 60px;
    position: absolute;
    bottom:0;
    margin-bottom: 20px;    
    display: flex;
    justify-content: center;
`

export const ScoreBoard = styled.div`
    width: 90%;
    height: 100%;
    display: flex;
`

export const HomeTeamBox = styled.div`
    width: 30%;
    height: 100%;
`
export const AwayTeamBox = styled.div`
    width: 30%;
    height: 100%;
`
export const MatchTime = styled.div`
    background: #0a043c;
    width: 20%;
    height: 100%;
    color: #fff;
`
export const Other = styled.div`
    background: #03506f;
    width: 20%;
    height: 100%;
    color: #fff;
`
export const ScoreBoardText = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`
export const CustomSlider = styled.div`
    display: ${props => props.isOpen ? 'block' : 'none'};
    margin-top: -140px;
    width: 90%;
`
export const SliderBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`