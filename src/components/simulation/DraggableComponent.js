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
    const {x, y} = this.state.position;
    this.setState({
      position: {
        x: x + ui.deltaX,
        y: y + ui.deltaY,
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
        defaultPosition={{x:10, y:10}}
        onStart={this.handleStart}
        onDrag={this.handleDrag}
        onStop={this.handleStop} 
        bounds="parent">
          <div style={{"width":"fit-content"}}>
            <GiAmericanFootballHelmet style={{"fontSize":"2em", "color":"black", "cursor":"pointer"}}/>
            {this.state.showPositions ? 
                  <div style={{"fontSize":"0.8em","paddingLeft":"25px"}}>
                    ({this.state.position.x.toFixed(0)}, {this.state.position.y.toFixed(0)})
                  </div>
                  : null}
          </div>
      </Draggable>
    )
  }
}

