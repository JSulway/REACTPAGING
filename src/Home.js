import React from 'react';
import { AppIntro } from './styles';
import { withLayout } from './Layout';
import Greeting from './Greeting';
import Counter from './Counter';
import JokesComponent from './JokesComponent';

// Use component state to update the values that are bound to the React components

// the props message and update message (which is of type function have been passed from App to Home)
// The message prop in this Home component is actually a piece of state managed by the App component.
// On clicking the button it ultimately called the setState which updates the value of the message variable
// The causes the App component to re-render with the updated state values. Since the value of message
// changes this changes the value of the message property being passed into the Home component. Because the property
// value changes, the whole component re-renders. This allows us to update the values of the views when users interact with
// the site.
export function Home( { updateMessage } ){
  //throw new Error("An error was thrown from here");
  return (
    <React.Fragment>
      <AppIntro>
        Some text
      </AppIntro>

      <Greeting />
      <Counter step={1} />
      // <JokesComponent />
	  <button onClick={() => (updateMessage("foo"))}>Click Me!</button>
    </React.Fragment>
  );
}

export default withLayout("Welcome to react")(Home);
