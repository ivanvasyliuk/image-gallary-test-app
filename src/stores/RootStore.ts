import {configureStore} from '@reduxjs/toolkit';
import photosReducer from './reducers/mainReducer';

export const store = configureStore({
  reducer: {
    photos: photosReducer,
  },
});
