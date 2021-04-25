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
  HomeTeamLabel
} from "./SimulationStyles";
import "./Simulation.css";
import {useSelector} from 'react-redux'
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
  const homeTeamName = useSelector((state) => state.scoreBoardState.homeTeamName);
  const homeTeamColor = useSelector((state) => state.scoreBoardState.homeColor)
  console.log(homeTeamColor)
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
          <SmallScreenText>
            The simulation page is not yet compatible for small screens.
          </SmallScreenText>
          <BackgroundLogo />
        </SmallScreen>
      ) : (
        <div className="container-fluid d-flex justify-content-center">
            <div className="pitch">
              <div className="top-selection-bar">
                <Season />
                <WeatherBox>
                  <div
                    ref={weatherSelectorsRef}
                  >
                    <WeatherIcon
                      onClick={() => setIsOpenWeather(!isOpenWeather)}
                    >
                      <TiWeatherCloudy />
                    </WeatherIcon>
                    <WeatherSelectors isOpen={isOpenWeather}>
                      <TemperatureSlider />
                      <WeatherCondition />
                    </WeatherSelectors>
                  </div>
                </WeatherBox>
              </div>
              <div id="pitchBox" className="pitchBox">
                <HomeTeamLabel id='home-side-label' side='left' color={homeTeamColor}>
                  {homeTeamName}
                </HomeTeamLabel>
                <PlayersBox>
                  <Players />
                </PlayersBox>
                <HomeTeamLabel id='away-side-label' side='right' color={homeTeamColor}>
                  {homeTeamName}
                </HomeTeamLabel>

              </div>
              <Score>
                <ScoreBoardBox />
              </Score>
            </div>
        </div>
      )}
    </Fragment>
  );
}

export default SimulationPage;
