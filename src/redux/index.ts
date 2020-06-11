import { createStore, Store, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducer } from './reducer';
import { AppState } from './state';

const store: Store<AppState> = createStore(reducer, applyMiddleware(thunk));

export default store;

