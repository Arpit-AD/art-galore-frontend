import axios from "axios";
import UserConstants from "../constants/userConstants";
import { toast } from "react-toastify";
import { BACKEND_URL } from "../../utils/route-util";

export const login = (userData) => async (dispatch) => {
	try {
		dispatch({ type: UserConstants.LOGIN_REQUEST });
		const config = {
			// withCredentials: true,
			headers: { "Content-Type": "application/json" },
		};

		const response = await axios.post(
			`${BACKEND_URL}/api/v1/login`,
			{ email: userData.email, password: userData.password },
			config,
		);
		toast.success("Login Successful", {
			position: "top-left",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
		});

		dispatch({ type: UserConstants.LOGIN_SUCCESS, payload: response.data });
	} catch (error) {
		dispatch({
			type: UserConstants.LOGIN_FAIL,
			payload: error.response.data.message,
		});
	}
};

export const register = (userData) => async (dispatch) => {
	try {
		dispatch({ type: UserConstants.REGISTER_USER_REQUEST });

		const config = { headers: { "Content-Type": "application/json" } };

		const { data } = await axios.post(
			`${BACKEND_URL}/api/v1/register`,
			userData,
			config,
		);

		toast.success("Registration Successful", {
			position: "top-left",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
		});

		dispatch({ type: UserConstants.REGISTER_USER_SUCCESS, payload: data });
	} catch (err) {
		dispatch({
			type: UserConstants.REGISTER_USER_FAIL,
			payload: err.response.data.message,
		});
	}
};

export const logout = () => async (dispatch) => {
	try {
		dispatch({ type: UserConstants.LOGOUT_REQUEST });

		const config = { headers: { "Content-Type": "application/json" } };

		await axios.get(`${BACKEND_URL}/api/v1/logout`, config);

		toast.success("Logout Successful", {
			position: "top-left",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
		});

		dispatch({ type: UserConstants.LOGOUT_SUCCESS });
	} catch (err) {
		dispatch({
			type: UserConstants.LOGOUT_FAIL,
			payload: err.response.data.message,
		});
	}
};

export const loadUser = () => async (dispatch) => {
	try {
		dispatch({ type: UserConstants.LOAD_USER_REQUEST });
		const config = { headers: { "Content-Type": "application/json" } };

		const { data } = await axios.get(`${BACKEND_URL}/api/v1/profile`);

		dispatch({ type: UserConstants.LOAD_USER_SUCCESS, payload: data });
	} catch (error) {
		dispatch({
			type: UserConstants.LOAD_USER_FAIL,
			payload: error.response?.data?.message,
		});
	}
};

export const updateUser = (userData) => async (dispatch) => {
	try {
		dispatch({ type: UserConstants.UPDATE_PROFILE_REQUEST });
		const config = { headers: { "Content-Type": "application/json" } };

		const { data } = await axios.put(
			`${BACKEND_URL}/api/v1/profile/${userData._id}`,
			userData,
			config,
		);
		toast.success("Profile updated Successfully", {
			position: "top-left",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
		});
		dispatch({ type: UserConstants.REGISTER_USER_SUCCESS, payload: data });
	} catch (error) {
		toast.error("Profile update failed", {
			position: "top-left",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
		});
		dispatch({
			type: UserConstants.UPDATE_PROFILE_FAILURE,
			payload: error.response.data,
		});
	}
};

export const clearErrors = () => async (dispatch) => {
	dispatch({
		type: UserConstants.CLEAR_ERRORS,
	});
};
