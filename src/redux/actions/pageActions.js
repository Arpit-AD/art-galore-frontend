import PageConstant from "../constants/pageConstants";

export const setActionMode = () => async (dispatch) => {
	try {
		const pathname = window.location.pathname;
		let actionMode = "view";
		if (pathname?.includes("edit")) actionMode = "edit";

		dispatch({ type: PageConstant.SET_ACTION_MODE, payload: { actionMode } });
	} catch (e) {
		console.log(e);
	}
};

export const clearErrors = () => async (dispatch) => {
	dispatch({
		type: PageConstant.CLEAR_ERRORS,
	});
};
