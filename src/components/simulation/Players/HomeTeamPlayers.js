import React, {useEffect} from 'react'
import DraggableHelmet from "../Helmet/DraggableHelmet";
import { useDispatch , useSelector} from 'react-redux'
import { fetchPlayers } from '../../../redux/actions/ActionCreators';


function HomeTeamPlayers() {
    const playersOnPitch = useSelector(state => state.playersOnPitch.filter(selected => selected.team === 'home'))
    const homeTeam = useSelector(state => state.scoreBoardState.homeTeamShort)
    

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchPlayers(homeTeam, 'home'))
    }, [homeTeam, dispatch])
    return (
        <div id='homeTeamBox' style={{width: '50%', height: '100%'}}>
            {playersOnPitch.map((player) => (
                <DraggableHelmet
                    key={player.helmetID}
                    helmetID={player.helmetID}
                    helmetPosition={player.helmetPosition}
                    playerID = {player.playerID}
                    side= {'home'}
                />
            ))}
        </div>
    )
}

export default HomeTeamPlayers
