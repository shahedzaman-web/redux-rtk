import {configureStore} from '@reduxjs/toolkit';
import persistConfig from './persistConfig';
import {setupListeners} from '@reduxjs/toolkit/query/react';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import rootReducer from './reducers/rootReducer';
import { authApi } from './services/authApi';

const persistedReducer = persistReducer (persistConfig, rootReducer);

const store = configureStore ({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware ({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat (authApi.middleware),
});
setupListeners (store.dispatch);

export const persistor = persistStore (store);
export default store;
