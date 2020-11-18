import React from 'react'
import {Col, Form, FormGroup, Label, Input} from 'reactstrap'
import DraggableComponent from './DraggableComponent';
import './Simulation.css'
function SimulationPage() {

    return (
        <div className="container-fluid">
            <div className="row pt-5" style={{"display":"flex", "justifyContent":"center"}}  >
                <div className="pitch">
                    <div id="pitchBox" style={{"width":"100%","height":"100%"}}>
                        <DraggableComponent/>
                    </div>   
                </div>
                {/* <Col lg={2}>
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
                </Col> */}
            </div>
        </div>
    )
}

export default SimulationPage
