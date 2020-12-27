import React, { Fragment, useState } from "react";
import { SimulationNav, NavLogo, Score, WeatherBox, Temperature, WeatherIcon, WeatherSelectors } from "./SimulationStyles";
import "./Simulation.css";
import TemperatureSlider from "./ScoreBoard/TemperatureSlider";
import ScoreBoardBox from "./ScoreBoard/ScoreBoardBox";
import { TiWeatherCloudy } from "react-icons/ti";
import DraggableHelmet from "./Helmet/DraggableHelmet";
import { connect } from "react-redux";
import WeatherCondition from "./ScoreBoard/WeatherCondition";

const mapStateToProps = (state) => {
	return {
		...state,
		allPlayers: state.players,
		playersOnPitch: state.playersOnPitch,
	};
};

function SimulationPage({ playersOnPitch, allPlayers }) {
	const [isOpenWeather, setIsOpenWeather] = useState(false);
	return (
		<Fragment>
			<SimulationNav>
				<NavLogo to="/">NFL</NavLogo>
			</SimulationNav>
			<div className="container-fluid">
				<div className="row pt-5" style={{ display: "flex", justifyContent: "center" }}>
					<div className="pitch">
						<div id="pitchBox" style={{ width: "100%", height: "100%" }}>
							<WeatherBox >
								<div style={{position: "relative",}}>
									<WeatherIcon onClick={() => setIsOpenWeather(!isOpenWeather)}>
										<TiWeatherCloudy />
									</WeatherIcon>
									<WeatherSelectors isOpen={isOpenWeather}>
										<TemperatureSlider />
										<WeatherCondition/>
									</WeatherSelectors>
								</div>
							</WeatherBox>

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
