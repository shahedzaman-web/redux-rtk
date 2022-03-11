import {createSlice} from '@reduxjs/toolkit';
import {authApi} from '../services/authApi';

const initialState = {
  isAuthenticated: false,
  name: null,
  email: null,
  token: null,
};
const authSlice = createSlice ({
  name: 'auth',
  initialState,
  reducers: {
    logoutAction: state => {
      state.isAuthenticated = false;
      state.name = null;
      state.email = null;
      state.token = null;
    },
  },
  extraReducers: builder => {
    builder.addMatcher (
      authApi.endpoints.getAuthToken.matchFulfilled,
      (state, {payload}) => {
        console.log({payload});
        state.isAuthenticated = true;
        state.token = payload.data.token;
        state.name = payload.data.user.name;
        state.email = payload.data.user.email;
      

      }
    );
  },
});

export const {logoutAction} = authSlice.actions;

export default authSlice.reducer;
