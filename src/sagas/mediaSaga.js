import { put, call } from 'redux-saga/effects';
import { flickrImages, shutterStockVideos } from '../Api/api';
import * as types from '../constants/actionTypes';

export function* searchMediaSaga({ payload }) {
  try {
    const videos = yield call(shutterStockVideos, payload);
    const images = yield call(flickrImages, payload);

    yield [
      put({types: types.SHUTTER_VIDEOS_SUCCESS, videos}),
      put({types: types.SELECTED_VIDEO, video: videos[0] }),
      put({types: types.FLICKR_IMAGES_SUCCESS, images}),
      put({types: types.SELECTED_IMAGE, image: images[0] })
    ]

  } catch (error) {
    yield put({types: 'SEARCH_MEDIA_ERROR', error});
  }
}
