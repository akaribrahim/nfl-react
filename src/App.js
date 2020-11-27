
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Main from './components/Main'
import SimulationPage from './components/simulation/SimulationPage';

function App() {

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path='/' component={Main} exact />
          <Route path='/simulation' component={SimulationPage} exact />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
