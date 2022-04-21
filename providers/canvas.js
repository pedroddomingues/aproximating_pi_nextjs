import React, { useContext, useRef, useState, useEffect } from "react";

const CanvasContext = React.createContext();

export const CanvasProvider = ({ children }) => {
	const [circleColor, setCircleColor] = useState("#C1F8CF");
	const [squareColor, setSquareColor] = useState("#488FB1");
	const [pointColor, setPointColor] = useState("#4FD3C4");
	const canvasRef = useRef(null);
	const contextRef = useRef(null);

	const prepareCanvas = () => {
		const canvas = canvasRef.current;
		canvas.width = 500 * 2;
		canvas.height = 500 * 2;
		canvas.style.width = `${500}px`;
		canvas.style.height = `${500}px`;
		const context = canvas.getContext("2d");
		context.scale(2, 2);
		context.fillStyle = `${squareColor}`;
		context.fillRect(0, 0, canvas.width, canvas.height);
		contextRef.current = context;
	};

	const resetCanvas = () => {
		const canvas = canvasRef.current;
		const context = canvas.getContext("2d");
		context.fillStyle = `${squareColor}`;
		context.fillRect(0, 0, canvas.width, canvas.height);
		context.beginPath();
		context.arc(250, 250, 250, 0, 2 * Math.PI);
		context.fillStyle = `${circleColor}`;
		context.fill();
	}

	const drawCircle = () => {
		const canvas = canvasRef.current;
		const context = canvas.getContext("2d")
		context.beginPath();
		context.arc(250, 250, 250, 0, 2 * Math.PI);
		context.fillStyle = `${circleColor}`;
		context.fill();
	}

	const drawPoint = (x, y) => {
		const canvas = canvasRef.current;
		const context = canvas.getContext("2d");
		context.fillStyle = `${pointColor}`;
		context.fillRect(x, y, 2, 2);
	}

	useEffect(() => {
		resetCanvas();
	}, [squareColor, circleColor, pointColor]);

	return (
		<CanvasContext.Provider
			value={{
				canvasRef,
				contextRef,
				prepareCanvas,
				drawCircle,
				drawPoint,
				circleColor,
				setCircleColor,
				squareColor,
				setSquareColor,
				pointColor,
				setPointColor,
				resetCanvas
			}}
		>
			{children}
		</CanvasContext.Provider>
	);
};

export const useCanvas = () => useContext(CanvasContext);
