import React from "react";
import styled from "styled-components";
import wavesOpacity from '.././../shared/images/wavesOpacity.svg'
const CustomShapeDivider = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	overflow: hidden;
	line-height: 0;
`;

function Howitworks() {
	return (
		<div style={{ height: "100vh", width: "100%", display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '2rem'}}>
			How It Works
		</div>
	);
}

export default Howitworks;
