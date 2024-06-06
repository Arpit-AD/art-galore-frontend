import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import { productReducer } from "./redux/reducers/productReducer";
import { userReducer } from "./redux/reducers/userReducer";
import { artistReducer } from "./redux/reducers/artistReducer";
import { pageReducer } from "./redux/reducers/pageReducer";

const reducer = combineReducers({
	pageReducer,
	productReducer,
	userReducer,
	artistReducer,
});

let initialState = {};

const middleware = [thunk];

const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
