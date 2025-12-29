import { createStore } from 'redux';
import { createSlice } from '@reduxjs/toolkit'
const initialState = { counter: 0, inputMode: true }

const CounterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter++;
        },
        decrease(state, action) {
            state.counter = state.counter - Number(action.amount)
        },
        increase(state, action) {
            state.counter = state.counter - Number(action.amount)
        },
        toggle(state) {
            state.inputMode = !state.inputMode
        }
    }
})
const store = createStore(CounterSlice.reducer);

export default store;



