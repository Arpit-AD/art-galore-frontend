import UserConstants from "../constants/userConstants.js";

export const userReducer = (
	state = { user: [], isLoggedIn: false },
	action,
) => {
	switch (action.type) {
		case UserConstants.LOGIN_REQUEST:
		case UserConstants.REGISTER_USER_REQUEST:
		case UserConstants.LOGOUT_REQUEST:
		case UserConstants.LOAD_USER_REQUEST:
			return { loading: true, isLoggedIn: false };
		case UserConstants.UPDATE_PROFILE_REQUEST:
			return { ...state, loading: true };
		case UserConstants.LOGIN_SUCCESS:
		case UserConstants.REGISTER_USER_SUCCESS:
		case UserConstants.LOGOUT_FAIL:
		case UserConstants.LOAD_USER_SUCCESS:
		case UserConstants.UPDATE_PROFILE_SUCCESS: {
			const _userData = {
				...state,
				loading: false,
				isLoggedIn: true,
				user: action.payload,
			};
			return _userData;
		}
		case UserConstants.UPDATE_PROFILE_FAILURE:
			return { ...state, loading: false, isLoggedIn: true };
		case UserConstants.LOAD_USER_FAIL:
			return {
				...state,
				loading: false,
				isLoggedIn: false,
				user: null,
			};
		case UserConstants.LOGIN_FAIL:
		case UserConstants.REGISTER_USER_FAIL:
			return {
				...state,
				loading: false,
				isLoggedIn: false,
				user: null,
				error: action.payload,
			};
		case UserConstants.LOGOUT_SUCCESS: {
			return {
				loading: false,
				isLoggedIn: false,
			};
		}
		case UserConstants.CLEAR_ERRORS:
			return {
				...state,
				error: null,
			};
		default:
			return state;
	}
};
