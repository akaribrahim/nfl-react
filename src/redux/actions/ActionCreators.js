import * as ActionTypes from './ActionTypes';


export const changePlayer = (settedPlayerID, selectedHelmetID) => ({
    type: ActionTypes.CHANGE_PLAYER,
    payload: {
        playerID: settedPlayerID,
        helmetID : selectedHelmetID
    }
});