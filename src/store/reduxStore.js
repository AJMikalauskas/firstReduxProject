import { createStore } from 'redux';

// Reducer Function
const counterReducer  = (state = {counter: 0, showCounter: true },action) =>
{
    // Don't ever adjust old state, leads to bugs and harder to debug by doing so, unwanted/unexpected side effects
        // Always do in this format of returning new reference object, changes occur in the new reference object, easier to debug 
    if(action.type === "increment")
    {
        // Cannot ever just adjust old state and return that state, must always return new state in object
            // Do Not Do THIS:
            // state.counter++;
            // return state; -> this is returning state which may be adjusted but not good practice AT ALL!

        // You can do this though: as long as new object is returned -> still bad practice because it mutates old state,
            // Only reason no problems like previosuly is because objects are reference values
            //state.counter++;
            // return { counter: state.counter, showCounter: state.showCounter}
        return {
            counter: state.counter + 1,
            // Must have state.showCounter or else undefined will be the result which in turn is false
                // This would cause a toggle even when we aren't trying to toggle
            showCounter: state.showCounter
        };
    } 
    else if(action.type === "decrement")
    {
        return {
            counter: state.counter - 1,
            showCounter: state.showCounter
        }
    }
    // Sending in payload of value with the dispatach and can add the value from the payload property
    else if(action.type === "incrementByFive")
    {
        return {
            // Increase by 5 since value sent in is 5 and the lastest snapshot of counter is added onto like the other dispatch calls
            counter: state.counter + action.value,
            showCounter: state.showCounter
        }
    }
    // For toggling the counter of showing
    else if(action.type === "toggleCounter")
    {
        return {
            counter: state.counter,
            showCounter: !state.showCounter
        }
    }
    //unchanged state for default and other times when dipatch type isn't one of the types above
    return state;
}

// Redux Store 
const store = createStore(counterReducer);

//const counterSubscriber = () =>
//{
    //store.dispatch({type: })
//}


// Redux Subscriber
// const counterSubscriber = () =>
// {
//     const latestState = store.getState();
//     console.log(latestState);
// }

// store.subscribe(counterSubscriber);

// //Connecting via action/dispatch
// store.dispatch({type: "increment"});
// store.dispatch({type: "decrement"});

// Subscriber and action are to be used in other components
export default store;