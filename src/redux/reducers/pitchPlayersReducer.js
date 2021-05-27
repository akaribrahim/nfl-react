import * as ActionTypes from '../actions/ActionTypes'

const players = [
    {helmetID: 1, helmetPosition: {x: 380, y: 22}, team: 'home', playerID: 1},
    {helmetID: 2, helmetPosition: {x: 380, y: 123}, team: 'home', playerID: 1},
    {helmetID: 3, helmetPosition: {x: 380, y: 163}, team: 'home', playerID: 1},
    {helmetID: 4, helmetPosition: {x: 226, y: 203}, team: 'home', playerID: 1, isRusher: true},
    {helmetID: 5, helmetPosition: {x: 430, y: 203}, team: 'home', playerID: 1},
    {helmetID: 6, helmetPosition: {x: 380, y: 203}, team: 'home', playerID: 1},
    {helmetID: 7, helmetPosition: {x: 280, y: 243}, team: 'home', playerID: 1},
    {helmetID: 8, helmetPosition: {x: 380, y: 243}, team: 'home', playerID: 1},
    {helmetID: 9, helmetPosition: {x: 380, y: 283}, team: 'home', playerID: 1},
    {helmetID: 10, helmetPosition: {x: 380, y: 323}, team: 'home', playerID: 1},
    {helmetID: 11, helmetPosition: {x: 300, y: 435}, team: 'home', playerID: 1},

    {helmetID: 12, helmetPosition: {x: 60, y: 0}, team: 'away', playerID: 1},
    {helmetID: 13, helmetPosition: {x: 120, y: 50}, team: 'away', playerID: 1},
    {helmetID: 14, helmetPosition: {x: 75, y: 110}, team: 'away', playerID: 1},
    {helmetID: 15, helmetPosition: {x: 60, y: 170}, team: 'away', playerID: 1},
    {helmetID: 16, helmetPosition: {x: 60, y: 220}, team: 'away', playerID: 1},
    {helmetID: 17, helmetPosition: {x: 75, y: 280}, team: 'away', playerID: 1},
    {helmetID: 18, helmetPosition: {x: 120, y: 340}, team: 'away', playerID: 1},
    {helmetID: 19, helmetPosition: {x: 60, y: 435}, team: 'away', playerID: 1},
    {helmetID: 20, helmetPosition: {x: 170, y: 195}, team: 'away', playerID: 1},
    {helmetID: 21, helmetPosition: {x: 380, y: 230}, team: 'away', playerID: 1},
    {helmetID: 22, helmetPosition: {x: 450, y: 160}, team: 'away', playerID: 1},
]

export const PlayersOnPitchReducer = (state = players, action) => {
    switch(action.type) {
        case ActionTypes.CHANGE_PLAYER:
            var newPlayer = action.payload; // helmetID, playerID
            var newState = [...state]
            console.log(newState, newPlayer)
            newState.find(selectedHelmet => selectedHelmet.helmetID === newPlayer.helmetID).playerID = newPlayer.playerID;
            newState.find(selectedHelmet => selectedHelmet.helmetID === newPlayer.helmetID).playerNFLPosition = newPlayer.playerPosition;
            newState.find(selectedHelmet => selectedHelmet.helmetID === newPlayer.helmetID).playerName = newPlayer.playerName;
            return newState;
        case ActionTypes.CHANGE_PLAYERS_ON_FIELD:
            var newState = [...state]
            var newplayers = action.payload.playerIDs
            if(action.payload.team === 'home'){
                newState.filter(selectedSide => selectedSide.team === action.payload.team).map((player, i) => {
                    player.playerID = newplayers[i].playerNFLID;
                    player.playerNFLPosition = newplayers[i].playerPosition;
                    player.playerName = newplayers[i].playerName;
                });
            }
            else if(action.payload.team === 'away'){
                newState.filter(selectedSide => selectedSide.team === action.payload.team).map((player, i) => {
                    player.playerID = newplayers[i].playerNFLID;
                    player.playerName = newplayers[i].playerName;
                    player.playerNFLPosition = newplayers[i].playerPosition;
                });
            }            
            return newState;
        case ActionTypes.CHANGE_PLAYER_POSITION:
            var newState = [...state]
            var helmetID = action.payload.helmetID
            var newPosition = action.payload.newPosition
            newState.find(player => player.helmetID === helmetID).helmetPosition = newPosition
            return newState
        default:
            return state;
    }
}