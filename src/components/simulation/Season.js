import React, { useState, useEffect } from "react";
import { SeasonSelect, Seasons, SeasonText } from "./SimulationStyles";
import { useDispatch, useSelector } from "react-redux";
import { changeSeason, changeSeasonLoadingStatus } from "../../redux/actions/ActionCreators";
import ReactLoading from "react-loading";
import Tooltip from "@material-ui/core/Tooltip";

const seasonTooltip = "You can choose the season you want. We will take players who played in the selected season. Default is 2017."

export default function Season() {
	const [isOpenSeasons, setIsOpenSeasons] = useState(false);
	const [season, setSeason] = useState("2017");
	const dispatch = useDispatch();
	const isLoading = useSelector((state) => state.scoreBoardState.isSeasonLoading);

	useEffect(() => {
		dispatch(changeSeason(season));
		dispatch(changeSeasonLoadingStatus(true));
	}, [season, dispatch]);

	const handleSeasonSelect = (e) => {
		var selected = e.target.textContent;
		setSeason(selected);
		setIsOpenSeasons(!isOpenSeasons);
	};
	const handleSeasonBoxClick = () => {
		setIsOpenSeasons(true && !isLoading);
	};
	return (
		<div style={{ display: "flex", position: "relative" }}>
			<div style={{ lineHeight: "40px", marginRight: "15px" }}>Season:</div>
			<Tooltip title={seasonTooltip} aria-label='season-default' placement='right'>
				<SeasonSelect isBoxVisible={!isOpenSeasons} onClick={handleSeasonBoxClick}>
					<div style={{ display: "flex", justifyContent: 'center', alignItems: 'center', lineHeight:'38px' }}>
						{isLoading ? <ReactLoading height={'20%'} width={'20%'} type={"bars"} color="#000" /> 
						: 
						season ? season : "Choose Season"}
					</div>
				</SeasonSelect>
			</Tooltip>

			<Seasons isSelectionOpen={isOpenSeasons}>
				<SeasonText onClick={handleSeasonSelect}>2017</SeasonText>
				<SeasonText onClick={handleSeasonSelect}>2018</SeasonText>
			</Seasons>
		</div>
	);
}
