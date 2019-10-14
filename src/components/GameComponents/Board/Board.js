import React from 'react';

import Field from './Field/Field';
import classes from './Board.module.css';

const board = (props) => {

	const fields = props.fields.map((field ,i) => {
		return <Field key={i} size={props.size} status={field}  onClick={() => props.onFieldClick(i)} enabled={props.enabled} thumbnail={props.thumbnail} />;
	});

	const classList = [classes.Board];
	if(props.thumbnail) {
		classList.push(classes.thumbnail);
	}

	const backgroundColor = props.enabled || props.thumbnail ? "black" : "gray";
	return (
		<div
			style={{backgroundColor: backgroundColor}}
			className={classList.join(' ')}>
			{fields}
		</div>
	);
}

export default board;