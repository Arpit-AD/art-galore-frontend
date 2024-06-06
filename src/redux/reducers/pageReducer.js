import PageConstant from "../constants/pageConstants";

export const pageReducer = (state = { actionMode: null }, action) => {
	switch (action.type) {
		case PageConstant.SET_ACTION_MODE:
			return {
				actionMode: action.payload.actionMode,
			};
		case PageConstant.CLEAR_ERRORS:
			return {
				...state,
				error: null,
			};
		default:
			return state;
	}
};
