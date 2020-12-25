import * as ActionTypes from '../actions/ActionTypes'


const scoreBoard = {
    homeTeamShort: 'ARI',
    awayTeamShort: 'CHI',
    selectedQuarter: '1st',
    selectedYard: 10,
    selectedDown: '3rd',
    selectedTemperature: 30
}

export const ScoreBoardReducer = (state = scoreBoard, action) => {
    switch(action.type){
        case ActionTypes.CHANGE_HOME:
            return {...state, homeTeamShort: action.payload.newHome}
        case ActionTypes.CHANGE_AWAY:
            return {...state, awayTeamShort: action.payload.newAway}
        case ActionTypes.CHANGE_QUARTER:
            return {...state, selectedQuarter: action.payload.newQuarter}
        case ActionTypes.CHANGE_YARD:
            return {...state, selectedYard: action.payload.newYard}
        case ActionTypes.CHANGE_DOWN:
            return {...state, selectedDown: action.payload.newDown}
        case ActionTypes.CHANGE_TEMPERATURE:
            return {...state, selectedTemperature: action.payload.newTemperature}
        default:
            return state;
    }
}