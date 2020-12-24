import React, { Fragment } from "react";
import { SimulationNav, NavLogo, Score } from "./SimulationStyles";
import "./Simulation.css";
import ScoreBoardBox from "./ScoreBoardBox";
import DraggableHelmet from "./Helmet/DraggableHelmet";
import { connect } from "react-redux";

const players = [
	{
		id: 1,
		position: { x: 100, y: 200 },
		playerName: "Allen Bailey",
		jerseyNumber: 97,
		playerHeight: "6-0",
		playerWeight: 288,
		playerPosition: "DE",
		playerCollege: "Miami",
	},
	{
		id: 2,
		position: { x: 200, y: 100 },
		playerName: "Justin Houston",
		jerseyNumber: 50,
		playerHeight: "6-3",
		playerWeight: 270,
		playerPosition: "DE",
		playerCollege: "Georgia",
	},
	{
		id: 3,
		position: { x: 200, y: 300 },
		playerName: "Dee Ford",
		jerseyNumber: 55,
		playerHeight: "6-2",
		playerWeight: 252,
		playerPosition: "DE",
		playerCollege: "Auburn",
	},
];
const mapStateToProps = (state) => {
	return {
		...state,
		allPlayers: state.players,
		playersOnPitch: state.playersOnPitch,
	};
};

function SimulationPage({ playersOnPitch, allPlayers }) {
	return (
		<Fragment>
			<SimulationNav>
				<NavLogo to="/">NFL</NavLogo>
			</SimulationNav>
			<div className="container-fluid">
				<div className="row pt-5" style={{ display: "flex", justifyContent: "center" }}>
					<div className="pitch">
						<div id="pitchBox" style={{ width: "100%", height: "100%" }}>
							{playersOnPitch.map((player) => (
								<DraggableHelmet
									key={player.helmetID}
									helmetID={player.helmetID}
									helmetPosition={player.helmetPosition}
									player={allPlayers.find((selected) => selected.playerID === player.playerID)}
								/>
							))}
							<Score>
								<ScoreBoardBox />
							</Score>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
}

export default connect(mapStateToProps)(SimulationPage);
