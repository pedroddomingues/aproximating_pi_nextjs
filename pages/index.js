import { useState, useEffect, useRef } from 'react'
import Head from 'next/head'

import styles from '../styles/Home.module.css'
import { Canvas } from '../components/Canvas'
import { PopoverColorPicker } from '../components/PopoverColorPicker'
import { useCanvas } from '../providers/canvas'

export default function Home() {
	const [totalPointsCount, setTotalPointsCount] = useState(0);
	const [circlePointsCount, setCirclePointsCount] = useState(0);
	const [counter, setCounter] = useState(0);
	const stop = useRef(true);

	const { drawPoint, resetCanvas, squareColor, setSquareColor, circleColor, setCircleColor, pointColor, setPointColor } = useCanvas();

	const startCounting = () => {
		const x = Math.round(Math.random() * 500);
		const y = Math.round(Math.random() * 500);
		if (((x - 250) * (x - 250)) + ((y - 250) * (y - 250)) <= 250 * 250) {
			setCirclePointsCount(circlePointsCount + 1);
		}
		stop.current = false;
		setTotalPointsCount(totalPointsCount + 1);
		drawPoint(x, y);
	}

	const stopCounting = () => {
		setCounter(0);
		stop.current = true;
	}

	const resetCounting = () => {
		stop.current = true;
		setCounter(0);
		setCirclePointsCount(0);
		setTotalPointsCount(0);
		resetCanvas();
	}

	useEffect(() => {
		if (!stop.current)
		{
			setCounter(counter + 1);
			startCounting();
		} else {
			stop.current = true;
		}
	}, [totalPointsCount]);

	return (
		<div className={styles.container}>
			<Head>
				<title>Aproximating pi!</title>
				<meta name="description" content="Monte Carlo method to estimate the value of pi" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main}>
				<h1 className={styles.title}>
					Aproximating pi!
				</h1>
				<div className={styles.content}>
					<div className={styles.canvasdiv}>
						<Canvas />
					</div>
					<div className={styles.configs}>
						<div className={styles.stats}>
							<p className={[styles.commonFields, styles.label]}>Total Points</p>
							<p className={[styles.commonFields, styles.value]}>{totalPointsCount}</p>
						</div>
						<div className={styles.stats}>
							<p className={[styles.commonFields, styles.label]}>Circle Points</p>
							<p className={[styles.commonFields, styles.value]}>{circlePointsCount}</p>
						</div>
						<div className={styles.stats}>
							<p className={[styles.commonFields, styles.pilabel]}>pi</p>
							<p className={[styles.commonFields, styles.pivalue]}>{totalPointsCount ? (4 * circlePointsCount / totalPointsCount).toFixed(15) : ""}</p>
						</div>
						<div className={styles.buttons}>
							<button onClick={startCounting}>Start</button>
							<button onClick={stopCounting}>Stop</button>
							<button onClick={resetCounting}>Reset</button>
						</div>
						<div className={styles.colors}>
							<p>Square</p>
							<PopoverColorPicker color={squareColor} onChange={setSquareColor} />
						</div>
						<div className={styles.colors}>
							<p>Circle</p>
							<PopoverColorPicker color={circleColor} onChange={setCircleColor} />
						</div>
						<div className={styles.colors}>
							<p>Points</p>
							<PopoverColorPicker color={pointColor} onChange={setPointColor} />
						</div>
					</div>
				</div>
			</main>
		</div>
	)
}
