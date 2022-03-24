import { createStore } from 'redux';

// Reducer Function
const counterReducer  = (state = {counter:0},action) =>
{
    if(action.type === "increment")
    {
        return {
            counter: state.counter + 1
        };
    } 
    else if(action.type === "decrement")
    {
        return {
            counter: state.counter - 1
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