import React, { useRef, useState } from 'react'
import Draggable from 'react-draggable'; 
import { FaFootballBall } from "react-icons/fa";
import useElementSize from '../Hooks/elementSizeHook';
import './DraggableBall.css'
import { useDispatch, useSelector } from "react-redux";
import { changeBallPosition, changePlayerPosition } from '../../../redux/actions/ActionCreators';

const BALL_SIZE = { width: 20, height: 20 }

function DraggableBall(props) {
    const [position, setPosition] = useState({ x: 490, y: 235})
    const [direction, setDirection] = useState()
    const [changeCount, setChangeCount] = useState(0)
    const [positionChange, setPositionChange] = useState(0)
    const [isGrabbing, setIsGrabbing] = useState(false)
    const [pitchWidth, pitchHeight] = useElementSize("pitch", [1000, 500]);
    const playersOnPitch = useSelector((state) => state.playersOnPitch);
    const dispatch = useDispatch();

    const handleDrag = (e, ui) => {
        const {x, y} = position;
        setPositionChange(positionChange + ui.deltaX)
        setPosition({ 
            x: x + ui.deltaX,
            y: y,
        })
    };
    const handleStop = (e, ui) => {
        console.log(positionChange)
        dispatch(changeBallPosition(position))
        playersOnPitch.map(player => {
            if((player.helmetPosition.x + positionChange) < 0 && player.team === 'home')
                return dispatch(changePlayerPosition(
                    player.helmetID, 
                    { x: 50, y: player.helmetPosition.y },
                    { x: 0, y: 0}
                ))
                
            if((player.helmetPosition.x + positionChange) > pitchWidth / 2 - 50 && player.team === 'away')
                return dispatch(changePlayerPosition(
                    player.helmetID, 
                    { x: pitchWidth / 2 - 50, y: player.helmetPosition.y },
                    { x: 0, y: 0}
                ))
            dispatch(changePlayerPosition(
                player.helmetID, 
                { x: player.helmetPosition.x + positionChange, y: player.helmetPosition.y },
                { x: 0, y: 0}
            ))
        })
        setPositionChange(0)
        setIsGrabbing(false)
        props.onChangeBallPosition()
    }
    return (
        <Draggable
            axis='x'
            grid={[ 50, 50 ]}
            position={position}
            onStart={() => setIsGrabbing(true)}
            onDrag={handleDrag}
            onStop={handleStop}
            bounds={{ left: 200 - BALL_SIZE.width / 2, right: pitchWidth - BALL_SIZE.width / 2 - 200 }}
        >
            <div className='ball' style={{ cursor: isGrabbing ? 'grabbing' : 'grab' }}>
                <FaFootballBall style={{ transform: 'rotate(45deg)' }}/>
            </div>
      </Draggable>
    )
}

export default DraggableBall
