import React, { Fragment } from 'react'
import {Col, Form, FormGroup, Label, Input} from 'reactstrap'
import {SimulationNav, NavLogo, ScoreBoardBox, ScoreBoard, HomeTeamBox, AwayTeamBox, MatchTime, OtherBox} from './SimulationStyles'
import DraggableComponent from './DraggableComponent';
import CustomSelect from './CustomSelect';
import './Simulation.css'


function SimulationPage() {
    
  
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
                                    <MatchTime>
                                        2nd &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 10:33
                                    </MatchTime>
                                    <OtherBox>
                                        :15 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4th&amp;10
                                    </OtherBox>
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
