// the next step is to implement the actions that will be dispatched to the createStore
// when we implemented our own data store our mutations and action were basically the same thing.
// But in REDUX they're split into two things. We just define a mutation in the reducer. Now we define an action that triggers that mutations
// an action is just a js obect.  Our increment action will take a step argument and return an action with the type
// of increment. The step argument gets bound to the n property of our action and used in our reducer to change the value of // NOTE:
// . All that remains is to bind to the view layer (start by wrapping application in a provider component)
export function increment(step){
  return {
    type: "INCREMENT",
    n:step
  }
}
