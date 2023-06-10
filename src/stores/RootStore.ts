import {configureStore} from '@reduxjs/toolkit';
import RootReducer from './reducers/reducer';

export const store = configureStore({
  reducer: {
    counter: RootReducer,
  },
});
