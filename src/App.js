import React, { Component } from 'react';
import T from 'prop-types';
import { Provider } from 'react-redux';
import Store from './Store';
import Home from "./Home"
import './App.css';

// declare which data will be made available in the contet. This starts by delaring a static child
//context types variable that uses prop types which here we name T for short
//import T from 'prop-types';

// redux binding to view layer. wrap app in provider component
//import { Provider } from 'react-redux';
// this will require a reference to our datastore so we'll provide that // TODO:
//import Store from './Store';

class App extends Component {
  static childContextTypes = {
    message: T.string
  };
  //then we define method getChildContext that returns the actual
  // data that makes up the context. In this case we'll get the message from the state variable

  // By holding the message in a state variable on the component we have the ability
  // to change its value based on user interaction (using component function setState)
  state = {
	  message: " -- Hot reloading is great!!! -- "
  };

  getChildContext(){
    return { message: this.state.message };
  }

  // the defined updateMessage function passes the message argument into the setState function of the component
  updateMessage = message => this.setState({ message });

  // function updateMessage is passed down as a prop to the Home component
  // The provier will naw make the store available to the entire component tree
  // Tis actually works by using a react-conext but this is invisibble to use because we
  // access the datastore using a higher order component
  render() {
    return (
      <Provider store={Store}>
		    <Home updateMessage={this.updateMessage}/>
      </Provider>
	);
  }
}

export default App;
