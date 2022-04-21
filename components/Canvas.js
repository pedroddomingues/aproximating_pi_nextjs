import React, { useEffect } from "react";
import { useCanvas } from "../providers/canvas";

export function Canvas() {
	const {
		canvasRef,
		prepareCanvas,
		drawCircle
	} = useCanvas();

	useEffect(() => {
		prepareCanvas();
		drawCircle();
	}, []);

	return (
		<canvas
			ref={canvasRef}
		/>
	);
}
