import * as ActionTypes from '../actions/ActionTypes'

const players = [
    {helmetID: 1, helmetPosition: {x: 200, y: 200}, playerID: 0},
    {helmetID: 2, helmetPosition: {x: 200, y: 300}, playerID: 1},
    {helmetID: 3, helmetPosition: {x: 200, y: 100}, playerID: 2},
    {helmetID: 4, helmetPosition: {x: 400, y: 150}, playerID: 3},
    {helmetID: 5, helmetPosition: {x: 400, y: 250}, playerID: 4},
]

export const PlayersOnPitchReducer = (state = players, action) => {
    switch(action.type) {
        case ActionTypes.CHANGE_PLAYER:
            var newPlayer = action.payload; // helmetID, playerID
            let newState = [...state]
            newState.find(selectedHelmet => selectedHelmet.helmetID === newPlayer.helmetID).playerID = newPlayer.playerID;
            return newState;       
        default:
            return state;
    }
}