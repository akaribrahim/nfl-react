import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import SimulationPage from "./components/simulation/SimulationPage";
import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/configureStore";
function App() {
	const store = ConfigureStore();

	return (
		<>
			<BrowserRouter>
				<Switch>
					<Route path={process.env.PUBLIC_URL + '/'} component={Main} exact />
					<Provider store={store}>
						<Route path={process.env.PUBLIC_URL + "/simulation"} component={SimulationPage} exact />
					</Provider>
				</Switch>
			</BrowserRouter>
		</>
	);
}

export default App;
