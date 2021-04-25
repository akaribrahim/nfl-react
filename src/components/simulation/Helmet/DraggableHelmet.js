import React, { useState, useRef, useEffect } from "react";
import Draggable from "react-draggable";
import Helmet from "./Helmet";
import useElementSize from "../Hooks/elementSizeHook";
import CustomTooltip from "./CustomTooltip";
import ReactLoading from "react-loading";
import { changePlayerPosition } from "../../../redux/actions/ActionCreators";
import { useDispatch, useSelector } from "react-redux";

const HELMET_SIZE = 32;
const DraggableHelmet = (props) => {
   const [position, setPosition] = useState(props.helmetPosition);
   const [calculatedPosition, setCalculatedPosition] = useState(props.helmetPosition);
   const [isDialogOpen, setIsDialogOpen] = useState(false);
   const [isDragging, setIsDragging] = useState(false);
   const [isHover, setIsHover] = useState(false);
   const [homeSideWidth, homeSideHeight] = useElementSize("homeTeamBox", [500, 500]);
   const [labelWidth, labelHeight] = useElementSize("home-side-label", [100, 500]);
   const [bounds, setBounds] = useState({});
   const isHomeLoading = useSelector((state) => state.scoreBoardState.isHomePlayersLoading);
   const isAwayLoading = useSelector((state) => state.scoreBoardState.isAwayPlayersLoading);
   const ref = useRef();
   const dispatch = useDispatch();

   useEffect(() => {
      setBounds({
         right: homeSideWidth - HELMET_SIZE,
         bottom: homeSideHeight - 50,
      });
      setPosition({
         x: Math.round(position.x),
         y: Math.round(position.y),
      });
   }, [homeSideWidth, labelWidth]);

   useEffect(() => {
      dispatch(changePlayerPosition(props.helmetID, calculatedPosition));
   }, [calculatedPosition]);

   const handleDrag = () => {
      setIsDragging(true);
   };
   const handleStop = () => {
      const [x, y] = [ref.current.state.x, ref.current.state.y];
      setPosition({ x: x, y: y });
      if (props.side === "home") {
         setCalculatedPosition({ x: Math.round(x + HELMET_SIZE / 2), y: Math.round(homeSideHeight - y - 25) });
      } else {
         setCalculatedPosition({
            x: Math.round(x + HELMET_SIZE / 2 + homeSideWidth),
            y: Math.round(homeSideHeight - y - 25),
         });
      }
      setTimeout(() => {
         setIsDragging(false);
      }, 100);
   };
   const handleClick = (isDialogOpen) => {
      setIsDialogOpen(isDialogOpen);
      setIsHover(false);
   };

   return (
      <Draggable
         ref={ref}
         position={position}
         onDrag={handleDrag}
         onStop={handleStop}
         disabled={isDialogOpen}
         bounds={{ top: 0, left: 0, right: bounds.right, bottom: bounds.bottom }}
      >
         <div
            onMouseOver={() => {
               setIsHover(true);
            }}
            onMouseLeave={() => {
               setIsHover(false);
            }}
            style={{ position: "absolute" }}
         >
            {(isHomeLoading && props.side === "home") || (isAwayLoading && props.side === "away") ? (
               <ReactLoading type={"bubbles"} color="#000" />
            ) : (
               <CustomTooltip
                  open={!isDialogOpen && isHover && !isDragging}
                  placement="top-start"
                  side={props.side}
                  player_id={props.playerID}
                  isRusher={props.isRusher}
               >
                  <div>
                     <Helmet
                        side={props.side}
                        helmetID={props.helmetID}
                        getDialogStatus={handleClick}
                        isDragging={isDragging}
                        isRusher={props.isRusher}
                     />
                  </div>
               </CustomTooltip>
            )}
         </div>
      </Draggable>
   );
};

export default DraggableHelmet;
