import { configureStore } from '@reduxjs/toolkit'

import { loginReducer } from './loginStore.js'
import { counterReducer } from './counterStore.js';

const store = configureStore({
    reducer: { counter: counterReducer, login: loginReducer }
});

export default store;