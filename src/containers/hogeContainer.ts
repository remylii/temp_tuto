import { Action } from 'typescript-fsa';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppState } from '../store';
import { hogeActions } from '../actions/hogeAction';
import { fooActions } from '../actions/fooAction';
import { HogeComponent } from '../components/HogeComponent';

export interface HogeActions {
  updateName: (v: string) => Action<string>;
  updateEmail: (v: string) => Action<string>;
  onClicked: () => Action<void>;
  onDescChange: (v: string) => Action<string>;
}

function mapDispatchToProps(dispatch: Dispatch<Action<string | void>>) {
  return {
    updateName: (v: string) => dispatch(hogeActions.updateName(v)),
    updateEmail: (v: string) => dispatch(hogeActions.updateEmail(v)),
    onClicked: () => dispatch(fooActions.onFooClicked()),
    onDescChange: (v: string) => dispatch(fooActions.changeDescription(v))
  };
}

function mapStateToProps(appState: AppState) {
  return Object.assign({}, appState.hoge, appState.foo);
}

export default connect(mapStateToProps, mapDispatchToProps)(HogeComponent);
