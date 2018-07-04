import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
// import { LOCATION_CHANGE } from './Constants/ActionTypes';
import reducers from './Reducers';
import rootSaga from './Sagas';

const composeEnhancers
	= process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const sagaMiddleware = createSagaMiddleware();

// const historySaver = store => next => (action) => {
//   console.log(store);
//   if (action.type === LOCATION_CHANGE) {
//     console.log(action);
//   }
//   return next(action);
// };

export default createStore(
  reducers,
  composeEnhancers(applyMiddleware(logger, sagaMiddleware /* historySaver*/)),
);

sagaMiddleware.run(rootSaga);
