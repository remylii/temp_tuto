import { routerMiddleware } from 'connected-react-router';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { History } from 'history';
import createSagaMiddleware from 'redux-saga';
import { hogeReducer, HogeState } from './states/hogeState';
import { fooReducer, FooState } from './states/fooState';
import sampleSaga from './sagas/saga';

export type AppState = {
  hoge: HogeState,
  foo: FooState
};

const configureStore = (history: History) => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware, routerMiddleware(history)];

  const store = createStore(
    combineReducers<AppState>({
      hoge: hogeReducer,
      foo: fooReducer
    }),
    applyMiddleware(...middlewares)
  );

  sagaMiddleware.run(sampleSaga);

  return store;
};

// const store = createStore(
//   combineReducers<AppState>({
//     hoge: hogeReducer,
//     foo: fooReducer
//   })
// );

export default configureStore;
