import * as ActionTypes from "../actions/ActionTypes";

const scoreBoard = {
	homeTeamShort: "ARI",
	homeTeamName: "Arizona Cardinals",
	homeColor: "#A43E55",
	awayTeamShort: "CHI",
	awayTeamName: "Chicago Bears",
	awayColor: "#012244",
	selectedQuarter: "1st",
	selectedYard: 10,
	selectedDown: "3rd",
	selectedTemperature: 30,
	selectedCondition: "N", // Sunny -> S, Rain-Snow -> R, Normal -> N
	isHomePlayersLoading: true,
	isAwayPlayersLoading: true,
	season: '2017',
	isSeasonLoading: true,
	rusherDirection: 90,
};

export const ScoreBoardReducer = (state = scoreBoard, action) => {
	switch (action.type) {
		case ActionTypes.CHANGE_HOME:
			return { ...state, homeTeamShort: action.payload.newHomeShort, homeTeamName: action.payload.newHome, homeColor: action.payload.color};
		case ActionTypes.CHANGE_AWAY:
			return { ...state, awayTeamShort: action.payload.newAwayShort, awayTeamName: action.payload.newAway, awayColor: action.payload.color };
		case ActionTypes.CHANGE_QUARTER:
			return { ...state, selectedQuarter: action.payload.newQuarter };
		case ActionTypes.CHANGE_YARD:
			return { ...state, selectedYard: action.payload.newYard };
		case ActionTypes.CHANGE_DOWN:
			return { ...state, selectedDown: action.payload.newDown };
		case ActionTypes.CHANGE_TEMPERATURE:
			return { ...state, selectedTemperature: action.payload.newTemperature };
		case ActionTypes.CHANGE_WEATHER_CONDITION:
			return { ...state, selectedCondition: action.payload.newCondition };
		case ActionTypes.CHANGE_LOADING_STATUS:
			if(action.payload.side === 'home'){
				return { ...state, isHomePlayersLoading: action.payload.isLoading };
			}
			else if(action.payload.side === 'away'){
				return { ...state, isAwayPlayersLoading: action.payload.isLoading };
			}
			break;
		case ActionTypes.CHANGE_SEASON:
			return { ...state, season: action.payload.newSeason };
		case ActionTypes.CHANGE_SEASON_LOADING_STATUS:
			return { ...state, isSeasonLoading: action.payload.isSeasonLoading };
		case ActionTypes.CHANGE_RUSHER_DIRECTION:
			return { ...state, rusherDirection: action.payload.rusherDirection};
		default:
			return state;
	}
};
