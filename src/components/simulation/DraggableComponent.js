import React, { Component } from 'react'
import Draggable from 'react-draggable';
import {GiAmericanFootballHelmet} from 'react-icons/gi'
export default class DraggableComponent extends Component {

  state = {
    showPositions : false,
    position: {
      x: 0, y: 0
    }
  };

  handleStart = () => {
    this.setState({
      showPositions: true
    })
  }

  handleDrag = (e, ui) => {  
    var draggableRect = document.getElementById("helmet").getBoundingClientRect();
    var parentRect = document.getElementById("pitchBox").getBoundingClientRect();
    this.setState({
      position: {
        x: (draggableRect.x - parentRect.x) + 16,
        y: (parentRect.bottom - draggableRect.y) - 16
      }
    });
  };

  handleStop = () => {
    this.setState({
      showPositions: false
    })
  }

  render() {
    return (
      <Draggable
        onStart={this.handleStart}
        onDrag={this.handleDrag}
        onStop={this.handleStop} 
        bounds="parent">
          <div style={{"width":"fit-content"}}>
            <GiAmericanFootballHelmet id="helmet" style={{"fontSize":"2em", "color":"black", "cursor":"pointer"}}/>
            {this.state.showPositions ? 
                  <div style={{"fontSize":"0.8em","paddingLeft":"25px","position":"absolute", "width":"100px"}}>
                    ({this.state.position.x.toFixed(0)}, {this.state.position.y.toFixed(0)})
                  </div>
                  : null}
          </div>
      </Draggable>
    )
  }
}

