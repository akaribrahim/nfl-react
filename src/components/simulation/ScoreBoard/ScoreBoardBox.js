import React, { useState, useEffect } from "react";
import {
	ScoreBoard,
	HomeTeamBox,
	AwayTeamBox,
	MatchTime,
	Other,
	CustomSlider,
	ScoreBoardText,
	SliderBox,
	RightSide,
	TeamText,
} from "./ScoreBoardStyles";
import CustomSelect from "./CustomSelect";
import { IoIosArrowUp } from "react-icons/io";
import Slider from "@material-ui/core/Slider";
import {useSelector, useDispatch} from 'react-redux';
import {changeQuarter, changeDown, changeYard} from '../../../redux/actions/ActionCreators'

function ScoreBoardBox() {
	const scoreBoardState = useSelector(state => state.scoreBoardState)
	const dispatch = useDispatch()

	const [isOpenTimeBox, setisOpenTimeBox] = useState(false);
	const [matchTime, setmatchTime] = useState(scoreBoardState.selectedQuarter);

	const [isOpenOtherBox, setisOpenOtherBox] = useState(false);
	const [yard, setYard] = useState(scoreBoardState.selectedYard);
	const [down, setDown] = useState(scoreBoardState.selectedDown);

	
	useEffect(() => {
		dispatch(changeQuarter(matchTime));
	}, [dispatch,matchTime])
	useEffect(() => {
		dispatch(changeYard(yard))
	}, [dispatch,yard])
	useEffect(() => {
		dispatch(changeDown(down))
	}, [dispatch,down])
	
	const handleMatchTime = () => {
		setisOpenTimeBox(!isOpenTimeBox);
	};
	const handleChangeMatchTime = (e, value) => {
		let s = ''
		if (value === 1) s = "1st";
		else if (value === 2) s = "2nd";
		else if (value === 3) s = "3rd";
		else if (value === 4) s = "4th";
		setmatchTime(s)
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
				<CustomSelect default={scoreBoardState.homeTeamShort} id="homeSelect" />
			</HomeTeamBox>
			<AwayTeamBox>
				<TeamText>Away</TeamText>
				<CustomSelect default={scoreBoardState.awayTeamShort} id="awaySelect" />
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
