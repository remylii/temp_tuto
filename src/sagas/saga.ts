import { takeEvery } from 'redux-saga/effects';
import { fooActions } from '../actions/fooAction';

function* handleSetText(action: ReturnType<any>) {
  let text = action.payload;
  yield (localStorage.text = text);
}

function* sampleSaga() {
  yield takeEvery('ACTIONS_FOO_CHANGE_DESC', handleSetText);
}


export default sampleSaga;
