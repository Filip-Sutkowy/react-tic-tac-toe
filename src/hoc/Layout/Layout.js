import React, { Component, Fragment } from 'react';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import classes from './Layout.module.css';

class Layout extends Component {

	render() {

		return (
			<Fragment>
				<Toolbar />
				<main className={classes.Main}>
					{this.props.children}
				</main>
			</Fragment>
		);
	}
}

export default Layout;