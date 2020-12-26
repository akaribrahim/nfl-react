import { Link } from "react-router-dom";
import styled from "styled-components";
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

export const WeatherBox = styled.div`
	display: flex;
	justify-content: center;
	margin-bottom: 10px;
	position: absolute;
	top: 0;
	right: 0;
`;
export const WeatherIcon = styled.div`
	position: absolute;
	height: 50px;
	right: 0;
	top: 0;
	font-size: 30px;
	margin-right: 10px;
	border-radius: 35px;
	cursor: pointer;
	transition: box-shadow .3s;
	&:hover {
		background: transparent;
		box-shadow: 0 0 11px blue; 
	}
`;
export const Temperature = styled.div`
	visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
	opacity: ${(props) => (props.isOpen ? "1" : "0")};
	margin-right: 50px;
	transition: visibility 0.4s, opacity 0.5s linear;
`;
