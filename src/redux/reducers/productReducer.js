import ProductConstants from "../constants/productConstants";

export const productReducer = (
	state = { products: [], productsCount: null, productReview: false },
	action,
) => {
	switch (action.type) {
		case ProductConstants.ALL_PRODUCT_REQUEST:
			return {
				...state,
				loading: true,
				products: [],
			};
		case ProductConstants.ALL_PRODUCT_SUCCESS:
			return {
				...state,
				loading: false,
				products: action.payload.data._products,
				productsCount: action.payload.data._productsCount,
			};
		case ProductConstants.ALL_PRODUCT_FAIL:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		case ProductConstants.CLEAR_ERRORS:
			return {
				...state,
				error: null,
			};
		case ProductConstants.REVIEW_FORM_UPDATED:
			return {
				...state,
				productReview: true,
			};
		case ProductConstants.PRODUCT_REVIEW_FETCHED:
			return {
				...state,
				productReview: false,
			};
		default:
			return state;
	}
};
