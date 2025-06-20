import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer/reducers'; // or combineReducers output

const store = configureStore({
  reducer: rootReducer,
  devTools: true, // enabled by default in dev mode
});

export default store;
