const redux = require('redux')

const { thunk } = require('redux-thunk')
//axios library request send karva mate thay 6
const axios = require('axios')



initialState = {
    loading: true,
    data: [],
    error: ''
}
//action hamesha object return karvo joi ne ema type nam ni property hovi j joie.
//action 1
const REQUEST_FETCH_DATA = "REQUEST_FETCH_DATA"
const requestFetchData = { type: REQUEST_FETCH_DATA }
//action 2
const REQUEST_SUCCESS = "REQUEST_SUCCESS"
const request_success = (data) => { return { type: REQUEST_SUCCESS, apidata: data } }
//action 3
const REQUEST_FAIL = "REQUEST_FAIL"
const request_fail = { type: REQUEST_FAIL, error: "there is an error" }

const dataManager = (currentState = initialState, action) => {
    switch (action.type) {
        case REQUEST_FETCH_DATA:
            return {
                loading: true,
                data: [],
                error: ''
            }

        case REQUEST_SUCCESS:
            return {
                loading: false,
                data: action.apidata,
                error: ''
            }



        case REQUEST_FAIL:
            return {
                loading: false,
                data: [],
                error: action.error
            }
        default:
            return initialState

    }



}

const fetchData = () => {
    return function (dispatcher) {
        dispatcher(requestFetchData)

        axios.get('https://jsonplaceholder.typicode.com/todos/1')
            .then((data) => { dispatcher(request_success(data)) })

            .catch((error) => { dispatcher(request_fail()) })
    }
}


const store = redux.createStore(dataManager, redux.applyMiddleware(thunk))
store.subscribe(() => { console.log(store.getState()) })
store.dispatch(fetchData())
// unsubscribe()

