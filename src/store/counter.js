import { createSlice } from '@reduxjs/toolkit';

const initialState = {counter: 0, showCounter: true};

// Slices from redux toolkit, more maintainable -> can also use createReducer from redux toolkit , createSlice is more powerful
    // All slices created need an identifier/name, JS can read initialState key as the initialState object above if just put initialState
        // Even though it looks like the latest state is being adjusted, Immer, a package of redux toolkit , does what we do manually in the reducer function
            // Immer creates a new object and creates new state even with just the little amount of code below,
                // it also keeps the state of other properties the same by just calling on state,
                    // since each reducer method is individual, if no payload is attached, action isn't requried as a param/arg.
                        // Need to assign a constant to the slice to put in 


    //createSlice creates identifiers so you don't have to, can be seen by typing counterSlice.actions.
    //counterSlice.actions. -> shows the 4 reducer method names, creates dispatch action 
        // counterSlice.actions.toggleCounter() returns an action object of this shape:
            //{type: 'some auto generated ID'}
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
                        // payload is the preset name from redux toolkit when somethins passed into this when being called, seen in Counter.js
            state.counter = state.counter + action.payload;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter
        }
    }
});

export const counterActions = counterSlice.actions;
export default counterSlice;