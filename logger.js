
const redux = require('redux')


const initialState = {
    Artificialflower: 100,
    Realflower: 100,
}

const Action_Buy_ARTIFICIALFLOWER = "Action_Buy_ARTIFICIALFLOWER"
const artificialflower = { type: Action_Buy_ARTIFICIALFLOWER }



const Action_Buy_REALEFLOWER = "Action_Buy_REALEFLOWER"
const realflower = { type: Action_Buy_REALEFLOWER }




const FlowerHandler = (currentState = initialState, actionToPerform) => {

    switch (actionToPerform.type) {

        case Action_Buy_ARTIFICIALFLOWER:
            return {
                ...currentState,
                Artificialflower: currentState.Artificialflower - 5

            }
        case Action_Buy_REALEFLOWER:
            return {
                ...currentState,
                Realflower: currentState.Realflower - 5

            }
        default:
            return currentState

    }

}

const store = redux.createStore(FlowerHandler)
console.log(store.getState());
const unsubscribe = store.subscribe(() => console.log(store.getState()))
store.dispatch(artificialflower)
store.dispatch(realflower)

unsubscribe()






