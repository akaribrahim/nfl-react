import React, { Fragment, useEffect, useState } from "react";
import { SimulationNav, NavLogo, Score, WeatherBox, Temperature, WeatherIcon, WeatherSelectors, PlayersBox } from "./SimulationStyles";
import "./Simulation.css";
import TemperatureSlider from "./ScoreBoard/TemperatureSlider";
import ScoreBoardBox from "./ScoreBoard/ScoreBoardBox";
import { TiWeatherCloudy } from "react-icons/ti";

import { connect, useDispatch, useSelector } from "react-redux";
import WeatherCondition from "./ScoreBoard/WeatherCondition";
import { fetchPlayers, changeFieldPlayers, changeLoadingStatus } from "../../redux/actions/ActionCreators";
import Players from "./Players/Players";


function SimulationPage() {
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
							<WeatherBox>
								<div style={{ position: "relative" }}>
									<WeatherIcon onClick={() => setIsOpenWeather(!isOpenWeather)}>
										<TiWeatherCloudy />
									</WeatherIcon>
									<WeatherSelectors isOpen={isOpenWeather}>
										<TemperatureSlider />
										<WeatherCondition />
									</WeatherSelectors>
								</div>
							</WeatherBox>

							
							<PlayersBox>
								<Players/>
							</PlayersBox>

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

export default SimulationPage;
