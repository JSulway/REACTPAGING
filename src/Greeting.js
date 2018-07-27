import React from 'react';

// we use prop-types again in order to declare a static contexts types object on the greeting components
import T from 'prop-types';

// To use contexts in a funtional component. We add it as
// the second argument in the signature
// we wont use props anymore so _ is used to indicate
// that props is an unused variable
export default function Greeting(_, context) {
  // that take the message off the context instead of the props
  return <h2>{context.message}</h2>;
}

// static context types declared before use
Greeting.contextTypes = {
  message: T.string
};
