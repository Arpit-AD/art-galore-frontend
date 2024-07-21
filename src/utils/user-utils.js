import { toast } from "react-toastify";
import axiosInstance, { BACKEND_URL } from "./route-util";
import store from "../store";

export const getUserData = async (id) => {
	let artistData = {};
	try {
		artistData = await axiosInstance.get(`${BACKEND_URL}/api/v1/user/${id}`);
	} catch (err) {
		toast.error("Artist Failed to fetch", {
			position: "top-left",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
			className: "my-toast",
		});
	}
	return artistData?.data;
};

export const isUserFollowed = (userId) => {
	const loggedInUser = store.getState().userReducer?.user?.user;
	if (!loggedInUser) {
		return false;
	}

	if (userId && loggedInUser.following.includes(userId)) {
		return true;
	}

	return false;
};

export const followUser = async (followUserId) => {
	try {
		const loggedInUserId = store.getState().userReducer?.user?.user?._id;
		const response = await axiosInstance.put(
			`${BACKEND_URL}/api/v1/user/follow`,
			{ userId: loggedInUserId, followUserId },
		);
		toast.success(response.data.message, {
			position: "top-left",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
			className: "my-toast",
		});
	} catch (err) {
		toast.error(err.response.data.message, {
			position: "top-left",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
			className: "my-toast",
		});
	}
};

export const unfollowUser = async (unfollowUserId) => {
	try {
		const loggedInUserId = store.getState().userReducer?.user?.user?._id;
		const response = await axiosInstance.put(
			`${BACKEND_URL}/api/v1/user/unfollow`,
			{ userId: loggedInUserId, unfollowUserId },
		);
		toast.success(response.data.message, {
			position: "top-left",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
			className: "my-toast",
		});
	} catch (err) {
		toast.error(err.response.data.message, {
			position: "top-left",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
			className: "my-toast",
		});
	}
};
