import * as actionTypes from './actionTypes';
import axios from '../../axios-configured';

export const fetchScoresStart = () => {
	return {
		type: actionTypes.FETCH_SCORES_START
	}
}

export const fetchScoresSuccess = (scores) => {
	return {
		type: actionTypes.FETCH_SCORES_SUCCESS,
		scores: scores
	}
}

export const fetchScoresFail = () => {
	return {
		type: actionTypes.FETCH_SCORES_FAIL
	}
}

export const postScoreStart = () => {
	return {
		type: actionTypes.POST_SCORE_START
	}
}

export const postScoreSuccess = (scores) => {
	return {
		type: actionTypes.POST_SCORE_SUCCESS,
		scores: scores
	}
}

export const postScoreFail = () => {
	return {
		type: actionTypes.POST_SCORE_FAIL
	}
}

export const postScore = (board, time) => {
	return dispatch => {
		dispatch(postScoreStart());
		axios.post('/scores/'+board+'.json', { time: time })
			.then(res => {
				dispatch(postScoreSuccess());
				dispatch(fetchScores());
			})
			.catch(err => {
				dispatch(postScoreFail());
				dispatch(fetchScores());
			});
	}
}

export const fetchScores = () => {
	return dispatch => {
		dispatch(fetchScoresStart());
		axios.get('/scores.json')
			.then(res => {
				const scores = {}
				Object.keys(res.data).map(key => {
					const nestedObject = res.data[key];
					const properties = Object.keys(nestedObject).map(nestedKey => {
						return nestedObject[nestedKey].time/1000;
					});
					scores[key] = properties;
					return null;
				});
				dispatch(fetchScoresSuccess(scores));
			})
			.catch(err => {
				dispatch(fetchScoresFail());
			});
	}
}
