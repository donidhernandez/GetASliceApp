import {combineReducers} from 'redux';
import locationReducer from './locationReducers';
import reviewsReducer from './reviewsReducer';

const rootReducer = combineReducers({
  location: locationReducer,
  reviews: reviewsReducer,
});

export default rootReducer;
