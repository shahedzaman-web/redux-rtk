
import storage from 'redux-persist/lib/storage' 
import { authApi } from './services/authApi';
// import createSecureStore from "redux-persist-expo-securestore";

// Secure storage
// const storage = createSecureStore();

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    whitelist: [authApi.reducerPath],
};
  

  export default persistConfig;
