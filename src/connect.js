// function takes 2 arguments. the first is a function that returns some component props
// default returns empty argument. Second argument is a datastore. to keep things simeple creat\
// new store statically and use that by default.

// basically are making sure all componenets are subscribing to the same store unless we pass in a different One
import React from 'react';
import { createStore } from './Store';

const defaultStore = createStore({ n: 0 });

// next step is to return a higher order components
export default function connect(selector = () => ({}), store = defaultStore) {
  return Component =>
    class extends React.Component {
      state = store.getState();

      // define the listener that we'll be using to subscribe to the store.
      // this is going to check if the component is mounting and if it is we're going to call setState
      // with the new state
      refresh = newState => {
         if(this.mounted){
           this.setState(newState);
         }
      }
      // so when our component mounts we'll set the mounted flag to true managed
      // subscribe to the counter Store

      componentDidMount(){
        this.mounted = true;
        store.subscribe(this.refresh);
      }

      // when unmound set the mounted flag back to false and unsubscribe
      componentWillUnmount(){
        this.mounted = false;
        store.unsubscribe(this.refresh);
      }

      // next thing needed are methods for incrementing and decrementing our counterStore
      // These will just send actions to the dispatcher of our counterStore
      //inc = () => store.dispatch(increment);
      //dec = () => store.dispatch(decrement);
      // Dont need any longer

      // // now are render method will display buttons for incrementing and decrementing and show the count in between them
      render() {
        return(
          <Component
            {...this.props}
            {...selector(store.getState(), this.props)}
            dispatch={store.dispatch}
          />
        );
      }
    };
}
