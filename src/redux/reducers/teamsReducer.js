


import * as ActionTypes from '../actions/ActionTypes'

export const TeamsReducer = (state = null, action) => {
    switch(action.type) {
        case ActionTypes.GET_TEAMS:
            var teams = action.payload; // teams
            return teams.teams      
        default:
            return state;
    }
}