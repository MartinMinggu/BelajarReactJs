import { createSlice } from '@reduxjs/toolkit'
const initialState = { isAuthentication: false, email: '' }

const LoginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        login(state, action) {
            console.log('login: payload', action.payload);
            if (action.payload.password === '12345') {
                state.email = action.payload.email;
                state.isAuthentication = true;
                console.log('state.email : ', state.email)
            }
        },
        logout(state) {
            console.log('logout');
            state.isAuthentication = false;
        },

    }
})
export const loginActions = LoginSlice.actions;
export const loginReducer = LoginSlice.reducer;



