import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.div`
	background: transparent;
	height: 60px;
	display: ${(props) => (props.isVisible ? "flex" : "none")};
	justify-content: space-between;
	align-items: center;
	font-size: 1rem;
	position: fixed;
	min-width: 100%;
	top: 0;
	z-index: 50;

	@media screen and (max-width: 960px) {
		transition: 0.8s all ease;
	}
`;
export const NavContainer = styled.div`
	display: flex;
	justify-content: center;
	margin-left: 75px;
	height: 60px;
	z-index: 1;
	width: 100%;
	max-width: 100%;
`;

export const NavLogo = styled(LinkS)`
	position: fixed;
	top: 15px;
	left: 70px;
	color: red;
	z-index: 200;
	cursor: pointer;
	font-size: 1.5rem;
	display: flex;
	align-items: center;
	font-weight: bold;
	text-decoration: none !important;
	&:hover {
		color: red;
	}
`;

export const MobileIcon = styled.div`
	display: none;
	position: fixed;
	right: 25px;
	top: 25px;
	z-index: 100;
	align-items: center;
	justify-content: center;
	font-size: 1.8rem;
	cursor: pointer;
	color: #232a34;
	@media screen and (max-width: 768px) {
		display: flex;
	}
`;

export const NavMenu = styled.ul`
	display: flex;
	justify-content: space-between;
	list-style: none;
	text-align: center;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const NavItem = styled.li`
	margin-right: 60px;
	height: 60px;
`;

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
		content: ".";
		color: transparent;
		background: #ffd369;
		height: 2px;
	}

	&,
	&::after,
	&::before {
		transition: all 0.5s;
	}

	&:hover {
		color: #fff;
	}

	&:hover::after {
		width: 100%;
	}
`;

export const RightNav = styled.div`
	display: ${(props) => (props.isVisible ? "block" : "none")};
	width: 75px;
	height: 250px;
	position: fixed;
	right: 0;
	top: 40%;
    z-index: 100;
    @media screen and (max-width: 768px) {
		display: none;
	}
`;

export const RightNavMenu = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
`;

export const RightNavItem = styled.div`
	height: 60px;
	width: 60px;
	background-color: #575b4a;
	border-radius: 50%;
`;

export const RightNavLink = styled(LinkS)`
	color: #fff;
	display: flex;
	align-items: center;
	justify-content: center;
	text-decoration: none !important;
	height: 100%;
	cursor: pointer;
	position: relative;
	font-size: 25px;
	&:hover {
		color: #fff;
	}
`;
