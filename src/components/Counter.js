import { Component } from 'react';
import classes from './Counter.module.css';
import { useSelector, useDispatch, connect } from 'react-redux';
//import counterReducer from "..store/reduxStore"

// const Counter = () => {
//   // useSelector is what connects the reduced function to this action, willl show the value of the counter -> 
//     // selects a specific property from return of reducer function, can use anonymous function with param being the object returned
//     // React instantly sets up subscribe when using selector hook, component updated and automatically reactive and always latest counter
//       //useDispatch just gives the ability to be able to dispatch an action with a type to the redux store for a state change to occur
//   const dispatch = useDispatch();
//   const selector = useSelector(state => state.counter);

// // Create 2 functions to use both the dispatched actions of increment and decrement -> connect to buttons via onClick
//   const incrementHandler = () =>
//   {
//     dispatch({type:"increment"});
//   }

//   const decrementHandler = () =>
//   {
//     dispatch({type:"decrement"});
//   }

//   const toggleCounterHandler = () => {
//     //dispatch({type:"increment"});
//     //dispatch({type:"decrement"});
//   };

//   return (
//     <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       <div className={classes.value}>{selector}</div>
//       <div>
//         <button onClick={incrementHandler}>Increment</button>
//         <button onClick={decrementHandler}>Decrement</button>
//       </div>
//       <button onClick={toggleCounterHandler}>Toggle Counter</button>
//     </main>
//   );
// };

// Class-Based Component Redux
  // Need to remove functional counter component to remove error in this one, comment it out
class Counter1 extends Component {
  // No states to handle to constructor is unneccessary
    // Cannot use hooks in class based components, different way than useDispatch and useSelector from functional components
      // Instead use connect: Can be used on class-based and functional components, connect is better for class-based components, hooks are better for functional components
  incrementHandler () {
    // This is the key from mapDispatchToProps
    this.props.increment();
  }

  decrementHandler() {
    // This is the key from mapDispatchToProps
    this.props.decrement();
  }

  toggleCounterHandler() {};

  render() {
    // add JSX inside here
    return(
    <main className={classes.counter}>
    <h1>Redux Counter</h1>
    {/* this.props.counter is from the mapStateToProps key  */}
    <div className={classes.value}>{this.props.counter}</div>
    <div>
      {/* Remember that for these handler functions to use the .bind(this) since it's class-based components */}
      <button onClick={this.incrementHandler.bind(this)}>Increment</button>
      <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
    </div>
    <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
  </main>
    )}

}

// Uses redux state, retruns object where keys are available as props in Counter/receiving component -> 
  //value of keys is drilling into logic of state
const mapStateToProps = state =>
{
  return {
    // Bind value of counter in redux to counter propto send to Counter.js -> similar to useSelector()
    counter: state.counter
  }
}
// Receives dispatch Function as argument/param -> returns object where keys are prop anmes which can be used in the component from the redux stor
const mapDispatchToProps = dispatch => {
  return {
    // This first value is the key, second is the call to the redux store
    increment: () => {dispatch({type: "increment"})},
    decrement: () => {dispatch({type: "decrement"})}
  }
}

// Connect is a higher order component, execute connect() 1st and it returns a new function, executes newfunction of Counter/Connect hybrid too 
  // Connect has two params/wants two args; 
    // 1st is a function that maps redux state to props to connect to Counter class -> similar to useSelector()
      // 2nd is another function that stores dispatch functions in props to Counter Class -> similar to useDispatch()
        // Don't execute the params passed in connect just point without ()
          // React still does subscription via connect()
export default connect(mapStateToProps,mapDispatchToProps)(Counter1);
//export default Counter;
