import React, { useState, useRef, useEffect } from "react";
import Draggable from "react-draggable";
import Helmet from "./Helmet";
import usePitchSize from "../Hooks/pitchSizeHook";
import CustomTooltip from "./CustomTooltip";

const PlayerInformations = ({player}) => {
	return (
		<div style={{ margin: "5px" }}>
			<div style={{ textAlign: "center", marginBottom: "5px", fontSize: "13px" }}>{player.playerName}</div>
			<div>Position: {player.playerPosition}</div>
			<div>College: {player.playerCollege}</div>
			<div>Height: {player.playerHeight} Weight: {player.playerWeight}</div>
		</div>
	);
};

const DraggableHelmet = (props) => {
	const [position, setPosition] = useState(props.helmetPosition);
	const [calculatedPosition, setCalculatedPosition] = useState(props.helmetPosition);
	const [isDialogOpen, setIsDialogOpen] = useState(false);
	const [isDragging, setIsDragging] = useState(false);
	const [isHover, setIsHover] = useState(false);
	const ref = useRef();
	const [pitchWidth, pitchHeight] = usePitchSize();
	const [rate, setRate] = useState(position.x / pitchWidth);


	useEffect(() => {
		setRate(position.x / pitchWidth);
	}, [position]);
	useEffect(() => {
		setPosition({
			x: Math.round(rate * pitchWidth),
			y: Math.round(position.y),
		});
	}, [pitchWidth]);

	const handleStart = () => {};
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
		<Draggable ref={ref} position={position} onStart={handleStart} onDrag={handleDrag} onStop={handleStop} disabled={isDialogOpen} bounds="parent">
			<div
				onMouseOver={() => {
					setIsHover(true);
				}}
				onMouseLeave={() => {
					setIsHover(false);
				}}
				style={{ position: "absolute" }}>
				<CustomTooltip open={!isDialogOpen && isHover && !isDragging} placement="top-start" title={<PlayerInformations player={props.player}/>}>
					<div>
						<Helmet player={props.player} helmetID={props.helmetID} getDialogStatus={handleClick} isDragging={isDragging} />
					</div>
				</CustomTooltip>
					{/* <div style={{ position: "fixed", width: "300px" }}>
						<div >{JSON.stringify(calculatedPosition)}</div>
						<div>{JSON.stringify(position)}</div>
					</div> */}
			</div>
		</Draggable>
	);
};

export default DraggableHelmet;
