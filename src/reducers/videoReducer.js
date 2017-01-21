import initialState from './initialState';
import * as types from '../constants/actionTypes';

export default function (state = initialState.videos, action) {
  switch (action.types) {
    case types.SHUTTER_VIDEOS_SUCCESS:
      return [...state, action.videos];
    case types.SELECTED_VIDEO:
      return {...state, selectedImage: action.video};
    default:
      return state;
  }
};
