import React from 'react';
import { connect } from 'react-redux';

import Settings from '../../components/GameComponents/Settings/Settings';
import Board from '../../components/GameComponents/Board/Board';
import GameControls from '../../components/GameComponents/GameControls/GameControls';
import * as UI from '../../components/UI/index';
import * as actions from '../../store/actions/index';

export class Game extends React.Component {

	state = {
		boardSize: 3,
		boardFields: [],
		isPlaying: false,
		player: 'x',
		showWinner: false,
		winner: null,
		startTime: null,
		lastPlayTime: null
	}

	initState = {};

	componentDidMount() {
		this.createBoard(3);
		this.initState = {...this.state};
	}

	createBoard = (size) => {
		const board = [];

		for ( let i = 0; i < Math.pow(size, 2); i++) {
			board.push(null);
		}

		this.setState({boardFields: board});
	}

	boardSizeChangeHandler = (event) => {
		const newSize = parseInt(event.target.value);
		this.setState({boardSize: newSize});
		this.createBoard(newSize);
	}

	boardSizeCrementHandler = (num) => {
		const newSize = parseInt(parseInt(this.state.boardSize) + parseInt(num));
		if(newSize >= 1) {
			this.setState({boardSize: newSize});
			this.createBoard(newSize);
		}
	}

	fieldClickHandler = (index) => {
		const newBoard = [...this.state.boardFields];

		newBoard[index] = this.state.player;

		let newPlayer = 'o';
		if(this.state.player === 'o') {
			newPlayer = 'x';
		}

		let isPlaying = true;
		let showWinner = false;
		let winner = null;
		let time = Date.now() - this.state.startTime;

		if(newBoard.join('').length === Math.pow(this.state.boardSize, 2)) {
			isPlaying = false;
			showWinner = true;
			winner = null;
		}

		if( this.checkWinner(newBoard, index) ) {
			isPlaying = false;
			showWinner = true;
			winner = this.state.player;
		}

		this.setState({boardFields: newBoard, player: newPlayer, isPlaying: isPlaying, showWinner: showWinner, winner: winner, lastPlayTime: time});
	}

	checkWinner = (board, index) => {
		const size = this.state.boardSize;
		const colNum = index % size;
		const rowNum = (index-colNum) / size;

		// ROW CHECK
		let lastChar = board[rowNum*size];
		let status = false;

		if(lastChar !== null) {
			for ( let i = 1; i < size; i++ ) {
				if(lastChar !== board[ rowNum*size + i ]) {
					status = false;
					break;
			} else status = true;
			}
		}

		if(status) return true;

		//COLUMN CHECK
		lastChar = board[ colNum ];

		if(lastChar !== null) {
			for ( let i = 1; i < size; i++ ) {
				if(lastChar !== board[ i*size + colNum ]) {
					status = false;
					break;
			} else status = true;
			}
		}

		if(status) return true;

		// DIAGONAL CHECK LEFT
		lastChar = board[ 0 ];

		if(lastChar !== null) {
			for ( let i = 1; i < size; i++ ) {
				if(lastChar !== board[ i*size + i ]) {
					status = false;
					break;
			} else status = true;
			}
		}

		if(status) return true;

		//DIAGONAL CHECK RIGHT
		lastChar = board[ size-1 ];

		if(lastChar !== null) {
			for ( let i = 2; i <= size; i++ ) {
				if(lastChar !== board[ i*(size-1) ]) {
					status = false;
					break;
			} else status = true;
			}
		}

		if(status) return true;



		return false;
	}

	startGameHandler = () => {
		if(this.state.boardSize >= 1) {
			this.createBoard(this.state.boardSize);
			this.setState({isPlaying : true, startTime: Date.now()});
		}
	}

	abortGameHandler = () => {
		this.setState({
			...this.initState,
			boardSize: this.state.boardSize
		});
		this.createBoard(this.state.boardSize);
	}

	postScoreHandler = () => {
		const board = this.state.boardSize+"x"+this.state.boardSize;
		this.props.postScore(board, this.state.lastPlayTime);
		this.setState({showWinner: false});
	}

	render() {

		let controls = (
			<Settings
				boardSize={this.state.boardSize}
				onBoardSizeChange={(event) => this.boardSizeChangeHandler(event)}
				onStartGame={this.startGameHandler}
				onSizeCrement={this.boardSizeCrementHandler}
			/>
		);

		if(this.state.isPlaying) {
			controls = <GameControls player={this.state.player} abortGame={this.abortGameHandler} />;
		}

		let modalContent = (
			<div style={{textAlign: "center"}}>
				<h1>{this.state.winner ? "Winner is: " + this.state.winner : "Tie!" }</h1>
				<p>Playtime: {this.state.lastPlayTime/1000}s</p>
				{this.state.winner ? <button onClick={this.postScoreHandler}>Post your score!</button> : null}
			</div>);

		if(this.props.loading) {
			modalContent = <UI.Spinner />;
		}


		return (
			<div>
				{controls}
				<Board enabled={this.state.isPlaying} size={this.state.boardSize} fields={this.state.boardFields} onFieldClick={this.fieldClickHandler} />
				<UI.Modal show={this.state.showWinner || this.props.loading} modalClosed={() => this.setState({showWinner: false})}>
					{modalContent}
				</UI.Modal>
			</div>
		);
	}
}

const mapStateToProps = state => {
  return {
		loading: state.scores.loading
  }
}

const mapDispatchToProps = dispatch => {
	return {
		postScore: (board, time) => dispatch(actions.postScore(board, time))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);