import {ADD_NUMBER, SUB_NUMBER, DECREMENT, INCREMENT } from "./constants.js";

const initialState = {
    counter: 0
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case ADD_NUMBER:
            return {...state, counter: state.counter + action.num};
        case SUB_NUMBER:
            return {...state, counter: state.counter - action.num};
        case DECREMENT:
            return {...state, counter: state.counter - 1};
        case INCREMENT:
            return {...state, counter: state.counter + 1};
        default:
            return state;
    }
}

export default reducer;