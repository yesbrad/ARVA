import { stockistReducer } from './stockists/reducer';
import { combineReducers, createStore, Store, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { AppState } from './state';

// const reducers = combineReducers({
// 	stockistReducer,
// });

const store: Store<AppState> = createStore(stockistReducer, applyMiddleware(thunk));

export default store;