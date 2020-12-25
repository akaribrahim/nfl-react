import { Link } from "react-router-dom";
import styled from "styled-components";


export const ScoreBoard = styled.div`
	width: 90%;
	height: 100%;
	display: flex;
	position: relative;
`;

export const HomeTeamBox = styled.div`
	width: 30%;
	height: 100%;
`;
export const AwayTeamBox = styled.div`
	width: 30%;
	height: 100%;
`;
export const TeamText = styled.div`
	@import url("https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap");
	font-family: "Ubuntu", sans-serif;
	font-size: 18px;
	letter-spacing: 2px;
	height: 30px;
	width: 100%;
	margin-left: 10px;
`;
export const RightSide = styled.div`
	position: absolute;
	bottom: 0;
	right: 0;
	width: 40%;
	height: 60px;
	display: flex;
`;
export const MatchTime = styled.div`
	background: #0a043c;
	width: 50%;
	height: 100%;
	color: #fff;
`;
export const Other = styled.div`
	background: #03506f;
	width: 50%;
	height: 100%;
	color: #fff;
`;
export const ScoreBoardText = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
`;
export const CustomSlider = styled.div`
	display: ${(props) => (props.isOpen ? "block" : "none")};
	margin-top: -140px;
	width: 90%;
`;
export const SliderBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
`;
