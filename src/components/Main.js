import React, { Component, Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './Header'
import Home from './pages/Home'
import SimulationPage from './simulation/SimulationPage'
export default class Main extends Component {
    render() {
        return (
            <Fragment>
                <Header/>
                <Switch>
                    <Route path="/home" exact component={Home}/>
                    <Route path="/simulation" component={SimulationPage}/>
                </Switch>

                
            </Fragment>
        )
    }
}
