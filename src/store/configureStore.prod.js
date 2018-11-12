import { createStore, applyMiddleware } from 'redux';

import reducer from '../reducers';
import thunk from 'redux-thunk';

const enhancer = applyMiddleware(thunk);

export const configureStore = (initialState) => {

    return createStore(reducer, initialState, enhancer);
};