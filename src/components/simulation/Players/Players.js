import React, {useEffect} from "react";
import { useSelector } from 'react-redux'
import { fetchPlayers } from "../../../redux/actions/ActionCreators";
import DraggableHelmet from "../Helmet/DraggableHelmet";
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
