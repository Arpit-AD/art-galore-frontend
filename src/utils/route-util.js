import axios from "axios";

export const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const axiosInstance = axios.create({
	baseURL: BACKEND_URL,
});

axiosInstance.interceptors.request.use(
	(config) => {
		const token = localStorage.getItem("token");
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	},
);

export default axiosInstance;
