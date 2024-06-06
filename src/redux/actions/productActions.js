import axios from "axios";
import ProductConstants from "../constants/productConstants";

export const getProduct = () => async (dispatch) => {
	try {
		dispatch({
			type: ProductConstants.ALL_PRODUCT_REQUEST,
		});
		const data = await axios.get("http://localhost:3000/api/v1/products");
		dispatch({
			type: ProductConstants.ALL_PRODUCT_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: ProductConstants.ALL_PRODUCT_FAIL,
			payload: error.response.data.message,
		});
	}
};

//clears errors

export const clearErrors = () => async (dispatch) => {
	dispatch({
		type: ProductConstants.CLEAR_ERRORS,
	});
};
