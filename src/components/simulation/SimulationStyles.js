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
