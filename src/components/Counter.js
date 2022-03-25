import { Component } from 'react';
import classes from './Counter.module.css';
import { useSelector, useDispatch, connect } from 'react-redux';
//import counterReducer from "..store/reduxStore"

const Counter = () => {
  // useSelector is what connects the reduced function to this action, willl show the value of the counter -> 
    // selects a specific property from return of reducer function, can use anonymous function with param being the object returned
    // React instantly sets up subscribe when using selector hook, component updated and automatically reactive and always latest counter
      //useDispatch just gives the ability to be able to dispatch an action with a type to the redux store for a state change to occur
  const dispatch = useDispatch();
  const selector = useSelector(state => state.counter);
  const showingCounter = useSelector(state => state.showCounter);

// Create 2 functions to use both the dispatched actions of increment and decrement -> connect to buttons via onClick
  // Attaching payloads to action in the increase by 5 handler
  const incrementHandler = () =>
  {
    dispatch({type:"increment"});
  }

  const decrementHandler = () =>
  {
    dispatch({type:"decrement"});
  }

  const incrementByFiveHandler = () =>
  {
    dispatch({type:"incrementByFive", value: 5})
  }

  const toggleCounterHandler = () => {
    //dispatch({type:"increment"});
    //dispatch({type:"decrement"});
    dispatch({type: 'toggleCounter'})
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{showingCounter && selector}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={incrementByFiveHandler}>Increment By 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;