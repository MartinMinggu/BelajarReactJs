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
            state.counter--;
        },
        decrease(state, action) {
            state.counter = state.counter - Number(action.payload)
        },
        increase(state, action) {
            state.counter = state.counter + Number(action.payload)
        },
        toggle(state) {
            state.inputMode = !state.inputMode
        }
    }
})
export const counterActions = CounterSlice.actions;
export const counterReducer = CounterSlice.reducer;