import { Link } from "react-router-dom";
import styled, {keyframes} from "styled-components";
import LogoImage from "../../shared/images/nfl_logo.png";
export const SimulationNav = styled.div`
	background: #393e46;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 60px;
`;

export const NavLogo = styled(Link)`
	font-size: 1.5rem;
	color: #fff;
	text-decoration: none !important;

	&:hover {
		font-size: 2rem;
		color: #fff;
	}
`;

export const Score = styled.div`
	width: 100%;
	height: 90px;
	display: flex;
	justify-content: center;
	margin-top: 10px;
`;

export const PlayersBox = styled.div`
	width: 100%;
	height: 100%;
	
`

export const WeatherBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	height: 100%;
`;
export const WeatherIcon = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	top: 0;
	right:0;
	height: 100%;
	width: 60px;
	font-size: 30px;
	border-radius: 50%;
	cursor: pointer;
	transition: box-shadow .3s;
	&:hover {
		background: transparent;
		box-shadow: 0 0 11px blue; 
	}
`;
export const WeatherSelectors = styled.div`
	visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
	opacity: ${(props) => (props.isOpen ? "1" : "0")};
	transition: visibility 0.4s, opacity 0.3s ease-in-out;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-right: 60px;
`

export const SmallScreen = styled.div`
	width: 100%;
	height: 700px;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
`
export const SmallScreenText = styled.div`
	position: absolute;
	top: 40px;
	font-size: 30px;
	text-align: center;
	width: 70%;
	z-index: 3;
`
export const BackgroundLogo = styled.div`
	width: 300px;
	height: 400px;
	background-image: url(${LogoImage});
	background-size: cover;
	opacity: 0.3;
`








export const SeasonSelect = styled.div`
  width: 200px;
  height: 40px;
  border: 2px solid;
  text-align: center;
  visibility: ${(props) => (props.isBoxVisible ? "visible" : "hidden")};
  opacity: ${(props) => (props.isBoxVisible ? "1" : "0")};
  transition: all 0.5s ease;
  cursor: pointer;
`;

const move = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;
export const Seasons = styled.div`
  width: 200px;
  height: 40px;
  display: ${(props) => (props.isSelectionOpen ? "flex" : "none")};
  justify-content: space-around;
  align-items: center;
  position: absolute;
  left: 50px;
  animation: 0.6s ease-in-out 1 ${move};
`;
export const SeasonText = styled.span`
  width: 50px;
  line-height: 25px;
  text-align: center;
  margin: auto;
  cursor: pointer;
  &:after {
    content: "";
    display: block;
    height: 1px;
    width: 0px;
    transition: width 0.5s ease;
  }
  &:hover:after {
    width: 100%;
    background: black;
  }
`;