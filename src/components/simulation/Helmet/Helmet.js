import React from "react";
import { makeStyles, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, DialogContentText } from "@material-ui/core";
import { GiAmericanFootballHelmet } from "react-icons/gi";
import Select from "react-select";
import { connect, useDispatch } from "react-redux";
import {CHANGE_PLAYER} from '../../../redux/actions/ActionTypes';
import {changePlayer} from '../../../redux/actions/ActionCreators'

const mapStateToProps = (state) => {
	return {
		...state,
		playersOnPitch: state.playersOnPitch,
		players: state.players,
	};
};

const getPlayers = (players, playersOnPitch) => {
	var playerOptions = [];

	players.map((player) => {
    // In helmet select, includes all players except the players on the pitch already
    // Boolean() returns true if <player> found in pitch so we only include there 
    // players who are not on the pitch
		if (!Boolean(playersOnPitch.find((x) => x.playerID === player.playerID))) { 
			let newPlayer = {
				value: player.playerID,
				label: player.playerName,
			};
			playerOptions.push(newPlayer);
		}
	});
	return playerOptions;
};

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

function Helmet(props) {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);
  const [playerOptions, setplayerOptions] = React.useState([]);
  const dispatch = useDispatch();

	React.useEffect(() => {
		setplayerOptions(getPlayers(props.players, props.playersOnPitch));
	}, [props.playersOnPitch]);

	const handleClickOpen = (e) => {
		if (!props.isDragging) {
			props.getDialogStatus(true);
			setOpen(true);
		}
	};

	const handleClose = () => {
		props.getDialogStatus(false);
		setOpen(false);
	};

  const handleSelectChange = (data) => {
    // data = { value : playerID, label: playerName}
    // props.helmetID gives selected helmet on the pitch
    // In the playersOnThePitch state, change the playerID(data.value) corresponding to props.helmetID
    dispatch(changePlayer(data.value, props.helmetID));
  }
	return (
		<div>
			<GiAmericanFootballHelmet onClick={handleClickOpen} id="helmet" style={{ fontSize: "2em", color: "black", cursor: "pointer" }} />

			<Dialog className={classes.dialogBox} /* disableBackdropClick disableEscapeKeyDown */ open={open} onClose={handleClose}>
				<DialogTitle>Select a Player</DialogTitle>
				<DialogContent>
					{/* <DialogContentText style={{"textAlign":"center"}}>
						Current Player: {props.player.playerName}
					</DialogContentText> */}
					<form className={classes.container}>
						<FormControl className={classes.formControl}>
							<Select
                				onChange = {handleSelectChange}
								menuPortalTarget={document.body}
								className="basic-single"
								classNamePrefix="select"
								styles={{ menuPortal: (base) => ({ ...base, zIndex: 9999 }) }}
								name="color"
								isClearable
								options={playerOptions}
							/>
						</FormControl>
					</form>
				</DialogContent>
				<DialogActions style={{"display": "flex", "justifyContent":"center"}}>
					<Button onClick={handleClose} color="primary">
						Ok
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}

export default connect(mapStateToProps)(Helmet);
