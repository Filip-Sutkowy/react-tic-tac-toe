import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faGamepad, faHome } from '@fortawesome/fontawesome-free-solid';

import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';

const navigationItems = (props) => {

	return (
		<ul className={classes.NavigationItems}>
			<NavigationItem link='/' exact>
			<FontAwesomeIcon icon={faHome} /> Home</NavigationItem>
			<NavigationItem link='/game'>
				<FontAwesomeIcon icon={faGamepad} /> Game</NavigationItem>
			<NavigationItem link='scores'>
				<FontAwesomeIcon icon={faTrophy} /> Scores</NavigationItem>
		</ul>
	);
};

export default navigationItems;