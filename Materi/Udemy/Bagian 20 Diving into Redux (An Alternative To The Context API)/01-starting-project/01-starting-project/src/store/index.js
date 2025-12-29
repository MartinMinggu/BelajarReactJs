import { createStore } from 'redux';
// const counterStore = require('react-redux')
const initialState = { counter: 0, inputMode: true }
const counterReducer = (state = initialState, action) => {
    if (action.type === 'increment') {
        return {
            ...state,
            counter: state.counter + 1
        };
    }
    if (action.type === 'decrement') {
        return {
            ...state,
            counter: state.counter - 1
        };
    }
    if (action.type === 'decrease') {
        console.log('state.amount: ', action.amount);

        return {
            ...state,
            counter: state.counter - Number(action.amount)
        };
    }
    if (action.type === 'increase') {
        console.log('state.amount: ', action.amount);
        return {
            ...state,
            counter: state.counter + Number(action.amount)
        };
    }
    if (action.type === 'toggle') {
        return {
            ...state,
            inputMode: !state.inputMode
        };
    }
    return state;
}

const store = createStore(counterReducer);

export default store;