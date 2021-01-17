import { Link } from "react-router-dom";
import styled from "styled-components";
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
	position: absolute;
	bottom: 0;
	margin-bottom: 20px;
	display: flex;
	justify-content: center;
`;

export const PlayersBox = styled.div`
	width: 100%;
	height: calc(100% - 80px);
`

export const WeatherBox = styled.div`
	display: flex;
	justify-content: center;
	position: absolute;
	top: 0;
	right: 0;
`;
export const WeatherIcon = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	height: 50px;
	width: 50px;
	right: 0;
	top: 0;
	font-size: 30px;
	margin-right: 10px;
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