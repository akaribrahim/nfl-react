import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { PlayersOnPitchReducer } from './reducers/pitchPlayersReducer';
import { ScoreBoardReducer } from './reducers/scoreBoardReducer';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'
import { TeamsReducer } from './reducers/teamsReducer';
import { AwayPlayersReducer } from './reducers/awayPlayersReducer';
import { HomePlayersReducer } from './reducers/homePlayersReducer';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            homePlayers : HomePlayersReducer,
            awayPlayers: AwayPlayersReducer,
            playersOnPitch : PlayersOnPitchReducer,
            scoreBoardState : ScoreBoardReducer,
            teams: TeamsReducer
        }),
        compose(
            applyMiddleware(thunk),
        ),
    );

    return store;
}

