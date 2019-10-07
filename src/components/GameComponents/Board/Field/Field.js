import React from 'react';

import classes from './Field.module.css';

const Field = (props) => {

	let style = {
		width: (100/props.size)+"%",
		height: (100/props.size)+"%",
		borderColor: props.enabled ? "white" : "black"
	}

	let classlist = [classes.Field];
	let onClick = null;
	let displayChar = '';

	if(props.status === 'x') {
		classlist.push(classes.x);
		displayChar = <img src='img/x.png' />;
	} else if(props.status === 'o') {
		classlist.push(classes.o);
		displayChar = <img src='img/o.png' />;
	} else if(props.enabled) {
		classlist.push(classes.empty);
		onClick = props.onClick;
	}


	return (
		<div
			className={classlist.join(' ')}
			style={style}
			onClick={onClick}
		>
			{displayChar}
		</div>
	);
}

export default Field;