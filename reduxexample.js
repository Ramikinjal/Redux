
const redux = require("redux")
const createStore = redux.createStore
const ACTION_BUY_CAKE = "BUY_CAKE"
const ADD_CAKE = "cakerestore"

const action_buy_cake = () => {
    return { type: ACTION_BUY_CAKE, information: "User is trying to buy a cake" }

}
const add_cake = () => {
    return { type: ADD_CAKE, information: "cake is restore" }

}
const initialstate = {
    shopname: "Myshop",
    numberofcakes: 100
}

const cakeReducer = (state = initialstate, action) => {

    switch (action.type) {
        case ACTION_BUY_CAKE:
            return {
                ...state,
                numberofcakes: state.numberofcakes - 1
            }

        case ADD_CAKE:
            return {
                ...state,
                numberofcakes: state.numberofcakes + 1
            }
        default: return state


    }
}

// shop name :"cake shop",cake 9
const store = createStore(cakeReducer)

console.log(store.getState())

store.dispatch(action_buy_cake())

console.log(store.getState())
store.dispatch(add_cake())
console.log(store.getState());



