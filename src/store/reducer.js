import {ADD_NUMBER, SUB_NUMBER, DECREMENT, INCREMENT, CHANGE_BANNER, CHANGE_RECOMMEND} from "./constants.js";

const initialState = {
    counter: 0,
    banners: [],
    recommend: []
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
        case CHANGE_BANNER:
            return {...state, banners: action.banners};
        case CHANGE_RECOMMEND:
            return {...state, recommend: action.recommend};
        default:
            return state;
    }
}

export default reducer;