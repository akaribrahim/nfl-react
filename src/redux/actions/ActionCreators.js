import * as ActionTypes from './ActionTypes';
import axios from 'axios'

export const getTeams = (teams) => ({
    type: ActionTypes.GET_TEAMS,
    payload: {
        teams: teams,
    }
})

export const fetchTeams = () => {
    return (dispatch) => {
        axios.get('https://nflrestapi.herokuapp.com/api/teams/')
            .then(response => {
                const teams = response.data;
                dispatch(getTeams(teams));
            })
            .catch(error => {
                const errMess = error.message
            })
    }
}




export const setHomePlayers = (players, side) => ({
    type: ActionTypes.SET_HOME_PLAYERS,
    payload: {
        players: players,
    }
})
export const setAwayPlayers = (players, side) => ({
    type: ActionTypes.SET_AWAY_PLAYERS,
    payload: {
        players: players,
    }
})

export const fetchPlayers = (selectedTeam, selectedSeason, side) => {
    return (dispatch) => {
        axios.get(`https://nflrestapi.herokuapp.com/api/players/?season=${selectedSeason}&team=${selectedTeam}`)
            .then(response => {
                const players = response.data;
                side === 'home' ? dispatch(setHomePlayers(players)) : dispatch(setAwayPlayers(players))
                dispatch(changeFieldPlayers(players.slice(0,12), side))
                dispatch(changeLoadingStatus(false, side))
                dispatch(changeSeasonLoadingStatus(false))
            })
            .catch(error => {
                const errMess = error.message
            })
    }
}
export const changeFieldPlayers = (newPlayerIDs, side) => ({
    type: ActionTypes.CHANGE_PLAYERS_ON_FIELD,
    payload: {
        playerIDs: newPlayerIDs,
        team: side
    }
})

export const changePlayerPosition = (helmetID, newPosition, newCalculatedPosition) => ({
    type: ActionTypes.CHANGE_PLAYER_POSITION,
    payload: {
        helmetID,
        newPosition,
        newCalculatedPosition
    }
})

export const changePlayer = (settedPlayerID, selectedHelmetID, playerName, playerPosition) => ({
    type: ActionTypes.CHANGE_PLAYER,
    payload: {
        playerID: settedPlayerID,
        helmetID : selectedHelmetID,
        playerPosition,
        playerName
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
export const changeHome = (selectedTeamShort, selectedTeam, color) => ({
    type: ActionTypes.CHANGE_HOME,
    payload: {
        newHomeShort: selectedTeamShort,
        newHome: selectedTeam,
        color
    }
})
export const changeAway = (selectedTeamShort, selectedTeam, color) => ({
    type: ActionTypes.CHANGE_AWAY,
    payload: {
        newAwayShort: selectedTeamShort,
        newAway: selectedTeam,
        color
    }
})
export const changeTemperature = (selectedTemperature) => ({
    type: ActionTypes.CHANGE_TEMPERATURE,
    payload: {
        newTemperature: selectedTemperature
    }
})
export const changeWeatherCondition = (selectedCondition) => ({
    type: ActionTypes.CHANGE_WEATHER_CONDITION,
    payload: {
        newCondition: selectedCondition
    }
})
export const changeLoadingStatus = (status, side) => ({
    type: ActionTypes.CHANGE_LOADING_STATUS,
    payload: {
        isLoading: status,
        side: side
    }
})
export const changeSeason = (selectedSeason) => ({
    type: ActionTypes.CHANGE_SEASON,
    payload: {
        newSeason: selectedSeason
    }
})
export const changeSeasonLoadingStatus = (isLoading) => ({
    type: ActionTypes.CHANGE_SEASON_LOADING_STATUS,
    payload: {
        isSeasonLoading: isLoading
    }
})
export const changeRusherDirection = (rusherDirection) => ({
    type: ActionTypes.CHANGE_RUSHER_DIRECTION,
    payload: {
        rusherDirection
    }
})
export const changeBallPosition = (ballPosition) => ({
    type: ActionTypes.CHANGE_BALL_POSITION,
    payload: {
        ballPosition
    }
})
