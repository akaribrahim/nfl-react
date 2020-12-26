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
					<Route path='/' component={Main} exact />
					<Provider store={store}>
						<Route path="/simulation" component={SimulationPage} exact />
					</Provider>
				</Switch>
			</BrowserRouter>
		</>
	);
}

export default App;
