import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import classes from './Home.module.css';
import Board from '../../components/GameComponents/Board/Board';

export class Home extends React.Component {

	render() {

		return (
      <div className={classes.Home}>
				<Board enabled={false} size={3} fields={[null, null, 'x', 'o', 'x', null, 'x', null, 'o']} />
        <p>
          Just Another Tic Tac Toe Game
        </p>
				<Link
					className={classes.PlayLink}
					to='/game'>Let's Play!</Link>
        <a href="https://github.com/Filip-Sutkowy/react-tic-tac-toe"
          target="_blank"
          rel="noopener noreferrer"
        >
					<FontAwesomeIcon icon={faGithub} /> Github
        </a>
      </div>
		);
	};
};

export default Home;