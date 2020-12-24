import {combineReducers, createStore} from 'redux';
import { PlayersReducer } from './reducers/playersReducer';
import { PlayersOnPitchReducer } from './reducers/pitchPlayersReducer';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            players: PlayersReducer,
            playersOnPitch : PlayersOnPitchReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;
}

