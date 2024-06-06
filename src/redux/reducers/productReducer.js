import ProductConstants from "../constants/productConstants";

export const productReducer = (
	state = { products: [], productsCount: null },
	action,
) => {
	switch (action.type) {
		case ProductConstants.ALL_PRODUCT_REQUEST:
			return {
				loading: true,
				products: [],
			};
		case ProductConstants.ALL_PRODUCT_SUCCESS:
			return {
				loading: false,
				products: action.payload.data._products,
				productsCount: action.payload.data._productsCount,
			};
		case ProductConstants.ALL_PRODUCT_FAIL:
			return {
				loading: false,
				error: action.payload,
			};
		case ProductConstants.CLEAR_ERRORS:
			return {
				...state,
				error: null,
			};
		default:
			return state;
	}
};
