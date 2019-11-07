import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export const fooActions = {
  onFooClicked: actionCreator('ACTIONS_FOO_CLICKED'),
  changeDescription: actionCreator<string>('ACTIONS_FOO_CHANGE_DESC')
};
