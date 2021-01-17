import React, { useState, useEffect } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import { FaTemperatureHigh } from "react-icons/fa";
import {useDispatch} from 'react-redux'
import {changeTemperature} from '../../../redux/actions/ActionCreators'

const useStyles = makeStyles({
  root: {
    color: (props) =>
      props.currentDegree < -5
        ? "#0f3460"
        : props.currentDegree < 10
        ? "#8bcdcd"
        : props.currentDegree < 25
        ? "#f1e189"
        : props.currentDegree < 35
        ? "#ff9642"
        : "#cd0a0a",
    height: 3,
    width: 200
  }
});

const CustomSlider = withStyles({
  track: {
    height: 16,
    borderRadius: 20,
    marginTop: 2
  },
  rail: {
    marginTop: 5,
    height: 10,
    borderRadius: 20
  },
  thumb: {
    color: "#000",
    borderRadius: 0,
    height: 35,
    width: 30,
    marginLeft: "-9px",
    marginTop: "-8px",
    background: "transparent",
    boxShadow: "none",
    "&:hover": {
      boxShadow: "none"
    },
    "&:focus": {
      boxShadow: "none"
    }
  },
  focusVisible: {
    boxShadow: "none"
  }
})(Slider);

export default function TemperatureSlider() {
  const [currentDegree, setCurrentDegree] = useState(30);
  const props = { currentDegree: currentDegree };
  const classes = useStyles(props);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeTemperature(currentDegree));    
  }, [dispatch, currentDegree])

  function handleChange(e, data) {
    setCurrentDegree(data);
  }

  return (
    
      <div>
        <CustomSlider
          min={-20}
          max={50}
          className={`${classes.root}`}
          onChange={handleChange}
          defaultValue={30}
          aria-labelledby="temp-slider"
          ThumbComponent={FaTemperatureHigh}
        />
        <span style={{float:"right", width: "60px", marginLeft: "20px", marginTop:"12px"}}>{currentDegree} °C</span>
      </div>
    
  );
}
