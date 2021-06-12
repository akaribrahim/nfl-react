import React, { useState } from "react";
import DraggableBall from "../Ball/DraggableBall";
import AwayTeamPlayers from "./AwayTeamPlayers";
import HomeTeamPlayers from "./HomeTeamPlayers";

function Players() {
	const [isBallPositionChange, setIsBallPositionChange] = useState(false)
    const onChangeBallPosition = () => setIsBallPositionChange(true)
	return (
		<div id='pitch' style={{width: '100%', height: '100%', display: 'flex'}}>
			<DraggableBall onChangeBallPosition={onChangeBallPosition} />
            <HomeTeamPlayers isBallPositionChange={isBallPositionChange} />
            <AwayTeamPlayers isBallPositionChange={isBallPositionChange} />
		</div>
	);
}

export default Players;
