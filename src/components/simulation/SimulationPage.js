import React, { Fragment, useState } from "react";
import {
	SimulationNav,
	NavLogo,
	Score,
	WeatherBox,
	WeatherIcon,
	WeatherSelectors,
	PlayersBox,
	BackgroundLogo,
	SmallScreen,
	SmallScreenText,
} from "./SimulationStyles";
import "./Simulation.css";
import TemperatureSlider from "./ScoreBoard/TemperatureSlider";
import ScoreBoardBox from "./ScoreBoard/ScoreBoardBox";
import { TiWeatherCloudy } from "react-icons/ti";
import useWindowSize from "./Hooks/windowSizeHook";
import WeatherCondition from "./ScoreBoard/WeatherCondition";
import Players from "./Players/Players";

function SimulationPage() {
	const [isOpenWeather, setIsOpenWeather] = useState(false);
	const windowSize = useWindowSize();
	console.log(windowSize);
	return (
		<Fragment>
			<SimulationNav>
				<NavLogo to="/">NFL</NavLogo>
			</SimulationNav>
			{windowSize[0] < 1078 ? (
				<SmallScreen>
					<SmallScreenText>The simulation page is not yet compatible for small screens.</SmallScreenText>
					<BackgroundLogo />
				</SmallScreen>
			) : (
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
									<Players />
								</PlayersBox>

								<Score>
									<ScoreBoardBox />
								</Score>
							</div>
						</div>
					</div>
				</div>
			)}
		</Fragment>
	);
}

export default SimulationPage;
