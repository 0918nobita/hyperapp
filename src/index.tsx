import { h, app } from 'hyperapp';

interface State {
  count: number;
}

const state: State = {
  count: 0,
};

const actions = {
  down: (value: number) => (state: State): State => ({ count: state.count - value }),
  up: (value: number) => (state: State): State => ({ count: state.count + value }),
};

const view = (state: State, actions: any) => (
  <div>
    <h1>Counter</h1>
    <h2>{state.count}</h2>
    <button onclick={() => actions.down(1)}>-</button>
    <button onclick={() => actions.up(1)}>+</button>
  </div>
);

app(state, actions, view, document.body);
