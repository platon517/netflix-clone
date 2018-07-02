import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {App} from './js/components/App';
import root_reducer from './js/redux/reducers/combReducer';
import storeGenerator from './js/redux/StoreGenerator';

const store = storeGenerator(root_reducer);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>, document.getElementById('root')
);