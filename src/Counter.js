// create a single new store that only our Counter component can access

import React from 'react';
import { connect } from 'react-redux';
import { actions } from './counterStore';

// first define component and set initial state to the state of the counter Store
export function Counter({ n, inc, dec }) {
  return(
   <div>
     <button onClick={inc}>+</button>
     <h2>{n}</h2>
     <button onClick={dec}>-</button>
   </div>
 );
   // last step  before we can use our counter app is to render it from our Home component
}

// second argument here is called mapDispatchToProps. couple of ways to use it
// Im this case we provide a function that accepts a dispatch and the props thats
// were passed in from the parent. We then are returning an object made of functions
// that dispatch our action creators to the store. these functions are injected as component mapDispatchToProps
// hence the name mapDispatchToProps
export default connect(
  state => state.counterStore,
  (dispatch, props) => ({
    inc: () => dispatch(actions.increment(props.step)),
    dec: () => dispatch(actions.increment(-props.step))
  })
)(Counter);
