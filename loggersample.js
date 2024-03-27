
// const redux = require('redux')
// const reduxlogger = require('redux-logger')
// logger = reduxlogger.createLogger()



// const initialState = {
//     Artificialflower: 1000,
//     Realflower: 1000,
// }

// const Action_Buy_ARTIFICIALFLOWER = "Action_Buy_ARTIFICIALFLOWER"
// const artificialflower = { type: Action_Buy_ARTIFICIALFLOWER }



// const Action_Buy_REALEFLOWER = "Action_Buy_REALEFLOWER"
// const realflower = { type: Action_Buy_REALEFLOWER }




// const FlowerHandler = (currentState = initialState, actionPerform) => {

//     switch (actionPerform.type) {

//         case Action_Buy_ARTIFICIALFLOWER:
//             return {
//                 ...currentState,
//                 Artificialflower: currentState.Artificialflower - 5

//             }
//         case Action_Buy_REALEFLOWER:
//             return {
//                 ...currentState,
//                 Realflower: currentState.Realflower - 5

//             }
//         default:
//             return currentState

//     }

// }

// const store = redux.createStore(FlowerHandler, redux.applyMiddleware(logger))
// console.log(store.getState());
// const unsubscribe = store.subscribe(() => console.log(store.getState()))
// store.dispatch(artificialflower)
// store.dispatch(realflower)


// unsubscribe()



const redux = require('redux');
const reduxlogger = require('redux-logger')
logger = reduxlogger.createLogger()

// const createStore = redux.createStore;
//state
const initialState = {
    Cakes: 100,
    Chocolates: 300,
    Pastry: 400
}



//action
const Action_Buy_Cake = "Action_Buy_Cake"
//action nu function bnavyu ne ama object pass karvano ne eni enadar type ma action.
const buyCake = { type: Action_Buy_Cake }

const Action_Buy_Chocolates = "Action_Buy_Chocolates"
const buyChocolates = { type: Action_Buy_Chocolates }

const Action_Buy_Pastry = "Action_Buy_Pastry"
const buyPastry = { type: Action_Buy_Pastry }




//reducer
const bakeryManager = (state = initialState, action) => {
    switch (action.type) {
        case Action_Buy_Cake:
            return {
                ...state,
                Cakes: state.Cakes - 1
            }
        case Action_Buy_Chocolates:
            return {
                ...state,
                Chocolates: state.Chocolates - 1
            }
        case Action_Buy_Pastry:
            return {
                ...state,
                Pastry: state.Pastry - 1
            }



        default:
            return state
    }
}

//store
const store = redux.createStore(bakeryManager, redux.applyMiddleware(reduxlogger.logger))
console.log(store.getState());
const unsubscribe = store.subscribe(() => console.log(store.getState()))
store.dispatch(buyCake)
store.dispatch(buyChocolates)
store.dispatch(buyPastry)


unsubscribe()



// const redux = require('redux');
// const createStore = redux.createStore;

// // State
// const initialState = {
//     Cakes: 100,
//     Chocolates: 300,
//     Pastry: 400,
// };

// // Action types
// const Action_Buy_Cake = "Action_Buy_Cake";
// const Action_Buy_Chocolates = "Action_Buy_Chocolates";
// const Action_Buy_Pastry = "Action_Buy_Pastry";

// // Actions
// const buyCake = { type: Action_Buy_Cake };
// const buyChocolates = { type: Action_Buy_Chocolates };
// const buyPastry = { type: Action_Buy_Pastry };

// // Reducer
// const bakeryManager = (state = initialState, action) => {
//     switch (action.type) {
//         case Action_Buy_Cake:
//             return {
//                 ...state,
//                 Cakes: state.Cakes - 1
//             };
//         case Action_Buy_Chocolates:
//             return {
//                 ...state,
//                 Chocolates: state.Chocolates - 1
//             };
//         case Action_Buy_Pastry:
//             return {
//                 ...state,
//                 Pastry: state.Pastry - 1
//             };
//         default:
//             return state;
//     }
// };

// // Store
// const store = createStore(bakeryManager);
// console.log(store.getState());
// const unsubscribe = store.subscribe(() => console.log(store.getState()));
// store.dispatch(buyCake);
// store.dispatch(buyChocolates);
// store.dispatch(buyPastry);

// unsubscribe();









