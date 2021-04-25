import { useLayoutEffect, useState, useEffect } from "react";

export default function useElementSize(elementID, defaultSize) {
	const [size, setSize] = useState(defaultSize)
	useEffect(() => {
		const element = document.getElementById(elementID).getBoundingClientRect();
		setSize([element.width, element.height])
	}, [])
	useLayoutEffect(() => {
		function updateSize() {
			const element = document.getElementById(elementID).getBoundingClientRect();
			setSize([element.width, element.height]);
		}
		window.addEventListener("resize", updateSize);
		return () => window.removeEventListener("resize", updateSize);
	}, []);
	return [Math.round(size[0]), size[1]];
}
