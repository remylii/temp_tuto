import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { fooActions } from '../actions/fooAction';

export interface FooState {
  description: string;
}

const initialState: FooState = {
  description: ''
};

export const fooReducer = reducerWithInitialState(initialState)
  .case(fooActions.onFooClicked, (state) => {
    // const description = 'これがdescription';
    // return { ...state, description };
    console.log('on click');
    return state;
  })
  .case(fooActions.changeDescription, (state, action) => {
    const description = action;
    return {
      ...state,
      description
    };
  });
