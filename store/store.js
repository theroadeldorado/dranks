import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userReducer from './userReducer';

export default configureStore({
  reducer: combineReducers({
    userReducer,
  }),
});
