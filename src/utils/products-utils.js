import { toast } from "react-toastify";
import store from "../store";
import { addToWishlist, removeFromWishlist } from "../redux/actions/userAction";
import axiosInstance, { BACKEND_URL } from "./route-util";

export const divideListIntoSublists = (list, numSublists) => {
	const sublists = [];
	const sublistSize = Math.ceil(list.length / numSublists);
	for (let i = 0; i < list.length; i += sublistSize) {
		sublists.push(list.slice(i, i + sublistSize));
	}

	return sublists;
};

export const formatNumberToINR = (number) => {
	// Use toLocaleString with options for Indian Numbering System
	return number.toLocaleString("en-IN");
};

export const arrayToObjectByKey = (array, keyName) => {
	// Clone the original array
	const clonedArray = [...array];
	// Perform the transformation on the cloned array
	const result = clonedArray.reduce((acc, obj) => {
		// Extract the value of the specified key from each object
		const keyValue = obj[keyName];

		// Create an array under the extracted key if it doesn't exist
		if (!acc[keyValue]) {
			acc[keyValue] = [];
		}

		// Push the current object into the array under the extracted key
		acc[keyValue].push(obj);

		return acc;
	}, {});

	return result;
};

export const wishlist_buttonClicked = (productId, likedProduct) => {
	if (!productId) {
		toast.error("Some Error occured.", {
			position: "top-left",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			className: "my-toast",
			theme: "light",
			// transition: Bounce,
		});
		return;
	}
	if (likedProduct) store.dispatch(removeFromWishlist(productId));
	else store.dispatch(addToWishlist(productId));
};

export const isProductLiked = (productId) => {
	const loggedInUser = store.getState().userReducer?.user?.user;
	if (!loggedInUser) {
		return false;
	}
	if (productId && loggedInUser.wishlist.includes(productId)) {
		return true;
	}

	return false;
};

export const createProductReview = async (productId, review) => {
	try {
		const config = {
			headers: { "Content-Type": "application/json" },
		};
		const payload = {
			productId,
			rating: review.rating.toString(),
			comment: review.comment,
		};
		const response = await axiosInstance.put(
			`${BACKEND_URL}/api/v1/review`,
			payload,
			config,
		);
	} catch (err) {
		console.log(err);

		toast.error(err?.response?.data?.message || "Unable to give review", {
			position: "top-left",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			className: "my-toast",
			theme: "light",
			// transition: Bounce,
		});
	}
};

export const getProductReviews = async (productId) => {
	try {
		const response = await axiosInstance.get(`${BACKEND_URL}/api/v1/reviews`, {
			params: {
				id: productId,
			},
		});

		return response.data;
	} catch (err) {
		toast.error("Unable to get product reviews", {
			position: "top-left",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			className: "my-toast",
			theme: "light",
			// transition: Bounce,
		});
	}
};

export const getRatingValue = (reviewArr) => {
	let sumRating = 0;
	if (reviewArr && reviewArr?.length) {
		reviewArr?.forEach((review) => (sumRating += review.rating));

		return sumRating / reviewArr?.length;
	}
	return 0;
};
