import PageConstant from "../constants/pageConstants";

export const pageReducer = (
	state = { actionMode: null, selectedTab: null },
	action,
) => {
	switch (action.type) {
		case PageConstant.SET_ACTION_MODE:
			return {
				...state,
				actionMode: action.payload.actionMode,
			};
		case PageConstant.CHANGE_SELECTED_TAB:
			return {
				...state,
				selectedTab: action.payload.tabName,
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
