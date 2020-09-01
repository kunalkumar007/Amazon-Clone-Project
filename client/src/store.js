import { createStore, combineReducers, applyMiddleware } from 'redux';
import { ProductListReducer, ProductDetailsReducer } from './reducers/productReducers';
import thunk from 'redux-thunk';

const initialState = {};
const middleware = [thunk];
const reducer = combineReducers({
	productList: ProductListReducer,
	productDetails: ProductDetailsReducer,
});

const store = createStore(reducer, initialState, applyMiddleware(...middleware));
export default store;
