import React from 'react';

import Field from './Field/Field';
import classes from './Board.module.css';

const board = (props) => {

	const fields = props.fields.map((field ,i) => {
		return <Field key={i} size={props.size} status={field}  onClick={() => props.onFieldClick(i)} enabled={props.enabled} />;
	});

	return (
		<div
			style={{backgroundColor: props.enabled ? "black" : "gray"}}
			className={classes.Board}>
			{fields}
		</div>
	);
}

export default board;