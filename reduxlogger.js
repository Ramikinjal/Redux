
const redux = require('redux')

const reduxlogger = require("redux-logger")

logger = reduxlogger.createLogger();


initialState = {
    milk: 99,
    curd: 100,
    buttermilk: 100,
}

const ACTION_BUY_MILK = "ACTION_BUY_MILK"
const getActionByMilk = { type: ACTION_BUY_MILK }

const ACTION_BUY_CURD = "ACTION_BUY_CURD"
const getActionByCurd = { type: ACTION_BUY_CURD }


const ACTION_BUY_BUTTERMILK = "ACTION_BUY_BUTTERMILK"
const getActionByButtermilk = { type: ACTION_BUY_BUTTERMILK }


const dairymanager = (currentState = initialState, actionToPerform) => {
    switch (actionToPerform.type) {
        case ACTION_BUY_MILK:
            return {
                ...currentState,
                milk: currentState.milk - 1
            }
        case ACTION_BUY_CURD:
            return {
                ...currentState,
                curd: currentState.curd - 1
            }
        case ACTION_BUY_BUTTERMILK:
            return {
                ...currentState,
                buttermilk: currentState.buttermilk - 1
            }
        default:
            return currentState
    }
}
const store = redux.createStore(dairymanager)
console.log(store.getState());
const unsubscribe = store.subscribe(() => console.log(store.getState()))
store.dispatch(getActionByMilk)
store.dispatch(getActionByCurd)
store.dispatch(getActionByButtermilk)

unsubscribe()