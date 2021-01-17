import React, { useEffect } from "react";
import { makeStyles, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, DialogContentText } from "@material-ui/core";
import { GiAmericanFootballHelmet } from "react-icons/gi";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { changePlayer } from "../../../redux/actions/ActionCreators";
import styled from "styled-components";
const getPlayers = (players, playersOnPitch) => {
	// When setting player options for helmet select, to group players by their positions,
	// we reduce the players array to this format:
	/* 
		[
			{
				label: <SomePosition>
				options: [..players who play at this position]
			},
			{
				label: <SomePosition>
				options: [..players who play at this position]
			}
		]
	*/
	return players.reduce((acc, curr) => {
		if (Boolean(playersOnPitch.find((x) => x.playerID === curr.playerNFLID))) {
			// In helmet select, includes all players except the players on the pitch already
			// Boolean() returns true if <player> found in pitch so we only include there
			// players who are not on the pitch
			return acc;
		}
		let newPlayer = { value: curr.playerNFLID, label: curr.playerName };
		let position = acc.find((element) => element.label === curr.playerPosition);
		if (position === undefined) {
			let newGroup = { label: curr.playerPosition, options: [newPlayer] };
			acc.push(newGroup);
		} else {
			position.options.push(newPlayer);
		}
		return acc;
	}, []);
};

const HelmetIcon = styled.div`
	font-size: 2em;
	color: black;
	cursor: pointer;
	transform: ${(props) => (props.side === "away" ? "rotateY(180deg)" : "none")};
`;
const useStyles = makeStyles((theme) => ({
	container: {
		display: "flex",
		flexWrap: "wrap",
		width: "300px",
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
		width: "280px",
	},
}));


const GroupStyle = styled.div `
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	height: 33px;
	border-bottom: 1px solid black;
`;	
const positionStyles = {
	color: "black",
	fontStyle: "italic",
};
const groupBadgeStyles = {
	backgroundColor: "#EBECF0",
	borderRadius: "10px",
	color: "black",
	width: "20px",
	height: "18px",
	fontSize: 12,
	textAlign: "center",
};
const formatGroupLabel = (data) => (
	<GroupStyle>
		<span style={positionStyles}>{data.label}</span>
		<span style={groupBadgeStyles}>{data.options.length}</span>
	</GroupStyle>
);

function Helmet(props) {
	const players = useSelector((state) => (props.side === "home" ? state.homePlayers : state.awayPlayers));
	const playersOnPitch = useSelector((state) => state.playersOnPitch.filter((selected) => selected.team === props.side));
	const [playerOptions, setplayerOptions] = React.useState([]);
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);
	const dispatch = useDispatch();

	const handleClickOpen = (e) => {
		if (!props.isDragging) {
			setplayerOptions(getPlayers(players, playersOnPitch));
			props.getDialogStatus(true);
			setOpen(true);
		}
	};

	const handleClose = () => {
		props.getDialogStatus(false);
		setOpen(false);
	};

	const handleSelectChange = (data) => {
		console.log(data, props);
		// data = { value : playerID, label: playerName}
		// props.helmetID gives selected helmet on the pitch
		// In the playersOnThePitch state, change the playerID(data.value) corresponding to props.helmetID
		dispatch(changePlayer(data.value, props.helmetID));
	};
	return (
		<div>
			<HelmetIcon side={props.side}>
				<GiAmericanFootballHelmet onClick={handleClickOpen} id="helmet" />
			</HelmetIcon>

			<Dialog className={classes.dialogBox} /* disableBackdropClick disableEscapeKeyDown */ open={open} onClose={handleClose}>
				<DialogTitle>Select a Player</DialogTitle>
				<DialogContent>
					{/* <DialogContentText style={{"textAlign":"center"}}>
						Current Player: {props.player.playerName}
					</DialogContentText> */}
					<form className={classes.container}>
						<FormControl className={classes.formControl}>
							<Select
								onChange={handleSelectChange}
								menuPortalTarget={document.body}
								className="basic-single"
								classNamePrefix="select"
								styles={{ menuPortal: (base) => ({ ...base, zIndex: 9999 }) }}
								name="color"
								isClearable
								options={playerOptions}
								formatGroupLabel={formatGroupLabel}
							/>
						</FormControl>
					</form>
				</DialogContent>
				<DialogActions style={{ display: "flex", justifyContent: "center" }}>
					<Button onClick={handleClose} color="primary">
						Ok
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}

export default Helmet;
