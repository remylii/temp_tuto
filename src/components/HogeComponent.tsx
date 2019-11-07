import * as React from 'react';
import { HogeState } from '../states/hogeState';
import { HogeActions } from '../containers/hogeContainer';
import { FooState } from '../states/fooState';

interface OwnProps {};

type HogeProps = OwnProps & HogeState & FooState & HogeActions;

export const HogeComponent: React.SFC<HogeProps> = (props: HogeProps) => {
  return (
    <div>
      <div className="field">
        <p>入力: {props.name}</p>
        <input type="text" value={props.name} onChange={ (e) => {
          props.updateName(e.target.value)
        }} />
      </div>
      <div className="field">
        <p>入力: {props.email}</p>
        <input type="text" value={props.email} onChange={e => { props.updateEmail(e.target.value) }} />
      </div>
      <div className="field">
        <p>{props.description}</p>
        <button className="button" onClick={() => {
          props.onClicked()
        }}>ボタン</button>
        <button className='button' onClick={() => props.onDescChange("desc change") }>desc change</button>
      </div>
    </div>
  );
};
