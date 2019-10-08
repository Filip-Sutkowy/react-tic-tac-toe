import React from 'react';
import { connect } from 'react-redux';

import * as UI from '../../components/UI/index';
import classes from './Scores.module.css';
import * as actions from '../../store/actions/index';

class Scores extends React.Component {

	componentDidMount() {
		this.props.fetchScores();
	}

	render() {

		let boards = <UI.Spinner />;

		if( !this.props.loading ) {
			boards = Object.keys(this.props.scores).map(key => {
				const times = this.props.scores[key].sort();
				const board = (
					<div key={key} className={classes.Board}>
						<h4>Board {key}</h4>
						<ol>
							{times.map(time => <li key={key+time}>{Number(time).toFixed(2)}s</li>)}
						</ol>
					</div>);
				return board;
			});
		}

		return (
      <div className={classes.Scores}>
			<h1>Best Times:</h1>
			{boards}
      </div>
		);
	};
};

const mapStateToProps = state => {
  return {
		scores: state.scores.scores,
		loading: state.scores.loading
  }
}

const mapDispatchToProps = dispatch => {
	return {
		fetchScores: () => dispatch(actions.fetchScores()),
		postScore: (board, time) => dispatch(actions.postScore(board, time))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Scores);