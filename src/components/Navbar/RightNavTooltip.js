import React, {useEffect, useRef} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import { useSelector } from 'react-redux'
import { setRef, Zoom } from "@material-ui/core";

const useStylesBootstrap = makeStyles((theme) => ({
    arrow: {
        color: '#575b4a',
    },
	tooltip: {
        backgroundColor: '#575b4a',
        textAlign: "center",
        fontSize: '17px',
        width: '150px',
	},
}));

export default function RightNavTooltip(props) {
	const classes = useStylesBootstrap();
	return (
		<Tooltip title={props.title} arrow classes={classes} {...props} TransitionComponent={Zoom} placement='left'></Tooltip>
	);
}
