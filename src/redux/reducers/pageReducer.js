import { initialFilter } from "../../pages/all-product-page/AllProductsPage";
import PageConstant from "../constants/pageConstants";

export const pageReducer = (
	state = { actionMode: null, filterRx: initialFilter },
	action,
) => {
	switch (action.type) {
		case PageConstant.SET_ACTION_MODE:
			return {
				...state,
				actionMode: action.payload.actionMode,
			};
		case PageConstant.CHANGE_FILTER:
			return {
				...state,
				filterRx: action.payload.filter,
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
