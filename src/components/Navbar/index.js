import React, { useEffect, useState } from "react";
import {
	Nav,
	NavContainer,
	NavLogo,
	MobileIcon,
	NavMenu,
	NavItem,
	NavLink,
	RightNav,
	RightNavMenu,
	RightNavItem,
	RightNavLink,
	ExternalLink,
	RightNavExternalLink,
} from "./NavbarElements";
import { FaBars } from "react-icons/fa";
import { AiOutlineHome, AiFillGithub } from "react-icons/ai";
import { IoIosCodeWorking } from "react-icons/io";
import { RiTeamFill } from "react-icons/ri";
import RightNavTooltip from "./RightNavTooltip";
import Logo from "../../shared/images/logo.jpg";

const Navbar = (props) => {
	const [isTopNavVisible, setIsTopNavVisible] = useState(true);
	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	const handleScroll = (e) => {
		if (window.pageYOffset > 50) {
			setIsTopNavVisible(false);
		} else {
			setIsTopNavVisible(true);
		}
	};
	return (
		<>
			<MobileIcon onClick={props.toggle}>
				<FaBars />
			</MobileIcon>
			<Nav isVisible={isTopNavVisible}>
				<NavLogo activeClass="active" to="home" spy={true} smooth={true} offset={-70} duration={800}>
					<img src={Logo} alt='site-logo' className='site-logo' />
				</NavLogo>
				<NavContainer>
					<NavMenu>
						<NavItem>
							<NavLink activeClass="active" to="home" spy={true} smooth={true} offset={-70} duration={800}>
								Home
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink activeClass="active" to="howitworks" spy={true} smooth={true} offset={0} duration={800}>
								How it works
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink activeClass="active" to="aboutus" spy={true} smooth={true} offset={0} duration={800}>
								About Us
							</NavLink>
						</NavItem>
						<NavItem>
							<ExternalLink
								onClick={() => {
									window.open("https://github.com/akaribrahim/nfl-react", "_blank");
								}}>
								View Source
							</ExternalLink>
						</NavItem>
					</NavMenu>
				</NavContainer>
			</Nav>

			<RightNav isVisible={!isTopNavVisible}>
				<RightNavMenu>
					<RightNavItem>
						<RightNavTooltip title="Home">
							<RightNavLink activeClass="active" to="home" spy={true} smooth={true} offset={-70} duration={800}>
								<AiOutlineHome />
							</RightNavLink>
						</RightNavTooltip>
					</RightNavItem>
					<RightNavItem>
						<RightNavTooltip title="How It Works">
							<RightNavLink activeClass="active" to="howitworks" spy={true} smooth={true} offset={0} duration={800}>
								<IoIosCodeWorking />
							</RightNavLink>
						</RightNavTooltip>
					</RightNavItem>
					<RightNavItem>
						<RightNavTooltip title="About Us">
							<RightNavLink activeClass="active" to="aboutus" spy={true} smooth={true} offset={0} duration={800}>
								<RiTeamFill />
							</RightNavLink>
						</RightNavTooltip>
					</RightNavItem>
					<RightNavItem>
						<RightNavTooltip title="View Source">
							<RightNavExternalLink
								onClick={() => {
									window.open("https://github.com/akaribrahim/nfl-react", "_blank");
								}}>
								<AiFillGithub />
							</RightNavExternalLink>
						</RightNavTooltip>
					</RightNavItem>
				</RightNavMenu>
			</RightNav>
		</>
	);
};

export default Navbar;
