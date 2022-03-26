import { Component } from 'react';
import classes from './Counter.module.css';
import { useSelector, useDispatch, connect } from 'react-redux';
import { counterActions } from '../store/counter';
//import counterReducer from "..store/reduxStore"

const Counter = () => {
  // useSelector is what connects the reduced function to this action, willl show the value of the counter -> 
    // selects a specific property from return of reducer function, can use anonymous function with param being the object returned
    // React instantly sets up subscribe when using selector hook, component updated and automatically reactive and always latest counter
      //useDispatch just gives the ability to be able to dispatch an action with a type to the redux store for a state change to occur
  const dispatch = useDispatch();
  const selector = useSelector(counterSlice => counterSlice.counter.counter);
  const showingCounter = useSelector(counterSlice => counterSlice.counter.showCounter);

// Create 2 functions to use both the dispatched actions of increment and decrement -> connect to buttons via onClick
  // Attaching payloads to action in the increase by 5 handler
  const incrementHandler = () =>
  {
    // It's interesting that counterActions.reducerFn() is the only call you need to make, very helpful and simplified
    dispatch(counterActions.increment());
  }

  const decrementHandler = () =>
  {
    dispatch(counterActions.decrement());
  }

  const incrementByFiveHandler = () =>
  {
    dispatch(counterActions.increaseByFive(5)); // The dispatch action is sent in as {type: "SOME_UNIQUE_ID", payload: 5} -> 
                                                // change name in reduxStore.js from action.value to action.payload, preset by  redux toolkit 
  }

  const toggleCounterHandler = () => {
    //dispatch({type:"increment"});
    //dispatch({type:"decrement"});
    dispatch(counterActions.toggleCounter());
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