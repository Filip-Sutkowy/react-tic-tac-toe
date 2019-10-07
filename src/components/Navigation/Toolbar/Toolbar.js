import React from 'react';

import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './Toolbar.module.css';

const toolbar = (props) => {

	return (
		<nav className={classes.Toolbar}>
				<NavigationItems />
		</nav>
	);
};

export default toolbar;