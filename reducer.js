


import { useReducer } from "react";
export default function reducer() {
    const Action_ADD_LADU = "Action_ADD_LADU"
    const Action_SELL_LADU = "Action_SELL_LADU"

    const Action_ADD_KAJUKATRI = "Action_ADD_KAJUKATRI"
    const Action_SELL_KAJUKATRI = "Action_SELL_KAJUKATRI"

    const initialState = {
        LADU: 100,
        KAJUKATRI: 100,

    }

    const shopkeeper = (currentState = initialState, action) => {
        switch (action) {
            case Action_ADD_LADU:
                return { ...currentState, LADU: currentState.LADU + 1 }
            case Action_SELL_LADU:
                return { ...currentState, LADU: currentState.LADU - 1 }
            case Action_ADD_KAJUKATRI:
                return { ...currentState, KAJUKATRI: currentState.KAJUKATRI + 1 }
            case Action_SELL_KAJUKATRI:
                return { ...currentState, KAJUKATRI: currentState.KAJUKATRI - 1 }

            default:

        }

    }

    const [currentstock, dispecher] = useReducer(shopkeeper, initialState)
    return (
        <div>
            <p>LADU stock:{currentstock.LADU}</p>
            <p>KAJUKATRI stock:{currentstock.KAJUKATRI}</p>
            <button onclick={() => { dispecher(Action_ADD_LADU) }}>Buy LADU</button>
            <button onclick={() => { dispecher(Action_SELL_LADU) }}>Buy LADU</button>
            <button onclick={() => { dispecher(Action_ADD_KAJUKATRI) }}>Buy KAJUKATRI</button>
            <button onclick={() => { dispecher(Action_SELL_KAJUKATRI) }}>Buy KAJUKATRI</button>
        </div>

    )


}



