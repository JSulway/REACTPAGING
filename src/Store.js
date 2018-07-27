import { createStore, applyMiddleware, combineReducers } from 'redux';
import { reducer as counterStore } from './counterStore';
import { reducer as jokes } from './jokes';

// apply middleware to log actions to console
const logger = Store => next => action => {
  console.log("dispatching ", action);
  console.log("current state ", Store.getState());

  const result = next(action);
  console.log("next state ", Store.getState());
  return result;
}

// allows us to combine multiple reducers into one Store
const reducer = combineReducers({ counterStore, jokes });

const async = Store => next => action => {
  if(typeof action === 'function'){
    return action(Store.dispatch).catch(err => {
      console.log(err);
      // demo this by throwing error when promise resolves
    });
  }
  return next(action);
};

// Now use the reducer as an argument to the createStore function an export the result
// This export will be the datastore that we use for the application
export default createStore(reducer, applyMiddleware(async, logger));
