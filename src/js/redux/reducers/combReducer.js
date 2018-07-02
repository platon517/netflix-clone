import {combineReducers} from 'redux';
import reducer from './Reducer';
import reducer2 from './Reducer2';

export default combineReducers({
  names: reducer,
  phrases: reducer2
});