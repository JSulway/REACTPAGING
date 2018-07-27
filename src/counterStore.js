// define initial state
const initialState = {
  n:0
}

//define mutation. Similar to those used in own impl
// all it does is return a copy of the state as a value of n changed
// the main difference is that the value that we use to increment n is
// now part of the action object provided as a second agument
function inc(state, action){
  return { ...state, n: state.n + action.n }
}

// Making the TYPE a constant rather than keep hard coding stirng
const INCREMENT = "INCREMENT";

// now create reduce functions. in redux all state mutations happen
// inside reducers. We see here its just a function with two arguments
// the first is the current object state (defaulted to initial), the
// second is an action that decribes the mutation that needs to happen
// >> EXPORT THE REDUCER
export function reducer(state = initialState, action){
  // Our reducer needs to return a new copy of the state based on the actions
  // action must always have a type property. first signal that
  // a reducer user to determine how to update the getState
  switch (action.type){
    case INCREMENT:
      return inc(state,action);
    default:
      return state;
  }
}

// >> KEEP ACTIONS IN HERE ALSO
export const actions = {
  increment: step => ({
      type: INCREMENT,
      n: step
  })
};
