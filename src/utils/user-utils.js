import axios from "axios";
import { toast } from "react-toastify";
import { BACKEND_URL } from "./route-util";

export const getUserData = async (id) => {
	let artistData = {};
	try {
		artistData = await axios.get(`${BACKEND_URL}/api/v1/user/${id}`);
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
		});
	}
	return artistData?.data;
};
