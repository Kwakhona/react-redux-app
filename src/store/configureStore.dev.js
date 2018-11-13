import {
    applyMiddleware,
    compose,
    createStore
} from 'redux';
import reducers from '../reducers';
import thunk from 'redux-thunk';

export const configureStore = (initialState) => {
    const finalCreateStore = compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )(createStore);

    const store = finalCreateStore(reducers, initialState);

    return store;
};