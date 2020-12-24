import {combineReducers, createStore} from 'redux';
import { PlayersReducer } from './reducers/playersReducer';
import { PlayersOnPitchReducer } from './reducers/pitchPlayersReducer';
import { ScoreBoardReducer } from './reducers/scoreBoardReducer';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            players: PlayersReducer,
            playersOnPitch : PlayersOnPitchReducer,
            scoreBoardState : ScoreBoardReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;
}

