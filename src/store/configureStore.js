import {createSrore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga';
import rootReducers from '../reducers';
import rootSaga from '../sagas';

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  return {
    ...createSrore(rootReducers,
      applyMiddleware(sagaMiddleware)),
    runSaga: sagaMiddleware.run(rootSaga)
  };
};

export default configureStore;
