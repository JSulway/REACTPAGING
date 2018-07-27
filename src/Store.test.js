import { increment, decrement, createStore } from './Store';

test("increment action can increment some value n", () => {
  const state = { n: 0 };
  expect(increment(state).n).toBe(state.n + 1);
})

test("decrement action can decrement some value n", () => {
  const state = { n: 1 };
  expect(decrement(state).n).toBe(state.n - 1);
})

describe("store", () => {
  const initialState = {n: 0};
  const initialize = () => createStore(initialState);

  it("returns the initial state", () => {
    const store = initialize();
    expect(store.getState()).toBe(initialState);
  });

  // write tests that dispatch actions against the store and varify that the internal state has changed
  it("can increment the internal state", () => {
    // initialise the store, dispatch the action then make sure n has increased by chacking the state of the store
    const store = initialize();
    store.dispatch(increment);
    expect(store.getState().n).toBe(initialState.n + 1);
  });

  // do same/similar for decrement
  it("can decrement the internal state", () => {
    const store = initialize();
    store.dispatch(decrement);
    expect(store.getState().n).toBe(initialState.n - 1);
  });

});
