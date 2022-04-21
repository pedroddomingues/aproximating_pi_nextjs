import React, { useCallback, useRef, useState } from "react";
import { HexColorPicker } from "react-colorful";

import useClickOutside from "../utils/useClickOutside";
import styles from "../styles/PopoverColorPicker.module.css";

export const PopoverColorPicker = ({ color, onChange }) => {
	const popover = useRef();
	const [isOpen, toggle] = useState(false);

	const close = useCallback(() => toggle(false), []);
	useClickOutside(popover, close);

	return (
		<div className={styles.picker}>
			<div
				className={styles.swatch}
				style={{ backgroundColor: color }}
				onClick={() => toggle(true)}
			/>
			{isOpen && (
				<div className={styles.popover} ref={popover}>
					<HexColorPicker color={color} onChange={onChange} />
				</div>
			)}
		</div>
	);
};
