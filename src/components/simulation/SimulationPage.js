import React from 'react'
import {Col, Form, FormGroup, Label, Input} from 'reactstrap'
import DraggableComponent from './DraggableComponent';

function SimulationPage() {
    const styleaa = {
        backgroundSize: "contain",
        width: "100%",
        height: "55vh",
        border: "2px solid",
    }
    return (
        <div className="container-fluid">
            <div className="row mt-5" style={{"display":"flex", "justifyContent":"center"}} >
                <Col md={9} lg={6}>
                    <div style={styleaa}>
                        <DraggableComponent/>
                    </div>
                </Col>
                <Col lg={2}>
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
                <Col lg={2}>
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
    )
}

export default SimulationPage
