import React, {useEffect, useRef} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import { Zoom } from "@material-ui/core";

const useStylesBootstrap = makeStyles((theme) => ({
    arrow: {
        color: '#232a34',
    },
	tooltip: {
        backgroundColor: '#232a34',
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
