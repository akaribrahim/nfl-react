import React, { Fragment, useState } from 'react'
import {Col, Form, FormGroup, Label, Input} from 'reactstrap'
import {SimulationNav, NavLogo, ScoreBoardBox, ScoreBoard, HomeTeamBox, AwayTeamBox, MatchTime, Other, CustomSlider, ScoreBoardText, SliderBox} from './SimulationStyles'
import DraggableComponent from './DraggableComponent';
import CustomSelect from './CustomSelect';
import './Simulation.css'
import Slider from '@material-ui/core/Slider';


function SimulationPage() {
    const [isOpenTimeBox, setisOpenTimeBox] = useState(false)
    const [matchTime, setmatchTime] = useState("1st")
    
    const [isOpenOtherBox, setisOpenOtherBox] = useState(false)
    const [yard, setYard] = useState(1)
    const [down, setDown] = useState('1st')
    

    const handleMatchTime = () => {
        setisOpenTimeBox(!isOpenTimeBox);
    }
    const handleChangeMatchTime = (e,value) => {
        if(value===1) setmatchTime('1st')
        else if(value===2) setmatchTime('2nd')
        else if(value===3) setmatchTime('3rd')
        else if(value===4) setmatchTime('4th')
    }

    const handleOtherBox = () => {
        setisOpenOtherBox(!isOpenOtherBox);
    }
    const handleChangeDown = (e,value) => {
        if(value===1) setDown('1st')
        else if(value===2) setDown('2nd')
        else if(value===3) setDown('3rd')
        else if(value===4) setDown('4th')
    }
    const handleChangeYard = (e,value) => {
        setYard(value)
    }
  
    return (
        
        <Fragment>
            <SimulationNav>
                <NavLogo to="/">
                    NFL
                </NavLogo>
            </SimulationNav>
            <div className="container-fluid">
                <div className="row pt-5" style={{"display":"flex", "justifyContent":"center"}}  >
                    <div className="pitch">
                        <div id="pitchBox" style={{"width":"100%","height":"100%"}}>
                            <DraggableComponent/>
                            <ScoreBoardBox>
                                <ScoreBoard>
                                    <HomeTeamBox >
                                        <CustomSelect id='homeSelect'/>
                                    </HomeTeamBox>
                                    <AwayTeamBox>
                                        <CustomSelect id='awaySelect'/>
                                    </AwayTeamBox>
                                    <MatchTime onClick={handleMatchTime} >
                                        <ScoreBoardText >
                                            {matchTime} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 10:33
                                        </ScoreBoardText>
                                        <SliderBox>
                                            <CustomSlider isOpen={isOpenTimeBox}>
                                                <div id='quarter-slider' style={{'color':'black','marginBottom':'10px'}}>
                                                    Select Quarter
                                                </div>
                                                <Slider
                                                    onChange={handleChangeMatchTime}
                                                    defaultValue={1}
                                                    aria-labelledby="quarter-slider"
                                                    valueLabelDisplay="auto"
                                                    step={1}
                                                    marks
                                                    min={1}
                                                    max={4}
                                                />
                                                
                                            </CustomSlider>
                                        </SliderBox>
                                        
                                    </MatchTime>
                                    <Other onClick={handleOtherBox}>
                                        <ScoreBoardText>
                                            :15 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {down} &nbsp;&amp;&nbsp; {yard}
                                        </ScoreBoardText>
                                        <SliderBox>
                                            <CustomSlider isOpen={isOpenOtherBox}>
                                                <div id='down-slider' style={{'color':'black','marginBottom':'10px'}}>
                                                    Select Down
                                                </div>
                                                <Slider 
                                                    onChange={handleChangeDown}
                                                    defaultValue={1}
                                                    aria-labelledby="down-slider"
                                                    valueLabelDisplay="auto"
                                                    step={1}
                                                    marks
                                                    min={1}
                                                    max={4}
                                                />
                                            </CustomSlider>
                                            <CustomSlider isOpen={isOpenOtherBox}>
                                            <div id='yard-need' style={{'color':'black','marginBottom':'10px'}}>
                                                    Select Yard Need
                                                </div>
                                                <Slider
                                                    onChange={handleChangeYard}
                                                    defaultValue={1}
                                                    aria-labelledby="yard-need"
                                                    valueLabelDisplay="auto"
                                                    step={1}
                                                    marks
                                                    min={1}
                                                    max={10}
                                                />
                                            </CustomSlider>
                                        </SliderBox>
                                        
                                    </Other>
                                </ScoreBoard>
                            </ScoreBoardBox>
                        </div>   
                    </div>
                </div>
                <div className="row mt-4" style={{"display":"flex", "justifyContent":"space-evenly"}} >
                    <Col md={5}>
                        <Form>
                            <FormGroup>
                                <Label className="m-0" for="offenseFormation">Offense Formation</Label>
                                <Input type="select" name="select" id="offenseFormationSelect">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Input>
                            </FormGroup>
                        </Form>
                    </Col>
                    <Col md={5}>
                        <Form>
                            <FormGroup>
                                <Label className="m-0" for="offenseFormation">Offense Formation</Label>
                                <Input type="select" name="select" id="offenseFormationSelect">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Input>
                            </FormGroup>
                        </Form>
                    </Col>
                    <Col md={5}>
                        <Form>
                            <FormGroup>
                                <Label className="m-0" for="offenseFormation">Offense Formation</Label>
                                <Input type="select" name="select" id="offenseFormationSelect">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Input>
                            </FormGroup>
                        </Form>
                    </Col>
                </div>
            </div>
        </Fragment>
    )
}

export default SimulationPage
