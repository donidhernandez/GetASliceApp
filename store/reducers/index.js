import {combineReducers} from 'redux';
import locationReducer from './locationReducers';

const rootReducer = combineReducers({
  location: locationReducer,
});

export default rootReducer;
