import axios from "axios";
import ProductConstants from "../constants/productConstants";
import { BACKEND_URL } from "../../utils/route-util";

export const getProduct = () => async (dispatch) => {
	try {
		dispatch({
			type: ProductConstants.ALL_PRODUCT_REQUEST,
		});
		const data = await axios.get(`${BACKEND_URL}/api/v1/products`);
		dispatch({
			type: ProductConstants.ALL_PRODUCT_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: ProductConstants.ALL_PRODUCT_FAIL,
			payload: error?.response?.data.message,
		});
	}
};

//clears errors

export const clearErrors = () => async (dispatch) => {
	dispatch({
		type: ProductConstants.CLEAR_ERRORS,
	});
};
