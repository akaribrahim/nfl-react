import * as ActionTypes from '../actions/ActionTypes'

const players = [
    {playerID: 0, playerName:"Eric Berry", jerseyNumber: 29, playerHeight: "6-0", playerWeight : "212", playerCollege: "Tennessee", playerPosition: "SS", playerTeam: "KC"},
    {playerID: 1, playerName:"Allen Bailey", jerseyNumber: 97, playerHeight: "6-3", playerWeight : "288", playerCollege: "Miami", playerPosition: "DE", playerTeam: "KC"},
    {playerID: 2, playerName:"Justin Houston", jerseyNumber: 50, playerHeight: "6-3", playerWeight : "270", playerCollege: "Georgia", playerPosition: "DE", playerTeam: "KC"},
    {playerID: 3, playerName:"Derrick Johnson", jerseyNumber: 56, playerHeight: "6-3", playerWeight : "245", playerCollege: "Texas", playerPosition: "ILB", playerTeam: "KC"},
    {playerID: 4, playerName:"Ron Parker", jerseyNumber: 38, playerHeight: "6-0", playerWeight : "206", playerCollege: "Newberry", playerPosition: "FS", playerTeam: "KC"},
    {playerID: 5, playerName:"Dee Ford", jerseyNumber: 55, playerHeight: "6-2", playerWeight : "252", playerCollege: "Auburn", playerPosition: "DE", playerTeam: "KC"},
    {playerID: 6, playerName:"Terrance Mitchel", jerseyNumber: 39, playerHeight: "5-11", playerWeight : "190", playerCollege: "Oregon", playerPosition: "CB", playerTeam: "KC"},
    {playerID: 7, playerName:"Phillip Gaines", jerseyNumber: 23, playerHeight: "6-0", playerWeight : "193", playerCollege: "Rice", playerPosition: "CB", playerTeam: "KC"},
    {playerID: 8, playerName:"Daniel Sorensen", jerseyNumber: 49, playerHeight: "6-2", playerWeight : "208", playerCollege: "Brigham Young", playerPosition: "SS", playerTeam: "KC"},
    {playerID: 9, playerName:"Marcus Peters", jerseyNumber: 22, playerHeight: "6-0", playerWeight : "197", playerCollege: "Washington", playerPosition: "CB", playerTeam: "KC"},
    {playerID: 10, playerName:"Chris Jones", jerseyNumber: 95, playerHeight: "6-6", playerWeight : "308", playerCollege: "Mississippi State", playerPosition: "DT", playerTeam: "KC"},
];





export const AwayPlayersReducer = (state = [], action) => {
    switch(action.type) {
        case ActionTypes.SET_AWAY_PLAYERS:
            console.log(action.payload)
            var players = action.payload; // players
            let newState = players.players
            return newState     
        default:
            return state;
    }
}