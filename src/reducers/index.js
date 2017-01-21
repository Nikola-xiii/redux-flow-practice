import { combineReducers } from 'redux';
import images from './imageReducer';
import videos from './videoReducer';

const rootReducers = combineReducers({
  images,
  videos
});

export default rootReducers;
