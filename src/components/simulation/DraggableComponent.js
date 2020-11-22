import React, { Component } from 'react'
import Draggable from 'react-draggable';
import Helmet from './Helmet';

export default class DraggableComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pitchDirection: false,
      lastWidth: 1,
      lastHeight: 1,
      showPositions : false,
      realPosition: {
        x: 0, y: 0
      },
      calculatedPosition: {
        x: 0, y: 0
      },
      isDialogOpen: false,
      isDragging: false,
    };
  }
  
  ro = null;
  componentDidMount() {
    // ResizeObserver works on resize of the given element, in this case pitchBox.
    // when pitchBox's width change, the helmet position changes at the same rate.
    // cr.width => gives new width of the div
    // state.lastWidth => gives the last recorded width
    this.ro = new ResizeObserver(entries => {
      
      for (let entry of entries) {
        const cr = entry.contentRect;
        var calculated = this.state.calculatedPosition;
        var real = this.state.realPosition;
        /* console.log("calc",calculated,"real", real, "last",this.state.lastWidth, "lastH",this.state.lastHeight, "cr", cr); */
        /* console.log('pitch', this.state.pitchDirection, 'innerwidth', window.innerWidth) */
        if(window.innerWidth < 768 && this.state.pitchDirection){
          /* console.log("b => k", "calc",calculated,"real", real, "lastW",this.state.lastWidth,  "cr", cr.width); */
          this.setState({
            realPosition: {
              x: (calculated.y * cr.width) / this.state.lastHeight,
              y: (cr.height * real.x) / this.state.lastWidth
            },
            pitchDirection: false
          });
        }
        else if(window.innerWidth > 768 && !this.state.pitchDirection){
          /* console.log("k => b", "calc",calculated,"real", real); */
          this.setState({
            realPosition: {
              x: cr.width - (((this.state.lastHeight - real.y) * cr.width) / this.state.lastHeight), 
              y: cr.height - ((cr.height * (real.x)) / this.state.lastWidth)
            },
            pitchDirection: true
          });
        }
        else{
          this.setState({
            realPosition: {
              x: (cr.width * real.x) / this.state.lastWidth,
              y: real.y
            }
          });
          this.setState({
            lastWidth: cr.width,
            lastHeight: cr.height
          });
        }
      }
    });
    this.ro.observe(document.getElementById("pitchBox"));
    if(window.innerWidth > 768 ) this.setState({pitchDirection: true})
    
  }
  componentWillUnmount() {
    if(this.ro) this.ro.disconnect();
  }


  handleStart = (e) => {
    this.setState({
      showPositions: true
    })
  }

  handleDrag = (e, ui) => {
    var draggableRect = document.getElementById("helmet").getBoundingClientRect();
    var parentRect = document.getElementById("pitchBox").getBoundingClientRect();
    this.setState({
      calculatedPosition: {
        x: (draggableRect.x - parentRect.x) + 16,
        y: window.innerWidth > 768 ? (parentRect.bottom - draggableRect.y) - 16 : (draggableRect.y - parentRect.y) + 16
      },
      realPosition: {
        x: this.state.realPosition.x + ui.deltaX,
        y: this.state.realPosition.y + ui.deltaY
      },
      isDragging: true
    });
  };

  handleStop = (e) => {
    this.setState({
      showPositions: false,
    })
    setTimeout(() => {
      this.setState({
        isDragging: false
      })
    },100)
    
  }
  
  handleClick =  (isDialogOpen)=>{
    this.setState({
      isDialogOpen: isDialogOpen
    });
  }

  render() {
    return (
      
      <Draggable
        position={this.state.realPosition}
        onStart={this.handleStart}
        onDrag={this.handleDrag}
        onStop={this.handleStop}
        disabled={this.state.isDialogOpen}
        bounds="parent">
          <div style={{"width":"fit-content"}}>
            <Helmet getDialogStatus={this.handleClick} isDragging={this.state.isDragging} />
            {this.state.showPositions ? 
                  <div style={{"fontSize":"0.8em","paddingLeft":"25px","position":"absolute", "width":"100px"}}>
                    ({this.state.calculatedPosition.x.toFixed(0)}, {this.state.calculatedPosition.y.toFixed(0)})
                  </div>
                  : null}

          </div>
      </Draggable>
    )
  }
}

