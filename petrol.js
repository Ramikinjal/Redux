const redux = require('redux');
const reduxlogger = require('redux-logger')
logger = reduxlogger.createLogger()

// const createStore = redux.createStore;
//state
const initialState = {
    Petrol: 100,
    Desol: 300,
    CNG: 400
}



//action
const Action_Buy_Petrol = "Action_Buy_Petrol"
//action nu function bnavyu ne ama object pass karvano ne eni enadar type ma action.
const buyPetrol = { type: Action_Buy_Petrol }

const Action_Buy_Desol = "Action_Buy_Desol"
const buyDesol = { type: Action_Buy_Desol }

const Action_Buy_CNG = "Action_Buy_CNG"
const buyCNG = { type: Action_Buy_CNG }




//reducer
const Manager = (state = initialState, action) => {
    switch (action.type) {
        case Action_Buy_Petrol:
            return {
                ...state,
                Petrol: state.Petrol - 1
            }
        case Action_Buy_Desol:
            return {
                ...state,
                Desol: state.Desol - 1
            }
        case Action_Buy_CNG:
            return {
                ...state,
                CNG: state.CNG - 1
            }



        default:
            return state
    }
}

//store
const store = redux.createStore(Manager, redux.applyMiddleware(reduxlogger.logger))
console.log(store.getState());
const unsubscribe = store.subscribe(() => console.log(store.getState()))
store.dispatch(buyPetrol)
store.dispatch(buyDesol)
store.dispatch(buyCNG)


unsubscribe()