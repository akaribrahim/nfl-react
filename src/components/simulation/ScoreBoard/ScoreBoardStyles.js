import styled, {keyframes} from "styled-components";


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
	visibility: ${(props) => (props.isOpen ? "1" : "0")};
	opacity: ${(props) => (props.isOpen ? "1" : "0")};
	height: ${(props) => (props.isOpen ? "90px" : "50px")};
	transition: height 0.4s, visibility 0.3s, opacity 0.5s ease-in;
	margin-top: -155px;
	width: 100%;
	padding: 10px 20px;
	background-color: ${(props) => (props.side === "left" ? "#0a043c" : "#03506f")};
`;
export const SliderBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	
`;


export const ConditionBox = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-around;
`;

export const moveGradient = keyframes`
  50% {
      background-position: 100% 50%;
    }
`;
export const IconBox = styled.div`
  --border-width: ${(props) => (props.isSelected ? "3px" : "0")};
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  background: white;
  border-radius: var(--border-width);

  &::after {
    position: absolute;
    content: "";
    top: calc(-1 * var(--border-width));
    left: calc(-1 * var(--border-width));
    z-index: -1;
    width: calc(100% + var(--border-width) * 2);
    height: calc(100% + var(--border-width) * 2);
    background: rgb(12, 22, 125);
    background: linear-gradient(
      90deg,
      rgba(12, 22, 125, 1) 0%,
      rgba(224, 68, 81, 1) 21%,
      rgba(255, 255, 255, 1) 36%,
      rgba(215, 195, 195, 1) 63%,
      rgba(158, 116, 116, 1) 80%,
      rgba(203, 101, 101, 1) 95%
    );
    background-size: 300% 300%;
    background-position: 0 50%;
    border-radius: calc(2 * var(--border-width));
    animation: ${moveGradient} 4s alternate infinite;
  }
`;