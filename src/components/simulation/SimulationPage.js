import React, { Fragment, useRef, useState, useEffect } from "react";
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
import OutsideClick from "./Hooks/outsideClick";
import Season from "./Season";

function SimulationPage() {
	const [isOpenWeather, setIsOpenWeather] = useState(false);
	const windowSize = useWindowSize();
	const weatherSelectorsRef = useRef(null);
	const weatherSelectorOutsideClick = OutsideClick(weatherSelectorsRef);

	useEffect(() => {
		setIsOpenWeather(false);
	}, [weatherSelectorOutsideClick]);

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
					<div style={{ display: "flex", justifyContent: "center" }}>
						<div className="pt-2" >
							<Season />
						</div>
					</div>
					<div className="row pt-2" style={{ display: "flex", justifyContent: "center" }}>
						<div className="pitch">
							<div id="pitchBox" style={{ width: "100%", height: "100%"}}>
								<WeatherBox>
									<div ref={weatherSelectorsRef} style={{ position: "relative" }}>
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
