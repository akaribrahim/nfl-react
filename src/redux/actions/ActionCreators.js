import * as ActionTypes from './ActionTypes';


export const changePlayer = (settedPlayerID, selectedHelmetID) => ({
    type: ActionTypes.CHANGE_PLAYER,
    payload: {
        playerID: settedPlayerID,
        helmetID : selectedHelmetID
    }
});


export const changeQuarter = (selectedQuarter) => ({
    type: ActionTypes.CHANGE_QUARTER,
    payload: {
        newQuarter: selectedQuarter
    }
});
export const changeYard = (selectedYard) => ({
    type: ActionTypes.CHANGE_YARD,
    payload: {
        newYard: selectedYard
    }
});
export const changeDown = (selectedDown) => ({
    type: ActionTypes.CHANGE_DOWN,
    payload: {
        newDown: selectedDown
    }
});
export const changeHome = (selectedTeam) => ({
    type: ActionTypes.CHANGE_HOME,
    payload: {
        newHome: selectedTeam
    }
})
export const changeAway = (selectedTeam) => ({
    type: ActionTypes.CHANGE_AWAY,
    payload: {
        newAway: selectedTeam
    }
})