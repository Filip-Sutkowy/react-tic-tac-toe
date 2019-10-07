import React from 'react';

import classes from './GameControls.module.css';
import * as UI from '../../UI/index';

const gameControls = (props) => {

	return (
		<div className={classes.GameControls}>
			<div className={classes.item}>Player: {props.player}</div>
			<button
				className={classes.item+" "+classes.Button}
				onClick={props.abortGame}>ABORT</button>
		</div>
	);
}

export default gameControls;