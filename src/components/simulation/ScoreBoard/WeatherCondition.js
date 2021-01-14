import React, { useState, useEffect } from "react";
import {
  TiWeatherDownpour,
  TiWeatherPartlySunny,
  TiWeatherSunny
} from "react-icons/ti";
import {ConditionBox, IconBox} from './ScoreBoardStyles'
import { Tooltip } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { changeWeatherCondition } from "../../../redux/actions/ActionCreators";

export default function WeatherCondition() {
  const dispatch = useDispatch();
  const weather = useSelector(state => state.scoreBoardState.selectedCondition);
  const [condition, setCondition] = useState(weather)
  const [isRainy, setIsRainy] = useState(false);
  const [isNormal, setIsNormal] = useState(false);
  const [isSunny, setIsSunny] = useState(false);

  useEffect(() => {
    if(condition === 'R'){
      setIsRainy(true);
      setIsNormal(false);
      setIsSunny(false);
      dispatch(changeWeatherCondition('R'))
    } 
    else if(condition === 'N'){
      setIsRainy(false);
      setIsNormal(true);
      setIsSunny(false);
      dispatch(changeWeatherCondition('N'))
    } 
    else if(condition === 'S'){
      setIsRainy(false);
      setIsNormal(false);
      setIsSunny(true);
      dispatch(changeWeatherCondition('S'))
    }
  }, [dispatch, condition])

  return (
    <ConditionBox>
      <Tooltip title="rainy-snowy">
        <IconBox onClick={() => setCondition('R')} isSelected={isRainy}>
          <TiWeatherDownpour size={"30px"} />
        </IconBox>
      </Tooltip>
      <Tooltip title="normal">
        <IconBox onClick={() => setCondition('N')} isSelected={isNormal}>
          <TiWeatherPartlySunny size={"30px"} />
        </IconBox>
      </Tooltip>
      <Tooltip title="sunny">
        <IconBox onClick={() => setCondition('S')} isSelected={isSunny}>
          <TiWeatherSunny size={"30px"} />
        </IconBox>
      </Tooltip>
    </ConditionBox>
  );
}
