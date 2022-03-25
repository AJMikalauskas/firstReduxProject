//import { createStore } from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {counter: 0, showCounter: true};

// Slices from redux toolkit, more maintainable -> can also use createReducer from redux toolkit , createSlice is more powerful
    // All slices created need an identifier/name, JS can read initialState key as the initialState object above if just put initialState
        // Even though it looks like the latest state is being adjusted, Immer, a package of redux toolkit , does what we do manually in the reducer function
            // Immer creates a new object and creates new state even with just the little amount of code below,
                // it also keeps the state of other properties the same by just calling on state,
                    // since each reducer method is individual, if no payload is attached, action isn't requried as a param/arg.
                        // Need to assign a constant to the slice to put in 
const counterSlice = createSlice({
    name: 'counter',
    initialState: initialState,
    // Reducers are the action.type methods and act as the different dispatcher methods
        // No need for if checks or action because whne these methods are called is when changes will happen?
    reducers: {
        increment(state) {
            // Cannot manipulate existing state via redux toolkit due to package called Immer
                // Immer will know which states to adjust based on what we've typed and return new object with new states and keep
                    // latest state snapshot of one's that aren't adjusted 
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increaseByFive(state,action) {
            // For Payload in reducers methods of redux toolkit
                // Unlike the other methods, this one needs a payload/action, so it's requried as a param
                    // Like the one's above if action isn't needed, no need to add because these are individual emthods with only what's needed being passed in 
            state.counter = state.counter + action.amount;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter
        }
    }
});

// Reducer Function
// const counterReducer  = (state = initialState,action) =>
// {
//     // Don't ever adjust old state, leads to bugs and harder to debug by doing so, unwanted/unexpected side effects
//         // Always do in this format of returning new reference object, changes occur in the new reference object, easier to debug 
//     if(action.type === "increment")
//     {
//         // Cannot ever just adjust old state and return that state, must always return new state in object
//             // Do Not Do THIS:
//             // state.counter++;
//             // return state; -> this is returning state which may be adjusted but not good practice AT ALL!

//         // You can do this though: as long as new object is returned -> still bad practice because it mutates old state,
//             // Only reason no problems like previosuly is because objects are reference values
//             //state.counter++;
//             // return { counter: state.counter, showCounter: state.showCounter}
//         return {
//             counter: state.counter + 1,
//             // Must have state.showCounter or else undefined will be the result which in turn is false
//                 // This would cause a toggle even when we aren't trying to toggle
//             showCounter: state.showCounter
//         };
//     } 
//     else if(action.type === "decrement")
//     {
//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter
//         }
//     }
//     // Sending in payload of value with the dispatach and can add the value from the payload property
//     else if(action.type === "incrementByFive")
//     {
//         return {
//             // Increase by 5 since value sent in is 5 and the lastest snapshot of counter is added onto like the other dispatch calls
//             counter: state.counter + action.value,
//             showCounter: state.showCounter
//         }
//     }
//     // For toggling the counter of showing
//     else if(action.type === "toggleCounter")
//     {
//         return {
//             counter: state.counter,
//             showCounter: !state.showCounter
//         }
//     }
//     //unchanged state for default and other times when dipatch type isn't one of the types above
//     return state;
// }

// Redux Store 
const store = configureStore({
    // React expects back only one reducer, reducer key passed in here combines all even when just calling counterSlice.reducer
        // If Multiple Slices created, pass in an object to the reducer key with key of counter: counterSlice.reducer( creates map of reducers )
    reducer: counterSlice.reducer
});
// createStore import from redux will not work since multiple reducers are passed in, can work if you use import of combineReducers from redux
    // Simpler fix is just to import { configureStore } from @reduxjs/toolkit -> This is redux toolkit specifically, merges all reducers into 1,
        // Pass in object to configureStore

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