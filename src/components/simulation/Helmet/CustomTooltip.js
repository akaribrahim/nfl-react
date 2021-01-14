import React, {useEffect} from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import { useSelector } from 'react-redux'

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
	const player = useSelector(
		state => props.side === 'home' 
		?
		state.homePlayers.find(current => current.playerNFLID === props.player_id)
		:
		state.awayPlayers.find(current => current.playerNFLID === props.player_id)
	)
	useEffect(() => {
		console.log(props)
	}, [])
	return (
		<Tooltip title={<PlayerInformations player={player}/>} arrow classes={classes} {...props}></Tooltip>
	);
}
