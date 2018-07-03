import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {App} from './js/components/App';
import comb_reducer from './js/redux/reducers/combReducer';
import {createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';

const store = createStore(comb_reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>, document.getElementById('root')
);