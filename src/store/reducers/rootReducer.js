
import { combineReducers } from '@reduxjs/toolkit'
import { authApi } from '../services/authApi';

import  authSlice  from '../state/authSlice';

export default combineReducers({
    [authApi.reducerPath]: authApi.reducer,
    [authSlice.reducerPath]: authSlice.reducer,
})