import React from 'react';

import classes from './Settings.module.css'

const settings = (props) => {

	return (
		<div className={classes.Settings}>
			<div className={classes.item}>
				<button
					className={classes.inputButton}
					onClick={() => props.onSizeCrement(-1)}>-</button>
				<input
					className={classes.input}
					type="number"
					min="1"
					step="1"
					value={props.boardSize}
					onChange={(event) => props.onBoardSizeChange(event)} />
				<button
					className={classes.inputButton}
					onClick={() => props.onSizeCrement(1)}>+</button>
			</div>
			<button
				className={classes.item}
				onClick={props.onStartGame}>GO!</button>
		</div>
	);
}

export default settings;