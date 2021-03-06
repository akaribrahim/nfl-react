import React, {useEffect} from 'react'
import DraggableHelmet from "../Helmet/DraggableHelmet";
import { useDispatch , useSelector} from 'react-redux'
import { changeLoadingStatus, fetchPlayers } from '../../../redux/actions/ActionCreators';

function AwayTeamPlayers() {
    const playersOnPitch = useSelector(state => state.playersOnPitch.filter(selected => selected.team === 'away'))
    const awayTeam = useSelector(state => state.scoreBoardState.awayTeamShort)
    const season = useSelector(state => state.scoreBoardState.season)
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(changeLoadingStatus(true, 'away'))
        dispatch(fetchPlayers(awayTeam, season, 'away'))
    }, [awayTeam, season, dispatch])
    return (
        <div id='awayTeamBox' style={{width: '50%', height: '100%'}}>
            {playersOnPitch.map((player) => (
                <DraggableHelmet
                    key={player.helmetID}
                    helmetID={player.helmetID}
                    helmetPosition={player.helmetPosition}
                    calculatedPosition={player.calculatedPosition}
                    playerID = {player.playerID}
                    side={'away'}
                />
            ))}
        </div>
    )
}

export default AwayTeamPlayers
