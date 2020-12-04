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
    display: flex;
    justify-content: center;
`

export const ScoreBoard = styled.div`
    width: 90%;
    height: 100%;
    display:flex;
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
    background:gray;
    width: 20%;
    height: 100%;
`

