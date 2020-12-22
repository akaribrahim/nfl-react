import { useLayoutEffect, useState, useEffect } from "react";

export default function usePitchSize() {
	
	const [size, setSize] = useState([1200,579]);
	useEffect(() => {
		const element = document.getElementById("pitchBox").getBoundingClientRect();
		setSize([element.width, element.height])
	}, [])
	useLayoutEffect(() => {
		function updateSize() {
			const element = document.getElementById("pitchBox").getBoundingClientRect();
			setSize([element.width, element.height]);
		}
		window.addEventListener("resize", updateSize);
		updateSize();
		return () => window.removeEventListener("resize", updateSize);
	}, []);
	return [Math.round(size[0]), size[1]];
}
