import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
	scores : {},
	loading: false
};


const fetchScoresStart = (state, action) => {
	return updateObject(state, {loading: true});
}

const fetchScoresSuccess = (state, action) => {
	return updateObject(state, {loading: false, scores: action.scores});
}

const fetchScoresFail = (state, action) => {
	return updateObject(state, {loading: false});
}

const postScoreStart = (state, action) => {
	return updateObject(state, {loading: true});
}

const postScoreSuccess = (state, action) => {
	return updateObject(state, {loading: false});
}

const postScoreFail = (state, action) => {
	return updateObject(state, {loading: false});
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.FETCH_SCORES_START: return fetchScoresStart(state, action);
		case actionTypes.FETCH_SCORES_SUCCESS: return fetchScoresSuccess(state, action);
		case actionTypes.FETCH_SCORES_FAIL: return fetchScoresFail(state, action);
		case actionTypes.POST_SCORE_START: return postScoreStart(state, action);
		case actionTypes.POST_SCORE_SUCCESS: return postScoreSuccess(state, action);
		case actionTypes.POST_SCORE_FAIL: return postScoreFail(state, action);
		default: return state;
	}
};

export default reducer;