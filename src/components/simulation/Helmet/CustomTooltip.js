import React, {useEffect, useRef} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import { useSelector } from 'react-redux'
import { setRef } from "@material-ui/core";

const useStylesBootstrap = makeStyles((theme) => ({
	arrow: {
		color: theme.palette.common.black,
	},
	tooltip: {
		backgroundColor: theme.palette.common.black,
	},
}));

const PlayerInformations = ({ player }) => {
	return (
		<div style={{ margin: "5px" }}>
			<div style={{ textAlign: "center", marginBottom: "5px", fontSize: "13px" }}>{player.playerName}</div>
			<div>Position: {player.playerPosition}</div>
			<div>College: {player.playerCollege}</div>
			<div>
				Height: {player.playerHeight} Weight: {player.playerWeight}
			</div>
		</div>
	);
};

export default function CustomTooltip(props) {
	const classes = useStylesBootstrap();
	const ref = useRef(0)

	const player = useSelector(
		state => props.side === 'home' 
		?
		state.homePlayers.find(current => current.playerNFLID === props.player_id)
		:
		state.awayPlayers.find(current => current.playerNFLID === props.player_id)
	)
	return (
		<Tooltip title={<PlayerInformations player={player}/>} arrow classes={classes} {...props}></Tooltip>
	);
}
