import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';

import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';
import AppRouter from '../routes';
import { initialState } from '../store/state';

const enhancer = applyMiddleware(thunk);
const mockStore = createStore(reducer, initialState, enhancer);

// eslint-disable-next-line no-undef
it('renders without crashing', () => {
  // eslint-disable-next-line no-undef
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={mockStore}>
      <AppRouter />
    </Provider>
    , div);
  ReactDOM.unmountComponentAtNode(div);
});
