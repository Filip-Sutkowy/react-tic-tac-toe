import React from 'react';

import classes from './Scores.module.css';

export class Scores extends React.Component {

	//dummy values, will be fixed

	state = {
		scores : {
			x3 : [
				512, 1739, 1832, 2521 
			]
		}
	}
	render() {

		return (
      <div className={classes.Scores}>
			<h1>Best Times:</h1>
			<div className={classes.Board}>
				<h4>Board 3x3</h4>
				<ol>
					{this.state.scores.x3.map(score => <li>{score/1000}s</li>)}
				</ol>
			</div>
			<div className={classes.Board}>
				<h4>Board 4x4</h4>
				<ol>
					{this.state.scores.x3.map(score => <li>{score/1000}s</li>)}
				</ol>
			</div>
      </div>
		);
	};
};

export default Scores;