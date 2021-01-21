import React, { useState, useRef, useEffect } from "react";
import Draggable from "react-draggable";
import Helmet from "./Helmet";
import usePitchSize from "../Hooks/pitchSizeHook";
import CustomTooltip from "./CustomTooltip";
import { useSelector } from 'react-redux'
import ReactLoading from 'react-loading'


const DraggableHelmet = (props) => {
	const [position, setPosition] = useState(props.helmetPosition);
	const [calculatedPosition, setCalculatedPosition] = useState(props.helmetPosition);
	const [isDialogOpen, setIsDialogOpen] = useState(false);
	const [isDragging, setIsDragging] = useState(false);
	const [isHover, setIsHover] = useState(false);
	const ref = useRef();
	const [pitchWidth, pitchHeight] = usePitchSize();
	const [bounds, setBounds] = useState({});
	const [rate, setRate] = useState(position.x / pitchWidth);
	const isHomeLoading = useSelector(state => state.scoreBoardState.isHomePlayersLoading)
	const isAwayLoading = useSelector(state => state.scoreBoardState.isAwayPlayersLoading)
	console.log('helmetID',props.helmetID, position)
	useEffect(() => {
		setRate(position.x / pitchWidth);
	}, [position]);
	useEffect(() => {
		setBounds({
			right:pitchWidth/2 - 30,
			bottom:pitchHeight - 150
		})
		setPosition({
			x: Math.round(rate * pitchWidth),
			y: Math.round(position.y),
		});
	}, [pitchWidth]);

	const handleDrag = () => {
		var parentRect = document.getElementById("pitchBox").getBoundingClientRect();
		const [x, y] = [ref.current.state.x, ref.current.state.y];
		setPosition({ x: x, y: y });
		setCalculatedPosition({ x: x, y: parentRect.height - y });
		setIsDragging(true);
	};
	const handleStop = () => {
		setTimeout(() => {
			setIsDragging(false);
		}, 100);
	};
	const handleClick = (isDialogOpen) => {
		setIsDialogOpen(isDialogOpen);
		setIsHover(false);
	};

	return (	
		<Draggable ref={ref} position={position} onDrag={handleDrag} onStop={handleStop} disabled={isDialogOpen} 
			bounds={{top:0, left:0, right:bounds.right, bottom:bounds.bottom}}>
			<div
				onMouseOver={() => {
					setIsHover(true);
				}}
				onMouseLeave={() => {
					setIsHover(false);
				}}
				style={{ position: "absolute" }}>
				{(isHomeLoading && props.side==='home') || (isAwayLoading && props.side==='away') 
					? <ReactLoading type={"bubbles"} color="#000" /> : 
					<CustomTooltip open={!isDialogOpen && isHover && !isDragging} placement="top-start" side={props.side} player_id={props.playerID}>
						<div>
							<Helmet side={props.side} helmetID={props.helmetID} getDialogStatus={handleClick} isDragging={isDragging} />
						</div>
					</CustomTooltip>
				}
				{/* <div style={{ position: "fixed", width: "300px" }}>
						<div >{JSON.stringify(calculatedPosition)}</div>
						<div>{JSON.stringify(position)}</div>
					</div> */}
			</div>
		</Draggable>
	);
};

export default DraggableHelmet;
