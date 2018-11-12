import {
    createStore,
    applyMiddleware,
    compose
} from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

export const configureStore = (initialState) => {
    const finalCreateStore = compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )(createStore);

    const store = finalCreateStore(reducers, initialState);

    return store;
};