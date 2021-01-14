import * as ActionTypes from '../actions/ActionTypes'

const players = [
    {helmetID: 1, helmetPosition: {x: 200, y: 200}, team: 'home', playerID: 1},
    {helmetID: 2, helmetPosition: {x: 200, y: 300}, team: 'home', playerID: 1},
    {helmetID: 3, helmetPosition: {x: 200, y: 100}, team: 'home', playerID: 1},
    {helmetID: 4, helmetPosition: {x: 400, y: 150}, team: 'home', playerID: 1},
    {helmetID: 5, helmetPosition: {x: 400, y: 250}, team: 'home', playerID: 1},
    {helmetID: 6, helmetPosition: {x: 400, y: 200}, team: 'away', playerID: 1},
    {helmetID: 7, helmetPosition: {x: 400, y: 300}, team: 'away', playerID: 1},
    {helmetID: 8, helmetPosition: {x: 400, y: 100}, team: 'away', playerID: 1},
    {helmetID: 9, helmetPosition: {x: 200, y: 150}, team: 'away', playerID: 1},
    {helmetID: 10, helmetPosition: {x: 200, y: 250}, team: 'away', playerID: 1},
]

export const PlayersOnPitchReducer = (state = players, action) => {
    switch(action.type) {
        case ActionTypes.CHANGE_PLAYER:
            var newPlayer = action.payload; // helmetID, playerID
            var newState = [...state]
            newState.find(selectedHelmet => selectedHelmet.helmetID === newPlayer.helmetID).playerID = newPlayer.playerID;
            return newState;
        case ActionTypes.CHANGE_PLAYERS_ON_FIELD:
            if(action.payload.team === 'home'){
                var newplayers = action.payload.playerIDs
                var newState = [...state]
                newState.filter(selectedSide => selectedSide.team === action.payload.team).map((player, i) => {
                    player.playerID = newplayers[i].playerNFLID;
                });
            }
            else if(action.payload.team === 'away'){
                var newplayers = action.payload.playerIDs
                var newState = [...state]
                newState.filter(selectedSide => selectedSide.team === action.payload.team).map((player, i) => {
                    player.playerID = newplayers[i].playerNFLID;
                });
            }            
            return newState;   
        default:
            return state;
    }
}