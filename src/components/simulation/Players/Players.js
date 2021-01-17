import React from "react";
import AwayTeamPlayers from "./AwayTeamPlayers";
import HomeTeamPlayers from "./HomeTeamPlayers";

function Players() {
    
	return (
		<div style={{width: '100%', height: '100%', display: 'flex'}}>
            <HomeTeamPlayers/>
            <AwayTeamPlayers/>
		</div>
	);
}

export default Players;
