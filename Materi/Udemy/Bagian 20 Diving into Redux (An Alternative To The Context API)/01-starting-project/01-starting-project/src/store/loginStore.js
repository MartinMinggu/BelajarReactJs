import { createSlice } from '@reduxjs/toolkit'
const initialState = { isAuthentication: false }

const LoginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        login(state) {
            console.log('login');

            state.isAuthentication = true;
        },
        logout(state) {
            console.log('logout');
            state.isAuthentication = false;
        },

    }
})
export const loginActions = LoginSlice.actions;
export const loginReducer = LoginSlice.reducer;



