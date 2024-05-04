import ProductConstants from "../constants/productConstants";

export const productReducer = (state = { products: [] }, action) => {
	switch (action.type) {
		case ProductConstants.ALL_PRODUCT_REQUEST:
			return {
				loading: true,
				product: [],
			};
		case ProductConstants.ALL_PRODUCT_SUCCESS:
			return {
				loading: false,
				product: action.payload.products,
				productsCount: action.payload.productsCount,
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
