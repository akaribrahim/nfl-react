import React, { useState } from "react";
import {
	ScoreBoard,
	HomeTeamBox,
	AwayTeamBox,
	MatchTime,
	Other,
	CustomSlider,
	ScoreBoardText,
	SliderBox,
	HomeTeamText,
	RightSide,
	TeamText,
} from "./SimulationStyles";
import CustomSelect from "./CustomSelect";
import { IoIosArrowUp } from "react-icons/io";
import Slider from "@material-ui/core/Slider";
function ScoreBoardBox() {
	const [isOpenTimeBox, setisOpenTimeBox] = useState(false);
	const [matchTime, setmatchTime] = useState("1st");

	const [isOpenOtherBox, setisOpenOtherBox] = useState(false);
	const [yard, setYard] = useState(1);
	const [down, setDown] = useState("1st");

	const handleMatchTime = () => {
		setisOpenTimeBox(!isOpenTimeBox);
	};
	const handleChangeMatchTime = (e, value) => {
		if (value === 1) setmatchTime("1st");
		else if (value === 2) setmatchTime("2nd");
		else if (value === 3) setmatchTime("3rd");
		else if (value === 4) setmatchTime("4th");
	};

	const handleOtherBox = () => {
		setisOpenOtherBox(!isOpenOtherBox);
	};
	const handleChangeDown = (e, value) => {
		if (value === 1) setDown("1st");
		else if (value === 2) setDown("2nd");
		else if (value === 3) setDown("3rd");
		else if (value === 4) setDown("4th");
	};
	const handleChangeYard = (e, value) => {
		setYard(value);
	};

	return (
		<ScoreBoard>
			<HomeTeamBox>
				<TeamText>Home</TeamText>
				<CustomSelect id="homeSelect" />
			</HomeTeamBox>
			<AwayTeamBox>
				<TeamText>Away</TeamText>
				<CustomSelect id="awaySelect" />
			</AwayTeamBox>
			<RightSide>
				<MatchTime onClick={handleMatchTime}>
					<ScoreBoardText>
						{matchTime} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 10:33
						<IoIosArrowUp
							style={{
								position: "absolute",
								right: "10",
							}}
						/>
					</ScoreBoardText>
					<SliderBox>
						<CustomSlider isOpen={isOpenTimeBox}>
							<div id="quarter-slider" style={{ color: "black", marginBottom: "10px" }}>
								Select Quarter
							</div>
							<Slider
								onChange={handleChangeMatchTime}
								defaultValue={1}
								aria-labelledby="quarter-slider"
								valueLabelDisplay="auto"
								step={1}
								marks
								min={1}
								max={4}
							/>
						</CustomSlider>
					</SliderBox>
				</MatchTime>
				<Other onClick={handleOtherBox}>
					<ScoreBoardText>
						:15 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {down} &nbsp;&amp;&nbsp; {yard}
						<IoIosArrowUp
							style={{
								position: "absolute",
								right: "10",
							}}
						/>
					</ScoreBoardText>
					<SliderBox>
						<CustomSlider isOpen={isOpenOtherBox}>
							<div id="down-slider" style={{ color: "black", marginBottom: "10px" }}>
								Select Down
							</div>
							<Slider
								onChange={handleChangeDown}
								defaultValue={1}
								aria-labelledby="down-slider"
								valueLabelDisplay="auto"
								step={1}
								marks
								min={1}
								max={4}
							/>
						</CustomSlider>
						<CustomSlider isOpen={isOpenOtherBox}>
							<div id="yard-need" style={{ color: "black", marginBottom: "10px" }}>
								Select Yard Need
							</div>
							<Slider
								onChange={handleChangeYard}
								defaultValue={1}
								aria-labelledby="yard-need"
								valueLabelDisplay="auto"
								step={1}
								marks
								min={1}
								max={10}
							/>
						</CustomSlider>
					</SliderBox>
				</Other>
			</RightSide>
		</ScoreBoard>
	);
}

export default ScoreBoardBox;
